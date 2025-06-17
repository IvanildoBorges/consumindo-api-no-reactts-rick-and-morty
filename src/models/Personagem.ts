export class Personagem {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    episode: [];

    constructor(personagem: Personagem) {
        this.id = personagem.id;
        this.name = personagem.name;
        this.status = personagem.status;
        this.species = personagem.species;
        this.type = personagem.type;
        this.gender = personagem.gender;
        this.image = personagem.image;
        this.episode = personagem.episode;
    }
}
