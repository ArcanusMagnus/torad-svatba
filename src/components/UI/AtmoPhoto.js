import useScreenResolution from "../../hooks/use-resolution";
import styles from "./AtmoPhoto.module.css";

const AtmoPhoto = (props) => {
  const width = useScreenResolution().width;
  const content = props.iframe ? (
    <div className={styles.container}>
      <iframe
        title="mapa"
        src={props.iframe}
        frameBorder="0"
      ></iframe>
    </div>
  ) : (
    <img src={width > 1720 ? props.image : props.square} alt="" />
  );
  return (
    <>
      <div className={styles[props.wideClass] || styles.hidden}>
        {content}
      </div>
      <div className={styles[props.squareClass]}>
        {content}
      </div>
    </>
  );
};

export default AtmoPhoto;
