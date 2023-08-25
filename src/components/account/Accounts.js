import Card from "../ui/Card";
import "./AccountsList.css";
import Account from "./Account";

function Accounts(props) {
    return (
        <Card className="accounts-header">
            {props.accounts.map(acct => <Account account={acct}/>)}
        </Card>
    );
}

export default Accounts;