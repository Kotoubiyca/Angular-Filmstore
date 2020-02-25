import { Input, Component } from '@angular/core';

@Component({
  selector: 'list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.less']
})

export class ListCardComponent {

    @Input() title:string;
    @Input() date:string;
    @Input() poster:string;
    @Input() overview:string;

  constructor() {}
}
