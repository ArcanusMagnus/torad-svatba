import styles from "./Author.module.css";

const Author = () => {
  return (
    <div className={styles.author}>
      Designed &amp; coded by{" "}
      <a href="mailto:jan@majernicek.cz">Jan Majerníček</a>.
    </div>
  );
};

export default Author;
