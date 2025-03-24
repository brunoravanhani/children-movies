import { Component, OnInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatCheckboxModule} from '@angular/material/checkbox';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, MatButtonModule,  MatIconModule, MatCheckboxModule, FormsModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'children-movies';
  movies: any;
  moviesBase: any;

  filters = new FormControl('');

  search: string = "";

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData().subscribe({
      next: (response) => {
        this.moviesBase = response.data;
        this.movies = this.moviesBase.sort(this.sortByName);
      },
      error: (error) => console.error('Error fetching data:', error),
    })
  }

  searchFilter() {

    let filteredMovies = this.moviesBase.sort(this.sortByName);

    if (this.search != '') {
      filteredMovies = filteredMovies
              .filter((x: { name: string }) => x.name.toUpperCase().includes(this.search.toUpperCase()));
    }

    this.movies = filteredMovies;


  }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  sortByName(a: any, b: any) {
    if (a.name < b.name) {
      return -1; // a comes before b
  }
  if (a.name > b.name) {
      return 1; // a comes after b
  }
  return 0; // a and b are equal
  }
}

