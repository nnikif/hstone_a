import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {cardsURL, collectible, httpOptions, numberOfCardsOnADeck} from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  cards: Array<Object>;
  cardsAll: Array<Object>;
  tableCards: Array<Object>;
  shiftCards = 0;
  private rarity = 'Any';
  private race = '';
  private mana = 0;
  private description = '';
  private title = '';

  constructor(private http: HttpClient) { }

  loadCardsOfType(cardType = 'Neutral') {
    this.http.get<Object[]>(`${cardsURL}${cardType}${collectible}`, httpOptions)
      .subscribe(result => {
        this.cardsAll = result.filter(res => res['img'] && res['type'] !== 'Hero');
        this.filterAll();
      });

  }

  private resetDeck() {
    this.shiftCards = 0;
    this.shiftTableCards(0);
  }

  shiftTableCards(change: number) {
    const shifted = this.shiftCards + change;
    this.shiftCards = (shifted > - 1) && (shifted * numberOfCardsOnADeck <= this.cards.length - 1) ? shifted : this.shiftCards;
    const shiftBegin = this.shiftCards * numberOfCardsOnADeck;
    const shiftEnd = (this.shiftCards + 1) * numberOfCardsOnADeck;
    this.tableCards = this.cards.slice(shiftBegin, shiftEnd);
  }

  filterByRarity (rarity: string) {
    this.rarity = rarity;
    this.filterAll();
  }

  filterByRace(race: string) {
    this.race = race;
    this.filterAll();
  }

  filterByMana(manaS: string) {
    this.mana = parseInt(manaS, 10);
    this.filterAll();
  }

  filterByDescription(description: string) {
    this.description = description;
    this.filterAll();
  }

  filterByTitle(title: string) {
    this.title = title;
    this.filterAll();
  }

  private filterAll() {
    this.cards = this.cardsAll.filter(res =>
      (this.rarity === 'Any' || res['rarity'] === this.rarity ) &&
      ( this.race === '' || res['race'] && res['race'].toLowerCase().includes(this.race.toLowerCase())) &&
      ( this.description === '' || (res['text']) && res['text'].toLowerCase().includes(this.description.toLowerCase())) &&
      ( this.title === '' || (res['name']) && res['name'].toLowerCase().includes(this.title.toLowerCase())) &&
      (res['cost'] >= this.mana)
    );
    this.resetDeck();
  }
}
