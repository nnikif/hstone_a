import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CardsService} from './service/cards.service';
import { BrowseCardsComponent } from './components/browse-cards/browse-cards.component';
import {HttpClientModule} from '@angular/common/http';
import { CardsDeckComponent } from './components/cards-deck/cards-deck.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowseCardsComponent,
    CardsDeckComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
