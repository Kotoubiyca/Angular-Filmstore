import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Film {
    id: number;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
}

@Injectable({providedIn: 'root'})
export class FilmListService {
    constructor(private httpClient: HttpClient) {}

    apiKey = '?api_key=14800cc9ec0087dda08a2762746a6750'


    getFilmList(type = 'popular', arg = ''): Observable<any> {
        return this.httpClient.get<Film>('https://api.themoviedb.org/3/movie/' + type + this.apiKey + arg)
    }
}
