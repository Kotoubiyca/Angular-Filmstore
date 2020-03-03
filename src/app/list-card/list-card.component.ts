import {Input, Component} from '@angular/core';

interface Ifilm {
    id: number;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
}

@Component({
  selector: 'list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.less']
})



export class ListCardComponent {
    @Input() film:Ifilm;

  constructor() {}

    showFullInfo() {
        console.log(this.film)
    }
}
