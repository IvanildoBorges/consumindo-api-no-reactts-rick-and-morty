import { useNavigate } from "react-router-dom";
import ButtonCTA from "../../components/ButtonCTA";
import styles from "./style.module.css";

const NotFound = () => {
    const navigate = useNavigate();

    const goToHome = () => navigate("/");

    return (
        <section className={`section ${styles["not-found"]}`}>
            <p className={styles.textNot}>Você se perder!</p>
            <p className={styles.subTextNot}>Clique no botão abaixo para voltar para tela inicial.</p>
            <ButtonCTA textBtn="Voltar ao inicio" funcao={goToHome} />
        </section>
    );
}

export default NotFound;