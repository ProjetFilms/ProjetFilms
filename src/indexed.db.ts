import Dexie, { Table } from 'dexie';
import { Film } from './app/films/films.model';

export class IndexedDb extends Dexie {
  films!: Table<Film, number>;

  constructor() {
    super('Films');
    this.version(1).stores({
      films: '++id',
    });
    this.on('populate', () => this.maSuperFonction());
  }

  async maSuperFonction() {
    await db.films.bulkAdd([
      {
        id: undefined,
        titre: 'Toto',
        realisateur: 'Toto',
        duree: '1h34',
        date: '17/01/2024',
        genre: 'Comique',
      },
      {
        id: undefined,
        titre: 'Toto2',
        realisateur: 'Toto2',
        duree: '1h35',
        date: '17/01/2024',
        genre: 'Drame',
      },
    ]);
  }
}
export const db = new IndexedDb();
