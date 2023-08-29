import Card from "../ui/Card";
import "./AccountsList.css";
import Account from "./Account";

function Accounts(props) {
    return (
        <div className="accounts-list__header">
            {props.accounts.map(acct => <Account account={acct}/>)}
        </div>
    );
}

export default Accounts;