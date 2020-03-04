import {Component, Input} from '@angular/core';
import {Film} from "../filmList.service";

@Component({
  selector: 'film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.less']
})
export class FilmDetailsComponent {

  @Input() film: Film

  constructor() { }
}
