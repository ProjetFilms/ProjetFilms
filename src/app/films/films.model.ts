export class Film {
  id: number | undefined;
  titre: string | null;
  realisateur: string | null;
  duree: string | null;
  date: string | null;
  genre: string | null;

  constructor(
    titre: string = '',
    realisateur: string = '',
    duree: string = '',
    date: string = '',
    genre: string = ''
  ) {
    this.titre = titre;
    this.realisateur = realisateur;
    this.duree = duree;
    this.date = date;
    this.genre = genre;
  }
}
