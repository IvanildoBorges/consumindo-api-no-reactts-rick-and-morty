import { Episodio } from "../models/Episodio";
import { Personagem } from "../models/Personagem";
import fetchEntidade from "../utils/fetchEntidade";

const URL = "https://rickandmortyapi.com/api";
const headers = {
    "Content-Type": "application/json"
}

const personagemApi = {
    getPersonagens: async (ids?: number | number[]) => {
        return await fetchEntidade(URL, headers, "character", ids, Personagem);
    },

    getEpisodios: async (ids?: number | number[]) => {
        return await fetchEntidade(URL, headers, "episode", ids, Episodio);
    },
};

export default personagemApi;