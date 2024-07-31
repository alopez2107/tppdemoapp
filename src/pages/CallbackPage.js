import React, {useContext, useEffect} from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { Config, TokenManager, UserManager } from "@forgerock/javascript-sdk";
import AuthContext from "../context/auth-context";
import Card from "../components/ui/Card";

function CallbackPage() {
    console.log("In CallbackPage redirected from ID Cloud");
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const params = useParams();
    const ctx = useContext(AuthContext);
    const configMap = new Map();
    const resourceUrl = (params.id === 'aisp1')? "https://bcolpoc.encore.forgerock.com":"https://avalpoc2.encore.forgerock.com";
    const bankName = (params.id === 'aisp1')? "Banco de Occidente":"Banco de Bogotá";
  

  const codeParam = searchParams.get('code');
  const stateParam = searchParams.get('state');

  useEffect(() => {
    configMap.set("aisp1", {
        clientId: "TPPOpenBankingClient",
        redirectUri: `http://localhost:3000/aisp1/callback`,
        scope: 'openid profile email accounts',
        serverConfig: {
            baseUrl: "https://openam-bcolpoc.forgeblocks.com/am",
            timeout: '5000',
        },
        realmPath: "alpha",
        tree: "Login"
    });
  
    configMap.set("aisp2", {
        clientId: "TPPOpenBankingClient",
        redirectUri: `https://tppdemo.encore.forgerock.org/aisp2/callback`,
        scope: 'openid profile email account accountDetails',
        serverConfig: {
            baseUrl: "https://openam-avalpoc2.forgeblocks.com/am",
            timeout: '5000',
        },
        realmPath: "alpha",
        tree: "Login"
    });
  
    const configuration = configMap.get(params.id);
    Config.set(
        {
            clientId: configuration.clientId,
            redirectUri: configuration.redirectUri,
            scope: configuration.scope,
            serverConfig: {
                baseUrl: configuration.serverConfig.baseUrl,
                timeout: configuration.serverConfig.timeout,
            },
            realmPath: configuration.realmPath,
            tree: configuration.tree
        }  
    );

    async function getTokens() {
      if (codeParam && stateParam) {
        await TokenManager.getTokens({ query: { "code": codeParam, "state": stateParam } });
      } else {
        await TokenManager.getTokens({ forceRenew: false, login: 'redirect' });
      }
      // Get the current user
      const user = (await UserManager.getCurrentUser());
      /**
       * First, let's see if we get a user back from useJourneyHandler.
       * If we do, let's set the user data and redirect back to home.
       */
      if (user) {
        /**
         * Set user state/info on "global state"
         */
        ctx.setUsername(user?.name);
        ctx.setEmail(user.email);
        ctx.setAuthentication(true);
        ctx.setTenantID(params.id);
        ctx.setResourceUrl(resourceUrl);

        console.log(`User Name: ${ctx.userName} E-Mail: ${ctx.email} Is Authenticated: ${ctx.isAuthenticated} TenantID: ${ctx.tenantID} ResourceURL: ${ctx.resourceUrl}`);
      }
      navigate(`/aisp/${params.id}`);
    }
    getTokens();
  }, []);
    
   return (
    <Card>
        <h2>Redirecting you to {bankName} for Authentication...</h2>
    </Card>
   )
}

export default CallbackPage;