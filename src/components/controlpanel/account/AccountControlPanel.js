import { useContext, useState, useEffect } from "react";
import Card from "../../ui/Card";
import "../../ui/ControlPanel.css";
import AuthContext from "../../../context/auth-context";
import { useNavigate } from "react-router-dom";

function AccountControlPanel(props) {
    const ctx = useContext(AuthContext)
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(ctx.isAuthenticated)

    function onReloadAccounts() {
        console.log("Reload Accounts clicked!!!");
    }

    function onLogout() {
        ctx.setAuthentication(false);
        setIsAuthenticated(false);
    }

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/");
        }

    }, [isAuthenticated]);

    return (
        <Card className="control-panel__main">
            <button onClick={onReloadAccounts}>Reload Accounts</button>
            <button onClick={onLogout}>Logout</button>
        </Card>
    );
}

export default AccountControlPanel;