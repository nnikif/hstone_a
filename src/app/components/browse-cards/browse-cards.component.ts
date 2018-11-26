import { Component, OnInit } from '@angular/core';
import {CardsService} from '../../service/cards.service';
import {cardTypes, classes, mana} from '../../constants/constants';

@Component({
  selector: 'app-browse-cards',
  templateUrl: './browse-cards.component.html',
  styleUrls: ['./browse-cards.component.css']
})
export class BrowseCardsComponent implements OnInit {
  classes: Array<string>;
  cardtypes: Array<string>;
  mana: Array<number>;

  constructor(public cardService: CardsService) {
    this.classes = classes;
    this.cardtypes = cardTypes;
    this.mana = mana;
  }

  ngOnInit() {
    this.cardService.loadCardsOfType();
  }

}
