import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

import { MatCardModule } from '@angular/material/card';
import { ListCardComponent } from './list-card/list-card.component'
import {MatButtonModule} from "@angular/material/button";
import { FilmInfoComponent } from './film-info/film-info.component';
import { TopRatedComponent } from './top-rated/top-rated.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCardComponent,
    FilmInfoComponent,
    TopRatedComponent
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
