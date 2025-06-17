import styles from "./styles.module.css";

const Loading = () => {
    return (
        <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <span className={styles["text-loading"]}>Carregando...</span>
        </div>
    );
}

export default Loading;