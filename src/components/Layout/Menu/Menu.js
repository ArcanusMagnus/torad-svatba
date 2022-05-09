import MenuItem from "./MenuItem";

import styles from "./Menu.module.css";
import menuLogo from "../../../assets/images/menu_logo.png";

const Menu = (props) => {

  const menuClickHandler = (event) => {
    props.onMenuClick(event);
  };

  let menuType = props.mobileMenu ? styles.mobileMenu : styles.menu;
  if (props.open) {
    menuType += " " + styles.active;
  }
  console.log(props.mobileMenu);
  
  return (
    <ul className={menuType}>
      <MenuItem
        link="/"
        onMenuClick={menuClickHandler}
      >
        Home
      </MenuItem>
      <MenuItem
        link="/program"
        onMenuClick={menuClickHandler}
      >
        Program
      </MenuItem>
      {!props.mobileMenu && <li><img src={menuLogo} alt="Toradovci-svatba logo"/></li>}
      <MenuItem
        link="/dotaznik"
        onMenuClick={menuClickHandler}
      >
        Dotazník
      </MenuItem>
      <MenuItem
        link="/kontakt"
        onMenuClick={menuClickHandler}
      >
        Kontakt &amp; informace
      </MenuItem>
    </ul>
  );
};

export default Menu;
