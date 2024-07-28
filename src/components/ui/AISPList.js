import React from "react";
import Card from "./Card";
import "./AISPList.css";
import bankLogo1 from "../../bancounioncolombialogo.jpeg";
import bankLogo2 from "../../bancodebogotalogo.png";
import { useNavigate } from "react-router-dom";

function AISPList() {
    const navigate = useNavigate();
    function onConnectToBank(id) {
        const path = (id === 'bdeocc')? 'aisp1': 'aisp2';
        navigate(`${path}/callback`);
    }

    return (
        <div>
            <Card className="aisp-list">
                <h2>JCPenney</h2>
                <img src={bankLogo1} alt="Bancolombia" width={230} height={190}/>
                <button onClick={() => {onConnectToBank("bdeocc")}}>Connect</button>
            </Card>
        </div>
    );
}


export default AISPList;