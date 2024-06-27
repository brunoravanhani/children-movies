import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private objUrl = 'https://ravanhani-movies.s3.amazonaws.com/movies.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.objUrl);
  }
}
