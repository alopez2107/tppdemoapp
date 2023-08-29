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
            <Card className="control-panel__info">
                <div>
                    <h2>Customer Name</h2>
                    <p>{ctx.userName}</p>
                </div>
                <div>
                    <h2>Customer E-Mail</h2>
                    <p>{ctx.email}</p>
                </div>
            </Card>
            <button onClick={onReloadAccounts}>Reload Accounts</button>
            <button onClick={onLogout}>Logout</button>
        </Card>
    );
}

export default AccountControlPanel;