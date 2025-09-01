import { Component, Input } from '@angular/core';
import  {MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Movie } from '../Models/Movie';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class CardListComponent {
  @Input() movies: Movie[] = [];
}
