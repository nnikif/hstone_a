import {HttpHeaders} from '@angular/common/http';

export const cardsURL = 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/';
export const collectible = '?collectible=1';
export const httpOptions = {
  headers: new HttpHeaders({
    'X-Mashape-Key': 'Ydtx08KSgqmshZYxyUlxzPfGEOaLp1O7tmUjsnmH6D7WwGjQEV'
  })
};

export const numberOfCardsOnADeck = 8;

export const classes = [
  'Druid', 'Hunter', 'Mage', 'Neutral', 'Paladin', 'Priest', 'Rogue', 'Shaman', 'Warlock', 'Warrior'
];

export const cardTypes = ['Any', 'Free', 'Common', 'Rare', 'Epic', 'Legendary'];

export const mana = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
