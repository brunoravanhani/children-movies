import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, MatButtonModule,  MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'children-movies';
  movies: any;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getData().subscribe((result) => {
      this.movies = result.data;
    });
  }

}

