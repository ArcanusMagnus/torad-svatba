import ContentBlock from "../UI/ContentBlock";
import Section from "../UI/Section";

import styles from "./Program.module.css";
import mlyn from "../../assets/images/atmo/mlyn.jpg";
import square from "../../assets/images/atmo/mlyn-square.jpg";

const Home = (props) => {
  return (
    <Section>
      <ContentBlock className={styles.program} image={mlyn} square={square}>
        <h2>Předběžný program</h2>
        <table>
          <tr>
            <td>11:00</td>
            <td>Příjezd hostů</td>
          </tr>
          <tr>
            <td>12:00</td>
            <td>Obřad</td>
          </tr>
          <tr>
            <td>12:30</td>
            <td>Otevření rautu</td>
          </tr>
          <tr>
            <td>13:00</td>
            <td>Focení - selektivní účast hostů</td>
          </tr>
          <tr>
            <td>15:00</td>
            <td>Volná zábava</td>
          </tr>
        </table>
      </ContentBlock>
    </Section>
  );
};

export default Home;
