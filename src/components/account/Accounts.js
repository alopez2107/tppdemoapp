import Card from "../ui/Card";
import "./AccountsList.css";
import Account from "./Account";

function Accounts(props) {
    return (
        <Card className="accounts-header">
            {props.accounts.length > 0 ? () => {
                props.accounts.map((account) => {
                    <Account account={account}/>
                });
            }:(
               <div>
                
               </div> 
            )}
        </Card>
    );

}

export default Accounts;