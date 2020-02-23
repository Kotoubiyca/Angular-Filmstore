import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent implements OnInit {
  title = "app";
  filmList;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("assets/movies.json").subscribe(data => this.filmList = data);
  }
}
