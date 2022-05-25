import { useContext } from "react";

import LangContext from "../store/lang-context";
import Section from "./UI/Section";
import ContentBlock from "./UI/ContentBlock";

import image from "../assets/images/atmo/gopnik.jpg";
import square from "../assets/images/atmo/gopnik-square.jpg";

const NotFound = () => {
  const ctx = useContext(LangContext);

  let title = '404 - Stránka nenalezena';
  let content = (<p>Na tomto webu je lecos, ale zrovna na této adrese bohužel nikoliv. Pokud myslíš, že by mělo být, kontaktuj <a href="mailto:jan@majernicek.cz">autora</a>.</p>)

  if(ctx.lang === 'pl'){
      title = '404 - Co kurwa?';
      content = (<p>Strona nie znaleziona</p>);
  }
  
  return (
    <Section>
      <ContentBlock image={image} square={square}>
          <h2>{title}</h2>
          {content}
      </ContentBlock>
    </Section>
  );
};

export default NotFound;
