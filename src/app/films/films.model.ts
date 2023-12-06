export class Film {
    titre: string;
    realisateur: string;
    duree: string;
    date: string;
    genre: string;

    constructor(titre: string = '', realisateur: string = '', duree: string = '', date: string = '', genre: string = ''){
        this.titre = titre;
        this.realisateur = realisateur;
        this.duree = duree;
        this.date = date;
        this.genre = genre;
    }
}