import Section from "../UI/Section";
import ContentBlock from "../UI/ContentBlock";

import image from "../../assets/images/atmo/couple.jpg";
import square from "../../assets/images/atmo/couple-square.jpg";

const Home = (props) => {
  return (
    <Section>
      <ContentBlock image={image} square={square}>
        <h2>Svatba Tomáše a Kateřiny</h2>
        <h3>
          3<sup>3</sup>.3<sup>2</sup>.2022
        </h3>
        <p>
          Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci
          porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis
          ac lectus. Nulla porttitor accumsan tincidunt. Curabitur non nulla sit
          amet nisl tempus convallis quis ac lectus. Vivamus magna justo,
          lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue
          leo eget malesuada. Donec rutrum congue leo eget malesuada.
        </p>
      </ContentBlock>
    </Section>
  );
};

export default Home;
