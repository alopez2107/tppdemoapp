import React from "react";
import Card from "./Card";
import "./AISPList.css";
import bankLogo1 from "../../bancodeoccidentelogo.png";
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
                <h2>Banco de Occidente</h2>
                <img src={bankLogo1} alt="Banco de Occidente" width={250} height={140}/>
                <button onClick={() => {onConnectToBank("bdeocc")}}>Connect</button>
            </Card>
            <Card className="aisp-list">
                <h2>Banco de Bogotá</h2>
                <img src={bankLogo2} alt="Banco de Bogotá" width={140} height={140}/>
                <button onClick={() => {onConnectToBank("bdebog")}}>Connect</button>
            </Card>
        </div>
    );
}


export default AISPList;