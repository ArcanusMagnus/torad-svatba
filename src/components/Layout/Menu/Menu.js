import { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import MenuItem from "./MenuItem";
import LangContext from "../../../store/lang-context";
import Button from "../../UI/Button";

import styles from "./Menu.module.css";
import menuLogo from "../../../assets/images/menu_logo.png";

const Menu = (props) => {
  const ctx = useContext(LangContext);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.lang);
    let lang;
    if (queryParams && queryParams.get("lang")) {
      lang = queryParams.get("lang");
    } else {
      lang = ctx.lang;
      navigate("?lang=" + lang, { replace: false });
    }
  }, [ctx.lang, navigate, location.lang]);

  const langButtonClass = ctx.lang === "pl" ? "cz" : "pl";

  const dotaznik = "R.S.V.P.";
  const kontakt =
    ctx.lang === "pl" ? "Kontakt & informacje" : "Kontakt & informace";

  const menuClickHandler = (event) => {
    props.onMenuClick(event);
  };

  let menuType = props.mobileMenu ? styles.mobileMenu : styles.menu;
  if (props.open) {
    menuType += " " + styles.active;
  }

  return (
    <>
      <ul className={menuType}>
        <MenuItem link="/" onMenuClick={menuClickHandler}>
          Home
        </MenuItem>
        <MenuItem link="/program" onMenuClick={menuClickHandler}>
          Program
        </MenuItem>
        {!props.mobileMenu && (
          <li>
            <img src={menuLogo} alt="Toradovci-svatba logo" />
          </li>
        )}
        <MenuItem link="/dotaznik" onMenuClick={menuClickHandler}>
          {dotaznik}
        </MenuItem>
        <MenuItem link="/kontakt" onMenuClick={menuClickHandler}>
          {kontakt}
        </MenuItem>
      </ul>
      <Button
        onClick={ctx.changeLang}
        className={styles[`${langButtonClass}`]}
      ></Button>
    </>
  );
};

export default Menu;
