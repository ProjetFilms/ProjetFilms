export class Film {
  id: number | null;
  titre: string | null;
  realisateur: string | null;
  duree: string | null;
  date: string | null;
  genre: string | null;

  constructor(
    id: number = 0,
    titre: string = '',
    realisateur: string = '',
    duree: string = '',
    date: string = '',
    genre: string = ''
  ) {
    this.id = id;
    this.titre = titre;
    this.realisateur = realisateur;
    this.duree = duree;
    this.date = date;
    this.genre = genre;
  }
}
