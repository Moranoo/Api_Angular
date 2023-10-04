import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListGameComponent } from './list-game/list-game.component';
import { AjouterJeuComponent } from './ajouter-jeu/ajouter-jeu.component';

@NgModule({
  declarations: [
    AppComponent,
    ListGameComponent,
    AjouterJeuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
