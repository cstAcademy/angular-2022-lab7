import { Injectable } from '@angular/core';
import { PeriodicElementInterface } from './PeriodicElementInterface';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  private periodicElements: PeriodicElementInterface[] = [
    { position: 1, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 2, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 3, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 6, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Boron', weight: 10.811, symbol: 'B' },
  ];

  constructor() {}

  getElements(): PeriodicElementInterface[] {
    console.log(this.periodicElements);
    return this.periodicElements;
  }

  sortByWeight(): PeriodicElementInterface[] {
    return this.periodicElements.sort((a, b) => (a.weight > b.weight ? 1 : -1));
  }
}
