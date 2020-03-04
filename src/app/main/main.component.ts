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
  pageTitle: any;

  ngOnInit() {
    this.filmListService.getFilmList('upcoming').subscribe(res => this.filmList = res['results'])
    this.pageTitle = 'Upcoming'
  }

  getFullInfo(id) {
    this.filmListService.getFilmList(id).subscribe(res => {
      this.filmDetails = res
      console.log(this.filmDetails)
    })
  }

  goBack() {
    this.filmDetails = null
  }

  goToPage({name, key}) {
    this.pageTitle = name
    this.filmListService.getFilmList(key).subscribe(res => this.filmList = res['results'])
  }
}
