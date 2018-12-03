import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  public cardDeck: Array<Object> = [];
  constructor() { }

  public addCard(card: Object) {
    if (this.cardDeck.length >= 30) {
      return;
    }
    const cardsInTheDeck = this.cardDeck.filter(inDeckCard => inDeckCard === card);
    if (cardsInTheDeck.length >= 2) {
      return;
    }
    const otherClassInTheDeck = this.cardDeck.find(
      inDeckCard =>
        card['playerClass'] !== 'Neutral' && inDeckCard ['playerClass'] !== 'Neutral' && card['playerClass'] !== inDeckCard['playerClass']);
    if (otherClassInTheDeck) {
      return;
    }
    this.cardDeck.push(card);
    this.pushToLocalStorage();
  }

  public removeCard(index: number) {
    this.cardDeck.splice(index, 1);
    this.pushToLocalStorage();
  }

  private pushToLocalStorage () {
    const serialDeck = JSON.stringify(this.cardDeck);
    localStorage.setItem('deck', serialDeck);
  }

  public loadFromStorage() {
    this.cardDeck = JSON.parse(localStorage.getItem('deck'));
    if (!this.cardDeck) {
      this.cardDeck = [];
    }
  }

  public get deckClass () {
    const cardClass = this.cardDeck.find(
      inDeckCard =>
        inDeckCard['playerClass'] !== 'Neutral'
    );
    return cardClass ? cardClass['playerClass'] : 'Neutral';
  }
}
