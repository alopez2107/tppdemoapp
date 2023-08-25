import Card from "./Card";
import { useNavigate } from "react-router-dom";
import "./Authentication.css";


function Authentication(props) {
    const navigate = useNavigate();

    function onAuthenticateToBank() {
        props.onAuthenticateToBank();
    }

    function handleBack() {
        navigate(-1);
    }


    return (
        <Card className="authentication">
            <p>Click on Continue to Authenticate to your Bank and provide Consent</p>
            <button onClick={onAuthenticateToBank} >Authenticate to Bank</button>
            <button onClick={handleBack}>Back to Banks</button>
        </Card>

    );
}

export default Authentication;