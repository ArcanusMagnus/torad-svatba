import { NavLink } from "react-router-dom";

import styles from "./MenuItem.module.css";

const MenuItem = (props) => {
  const link = props.link;
  return (
    <li className={styles.menuItem} onClick={props.onMenuClick}>
      <NavLink
        to={link}
        className={({ isActive }) => (isActive ? styles.active : undefined)}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default MenuItem;
