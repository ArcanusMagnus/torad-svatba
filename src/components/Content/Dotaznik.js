import Section from "../UI/Section";
import ContentBlock from "../UI/ContentBlock";

const Dotaznik = (props) => {
  return (
    <Section>
      <ContentBlock type="form">
        <iframe
          title="rsvp"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfAx8yNGWvhqFultyGhPkPl8AY1ND_cokziEcL0ppYle7pkVg/viewform?embedded=true"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
        </iframe>
      </ContentBlock>
    </Section>
  );
};

export default Dotaznik;
