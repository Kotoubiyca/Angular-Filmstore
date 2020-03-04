import {Input, Component, Output, EventEmitter} from '@angular/core';
import {Film,FilmListService} from "../filmList.service";

@Component({
  selector: 'list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.less']
})

export class ListCardComponent {
    constructor(private filmListService: FilmListService) {}

    @Input() film: Film[]
    @Output() onDetails: EventEmitter<number> = new EventEmitter<number>()

    showFullInfo() {
        this.filmListService.getFilmList(this.film['id']).subscribe(res => this.onDetails.emit(res['id']))
    }
}

