import styles from "./style.module.css";

type Props = {
    funcao: () => void,
    textBtn: string;
}

const ButtonCTA = ({ funcao, textBtn }: Props) => {
    return (
        <button className={styles["btn-cta"]} onClick={funcao}>{textBtn}</button>
    );
}

export default ButtonCTA;