import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { ListCardComponent } from './list-card/list-card.component'
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import { MainComponent } from './main/main.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCardComponent,
    MainComponent,
    FilmDetailsComponent,
    NavbarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        HttpClientModule,
        MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
