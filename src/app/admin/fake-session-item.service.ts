import { Injectable } from '@angular/core';
import { Session } from '../session';
import { SESSIONITEMS } from './sessions';

@Injectable(
  // providedIn: 'root' (le service sera injecté dans toute l'app)
)
export class FakeSessionItemService {

  constructor() { }

  get(){
    return SESSIONITEMS;
  }

  add(sessionItem: any) {
    sessionItem.id = SESSIONITEMS.length + 1;
    SESSIONITEMS.push(sessionItem);
  }

  delete(sessionItem :any ) {
    let index;
    index = SESSIONITEMS.indexOf(sessionItem); 
    if (SESSIONITEMS.indexOf(sessionItem) >= 0) {
      SESSIONITEMS.splice(index, 1);//supprimer la session d'indice index
    }
  }
  
  getSession(id: number) {
    return SESSIONITEMS[id - 1];
  }
}
