import { Component, OnInit } from '@angular/core';
import {DeckService} from '../../service/deck.service';

@Component({
  selector: 'app-cards-deck',
  templateUrl: './cards-deck.component.html',
  styleUrls: ['./cards-deck.component.css']
})
export class CardsDeckComponent implements OnInit {
  public shownCard: Object = {'img': ''};
  constructor(public deckService: DeckService) { }

  ngOnInit() {
    this.deckService.loadFromStorage();
  }

  showCard(card: Object) {
    this.shownCard = card;
  }

  hideCard() {
    this.shownCard = {'img': ''};
  }

  returnClass(card: Object) {
    return card['playerClass'].toLowerCase();
  }

}
