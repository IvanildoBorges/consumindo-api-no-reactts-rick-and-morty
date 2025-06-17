import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import personagemApi from "../../api/api";
import Card from "../../components/Card";
import type { Episodio } from "../../models/Episodio";
import styles from "../Home/style.module.css";

const PageListaEpsodios = () => {
    const [searchParams] = useSearchParams();
    const [episodios, setEpisodios] = useState<Episodio[]>([]);
    const [imagem, setImagem] = useState<string>("");

    const buscaEpisodios = async (ids?: number[]) => {
        const dados: Episodio[] = await personagemApi.getEpisodios(ids);
        setEpisodios(dados);
    };

    useEffect(() => {
        const idParam = searchParams.get("id");

        if (!idParam) {
            buscaEpisodios();
            setImagem("https://cdn.europosters.eu/image/1300/35959.jpg");
            return;
        };

        const ids = idParam.split(",").map(Number); // transforma em array de números

        buscaEpisodios(ids);
        setImagem("https://br.web.img3.acsta.net/pictures/17/11/06/14/13/5164749.jpg");
    }, [searchParams]);

    const goToStreaming = () => {
        window.location.href = "https://www.google.com/search?q=rick+e+morty+onde+assistir";
    }

    const geraCards = () => {
        return episodios.length > 0 && (
            episodios.map(item => (
                <li key={item.id}>
                    <Card
                        item={item}
                        funcao={goToStreaming}
                        page="/episodios"
                        textBtn="Onde assistir"
                        image={imagem}
                    />
                </li>
            ))
        );
    }

    return (
        <>
            <main className={`section ${styles["main-container"]}`}>
                <h2 className={styles.titulo2}>{searchParams ? `Aparições ${episodios.length} episódios` : "Todos os episódios"}</h2>
                <ul className={styles["lista-wrapper"]}>
                    {geraCards()}
                </ul>
            </main>
        </>
    );
}

export default PageListaEpsodios;