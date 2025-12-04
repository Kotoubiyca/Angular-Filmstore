import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'

import { MatCardModule } from '@angular/material/card';
import { ListCardComponent } from './list-card/list-card.component'
import { MatButtonModule } from '@angular/material/button';
import { MainComponent } from './main/main.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({ declarations: [
        AppComponent,
        ListCardComponent,
        MainComponent,
        FilmDetailsComponent,
        NavbarComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
