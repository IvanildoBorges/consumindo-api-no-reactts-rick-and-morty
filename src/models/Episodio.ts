export class Episodio {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: [];

    constructor(episodio: Episodio) {
        this.id = episodio.id;
        this.name = episodio.name;
        this.air_date = episodio.air_date;
        this.episode = episodio.episode;
        this.characters = episodio.characters;
    }
}
