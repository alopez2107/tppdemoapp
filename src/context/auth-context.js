import React, { useState } from "react";
import { FRUser } from "@forgerock/javascript-sdk";


const AuthContext = React.createContext(
    {
        isAuthenticated: false,
        userName: null,
        email: null,
        tenantID: null,
        resourceUrl: null,
        setAuthentication: (value) => {},
        setEmail: (value) => {},
        setUsername: (value) => {}, 
        setTenantID: (value) => {},
        setResourceUrl: (value) => {}  
    }
);

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState(null);
    const [username, setUsername] = useState(null);
    const [tenantID, setTenantID] = useState(null);
    const [resourceUrl, setResourceUrl] = useState(null);

    async function setAuthenticationWrapper(value) {
        if (!value) {
            try {
                await FRUser.logout();
            }
            catch(err) {
                console.error(`Error: logout did not successfully complete; ${err}`);
            }  
        }
        setIsLoggedIn(value);
    }

    function setEmailWrapper(mail) {
        console.log(`Setting Email to: ${mail}`);
        setEmail(mail);
    }

    function setUsernameWrapper(uName) {
        console.log(`Setting Username to: ${uName}`);
        setUsername(uName);
    }

    function setTenantIDWrapper(tenantID) {
        console.log(`Setting Tenant ID to: ${tenantID}`);
        setTenantID(tenantID);
    }

    function setResourceUrlWrapper(resourceUrl) {
        console.log(`Setting Resource URL to: ${resourceUrl}`);
        setResourceUrl(resourceUrl);
    }

    return (
        <AuthContext.Provider value={{
            isAuthenticated: isLoggedIn,
            userName: username,
            email: email,
            tenantID: tenantID,
            resourceUrl: resourceUrl,
            setAuthentication: setAuthenticationWrapper,
            setEmail: setEmailWrapper,
            setUsername: setUsernameWrapper,
            setTenantID: setTenantIDWrapper,
            setResourceUrl: setResourceUrlWrapper
        }}>{props.children}</AuthContext.Provider>
    );
}

export default AuthContext;