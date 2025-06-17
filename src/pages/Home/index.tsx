import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import personagemApi from "../../api/api";
import Card from "../../components/Card";
import type { Personagem } from "../../models/Personagem";
import styles from "./style.module.css";

const HomePage = () => {
    const [personagens, setPersonagens] = useState<Personagem[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const pegaDados = async () => {
            const dados: Personagem[] = await personagemApi.getPersonagens([1, 2, 3, 4, 5]);
            setPersonagens(dados);
        };

        pegaDados();
    }, []);

    const goToEps = (lista: []) => {
        // extrai os IDs das URLs dos episódios
        const ids = lista.map((url: string) => Number(url.split("/").pop()));
        navigate(`/episodios?id=${ids}`);
    }

    const geraCards = () => {
        return personagens.length > 0 && (
            personagens.map(item => (
                <li key={item.id}>
                    <Card
                        item={item}
                        funcao={() => goToEps(item.episode)}
                        simples={false}
                        page="/personagens"
                        textBtn={`${item.episode.length} Episódios`}
                    />
                </li>
            ))
        );
    }

    return (
        <>
            <main className={`section ${styles["main-container"]}`}>
                <h2 className={styles.titulo2}>Em destaque</h2>
                <ul className={styles["lista-wrapper"]}>
                    {geraCards()}
                </ul>
            </main>
        </>
    );
}

export default HomePage;