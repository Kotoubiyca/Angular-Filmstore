import { Component, OnInit } from '@angular/core';
import {Film, FilmListService} from "../filmList.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  constructor(private filmListService: FilmListService) {}

  filmList: Film[]
  filmDetails: Film

  ngOnInit() {
    this.filmListService.getFilmList('upcoming').subscribe(res => this.filmList = res['results'])
  }

  getFullInfo(id) {
    this.filmListService.getFilmList(id).subscribe(res => this.filmDetails = res)
  }
}
