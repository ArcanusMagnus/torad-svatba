import { Link } from "react-router-dom";

import Card from "../UI/Card";
import Section from "../UI/Section";
import AtmoPhoto from "../UI/AtmoPhoto";

import styles from "./Home.module.css";

const Home = (props) => {
  return (
    <Section>
      <Card className={styles.home}>
        <AtmoPhoto
          wideClass={styles["home-left"]}
          squareClass={styles["home-left__square"]}
        />
        <div className={styles["home-right"]}>
          <h2>Svatba Tomáše a Kateřiny</h2>
        </div>
      </Card>
    </Section>
  );
};

export default Home;
