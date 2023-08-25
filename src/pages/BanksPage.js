import { NavLink } from "react-router-dom";
import classes from "./Banks.module.css";


function BanksPage() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/aisp/bdeocc">Banco de Occidente</NavLink>
          </li>
          <li>
            <NavLink to="/aisp/bdebog">Banco de Bogotá</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default BanksPage;
