import { Config, HttpClient } from "@forgerock/javascript-sdk";

export default async function sendHTTPRequest(tenant, resourceUrl, httpMethod, data) {
    const configMap = new Map();

    configMap.set("aisp1", {
        clientId: "TPPOpenBankingClient",
        redirectUri: `https://tppdemo.encore.forgerock.org/aisp1/callback`,
        scope: 'openid profile email',
        serverConfig: {
            baseUrl: "https://openam-avalpoc.forgeblocks.com/am",
            timeout: '5000',
        },
        realmPath: "alpha",
        tree: "Login"
    });
  
    configMap.set("aisp2", {
        clientId: "TPPOpenBankingClient",
        redirectUri: `https://tppdemo.encore.forgerock.org/aisp2/callback`,
        scope: 'openid profile email',
        serverConfig: {
            baseUrl: "https://openam-avalpoc2.forgeblocks.com/am",
            timeout: '5000',
        },
        realmPath: "alpha",
        tree: "Login"
    });
  
    const configuration = configMap.get(tenant);
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
    let json
    try {
        const response = await HttpClient.request({
            init: {
                method: httpMethod,
                body: JSON.stringify(data),
            },
            timeout: 0,
            url: resourceUrl,
        });
        if (!response.ok) {
            throw new Error(`Status ${response.status}: API request failed`);
        }
        json = await response.json();
    }
    catch (err) {
        console.error(`Error: API request; ${err}`);
        json = {
            error: err.message,
        };
    }
    return json;
}