import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})

export class AppComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  title = "app";
  apiKey = '?api_key=14800cc9ec0087dda08a2762746a6750'
  filmList;



  async getAsyncData(type = 'top_rated', args = '&language=en-US&page=1') {
    await this.httpClient.get('https://api.themoviedb.org/3/movie/' + type + this.apiKey + args)
        .toPromise()
        .then(data=> {
          return this.filmList = data['results']
        });
  }

  ngOnInit() {
    this.getAsyncData('upcoming').then();
  }
}
