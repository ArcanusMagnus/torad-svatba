import Card from "../UI/Card";
import AtmoPhoto from "../UI/AtmoPhoto";

import styles from "./ContentBlock.module.css";

const ContentBlock = (props) => {
  let content = "";
  switch (props.type) {
    case "form":
      content = <div className={styles["content-block__form"]}>{props.children}</div>;
      break;
    default:
      content = (
        <>
          <AtmoPhoto
            image={props.image}
            square={props.square}
            iframe={props.iframe}
            wideClass="content-block-left"
            squareClass="content-block-left__square"
          />
          <div className={styles["content-block-right"]}>{props.children}</div>
        </>
      );
  }
  const classes = props.className + " " + styles["content-block"];
  return <Card className={classes}>{content}</Card>;
};

export default ContentBlock;
