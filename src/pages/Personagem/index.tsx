import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import personagemApi from "../../api/api";
import Card from "../../components/Card";
import type { Personagem } from "../../models/Personagem";
import styles from "../Home/style.module.css";

const PagePersonagem = () => {
    const [personagens, setPersonagens] = useState<Personagem[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const pegaDados = async () => {
            const dados: Personagem[] = await personagemApi.getPersonagens();
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
                <h2 className={styles.titulo2}>Todos os personagens</h2>
                <ul className={styles["lista-wrapper"]}>
                    {geraCards()}
                </ul>
            </main>
        </>
    );
}

export default PagePersonagem;