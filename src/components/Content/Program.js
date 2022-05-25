import { useContext } from "react";

import ContentBlock from "../UI/ContentBlock";
import Section from "../UI/Section";
import LangContext from "../../store/lang-context";

import styles from "./Program.module.css";
import mlyn from "../../assets/images/atmo/mlyn.jpg";
import square from "../../assets/images/atmo/mlyn-square.jpg";

const Home = (props) => {
  let ctx = useContext(LangContext);

  let title = "Předběžný program";
  let content = (
    <table>
      <tbody>
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
      </tbody>
    </table>
  );

  if (ctx.lang === "pl") {
    title = "Program Wstępny";
    content = (<table>
      <tbody>
        <tr>
          <td>11:00</td>
          <td>Przyjazd gości</td>
        </tr>
        <tr>
          <td>12:00</td>
          <td>Ceremonia</td>
        </tr>
        <tr>
          <td>12:30</td>
          <td>Raut</td>
        </tr>
        <tr>
          <td>13:00</td>
          <td>Fotografowanie</td>
        </tr>
        <tr>
          <td>15:00</td>
          <td>Zabawa</td>
        </tr>
      </tbody>
    </table>)
  }

  return (
    <Section>
      <ContentBlock className={styles.program} image={mlyn} square={square}>
        <h2>{title}</h2>
        {content}
      </ContentBlock>
    </Section>
  );
};

export default Home;
