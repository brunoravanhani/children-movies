import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {Location} from '@angular/common';

@Component({
  selector: 'app-back-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  template: '<button mat-fab extended class="back-button" (click)="onClick()"><mat-icon>arrow_back</mat-icon>Voltar</button>'
})
export class BackButtonComponent {

  constructor(private _location: Location) {}

  onClick() {
    this._location.back();
  }
}
