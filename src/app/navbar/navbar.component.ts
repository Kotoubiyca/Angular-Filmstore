import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  @Output() key:  EventEmitter<string> = new EventEmitter<string>()

  menuList = [
    {
      name: 'Now Playing',
      key: 'now_playing'
    },
    {
      name: 'Top Rated',
      key: 'top_rated'
    },
    {
      name: 'Popular',
      key: 'popular'
    },
    {
      name: 'Upcoming',
      key: 'upcoming'
    }
  ]

  getFilmList(item) {
    this.key.emit(item)
  }
}
