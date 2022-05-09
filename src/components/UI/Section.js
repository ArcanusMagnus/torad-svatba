import styles from "./Section.module.css";
import cog_wheel from "../../assets/images/float/cog-wheel.png";
import atom from "../../assets/images/float/atom.png";

const Section = (props) => {
  const classes = styles.section + " " + props.className;

  return (
    <section className={classes} id={props.id}>
      <img src={cog_wheel} alt="Cog wheel" id={styles.cogwheel} />
      <img src={atom} alt="Atom" id={styles.atom} />
      {props.children}
    </section>
  );
};

export default Section;
