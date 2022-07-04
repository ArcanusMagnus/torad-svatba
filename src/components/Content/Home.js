import { useContext } from "react";

import Section from "../UI/Section";
import ContentBlock from "../UI/ContentBlock";
import LangContext from "../../store/lang-context";

import image from "../../assets/images/atmo/couple.jpg";
import square from "../../assets/images/atmo/couple-square.jpg";

const Home = (props) => {
  const ctx = useContext(LangContext);

  let title = "Tomáš a Kateřina. Láska je. Svatba bude.";
  let body = (
    <>
      <p>
        Po dlouhém zvažování, dvou double-blind studiích a jedné
        multidimenzionální analýze jsme došli k závěru, že spolu chceme strávit
        zbytek života. A po dalším experimentálním vyšetřování problematiky jsme
        došli k závěru, že se chceme vzít.
      </p>
      <p>
        Co začalo na LAN párty, na které ani jeden ze studovaných objektů neměl
        být přítomen, bude zakončeno a vrženo vpřed do budoucnosti v Mlýně na
        Dobré vodě. Budeme moc rádi, když nás v pokračování tohoto experimentu
        podpoříte svou přítomností, jelikož kontrolní skupina není nikdy dost
        velká.
      </p>
      <p>
        V rámci příprav vyhodnocovacích skriptů je nutné shromážení podkladů a
        návrh měřicí metodiky proběhne až po vyplnění R.S.V.P. všech účastníků
        studie. Proto Vás všechny prosíme, abyste, než tyto stránky opustíte,
        záložku R.S.V.P. navštívili a patřičné informace ke zpracování poskytli.
      </p>
      <p>
        Pokud by nastala nejistota vstupních údajů nebo implicita kritérií
        studie, neváhejte kontaktovat její řešitele.
      </p>
    </>
  );

  if (ctx.lang === "pl") {
    title = "Tomasz i Katarzyna. Miłość jest. Ślub będzie.";
    body = (
      <>
        <p>
          Po długim rozmyślaniu, dwóch double-blind próbach i jednej
          wieloprzestrzennej analizie, doszliśmy do wniosku, że chcemy resztę
          naszego życia spędzić razem. A po kolejnym eksperymentalnym badaniu
          problematyki postanowiliśmy, że się pobierzemy.
        </p>
        <p>
          To, co miało początek na LAN imprezie, w której ani jeden z badanych
          obiektów nie miał brać udziału, będzie dokończone i wysłane dalej w
          przyszłość w Mlýn na Dobré vodě. Ponieważ grupa kontrolna nigdy nie
          jest wystarczająco duża, będziemy bardzo szczęśliwi, jeśli udzielicie
          nam swego wsparcia uczestnicząc w kontynuacji tego eksperymentu.
        </p>
        <p>
          W ramach przygotowania skryptów ewaluacyjnych, konieczne jest
          utworzenie zbioru danych, na podstawie których będzie zaprojektowana
          metodyka badań, a to będzie możliwe dopiero po wypełnieniu zakładki
          R.S.V.P. Dlatego wszystkich Was prosimy, o jej wypełnienie.
        </p>
        <p>
          W przypadku niepewności danych wejściowych lub niejasnych kryteriów
          badania, nie wahaj się zapytać autorów.
        </p>
      </>
    );
  }

  return (
    <Section>
      <ContentBlock image={image} square={square}>
        <h2>{title}</h2>
        <h3>
          3<sup>3</sup>.3<sup>2</sup>.2022
        </h3>
        {body}
      </ContentBlock>
    </Section>
  );
};

export default Home;
