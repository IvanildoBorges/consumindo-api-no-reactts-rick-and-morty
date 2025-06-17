import { Link } from "react-router-dom";
import type { Personagem } from "../../models/Personagem";
import styles from "./style.module.css";

type Props = {
    item: Personagem;
    page: string;
    funcao: () => void;
    simples?: boolean;
    textBtn: string;
}

const Card = ({
    item,
    funcao,
    simples = true,
    page,
    textBtn
}: Props) => {
    return (
        <div className={styles["card-item"]}>
            <Link to={`${page}?id=${item.id}`} className={styles["box-imagem"]}>
                <img
                    src={item.image}
                    alt={`Imagem de ${item.name}`}
                    title={`Imagem de ${item.name}`}
                />
            </Link>
            <div className={styles["content-info"]}>
                <Link to={`${page}?id=${item.id}`} className={styles.name}>{item.name}</Link>
                <p className={styles.type}>{item.species}</p>
                {simples && (
                    <div className={styles["box-info"]}>
                        <div className={styles["info-item"]}>
                            <span className={styles["item-status-title"]}>Status</span>
                            <span className={styles["item-status-value"]}>{item.status}</span>
                        </div>
                        <div className={styles["info-item"]}>
                            <span className={styles["item-status-title"]}>Tipo</span>
                            <span className={styles["item-status-value"]}>{item.type || "Unknown"}</span>
                        </div>
                        <div className={styles["info-item"]}>
                            <span className={styles["item-status-title"]}>Gênero</span>
                            <span className={styles["item-status-value"]}>{item.gender}</span>
                        </div>
                    </div>
                )}
                <button className={styles["btn-cta"]} onClick={funcao}>{textBtn}</button>
            </div>
        </div>
    );
}

export default Card;