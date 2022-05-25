import { useContext } from "react";

import Section from "../UI/Section";
import ContentBlock from "../UI/ContentBlock";
import LangContext from "../../store/lang-context";

import image from "../../assets/images/atmo/couple.jpg";
import square from "../../assets/images/atmo/couple-square.jpg";

const Kontakt = (props) => {
  const ctx = useContext(LangContext);

  const iframe = "https://frame.mapy.cz/s/jutofufubo";
  let title = "Kontakt & informace";
  let content = (
    <>
      <p>
        Mlýn na Dobré vodě se nachází na území Prahy a v dochozí vzdálenosti je
        zastávka autobusu Sídliště Petrovice. Venue poskytuje zastřešený
        prostor, ale pokud bude hezky, bude větší část svatby venkovní.
      </p>
      <p>
        Prosíme, nekupujte nám svatební dary, budeme však rádi, když nám
        přispějete na organizaci svatby.
      </p>
      <p>
        Parkování přímo u Mlýna je omezené, doporučujeme parkování na sídlišti,
        které je 150 metrů od Mlýna.
      </p>
      <p>
        Adresa: Mlýn na Dobré vodě, 104 00 Praha-Křeslice
        <br />V případě dotazů nás kontaktujte na{" "}
        <a href="tel:+420739655930">+420 739 655 930</a>
      </p>
    </>
  );

  if (ctx.lang === "pl") {
    title = "Kontakt & informacje";
    content = (
      <>
        <p>
          Prosimy, nie kupujcie nam żadnych prezentów, ale będziemy wdzięczni,
          jeśli nam pomożecie z finansowaniem przyjęcia.
        </p>
        <p>
          Adres przyjęcia: Mlýn na Dobré vodě, 104 00 Praha-Křeslice
          <br />W przypadku jakichkolwiek niejasności kontaktujcie nas na tel.:{" "}
          <a href="tel:+420739655930">+420 739 655 930</a>
        </p>
      </>
    );
  }

  return (
    <Section>
      <ContentBlock image={image} square={square} iframe={iframe}>
        <h2>{title}</h2>
        {content}
      </ContentBlock>
    </Section>
  );
};

export default Kontakt;
