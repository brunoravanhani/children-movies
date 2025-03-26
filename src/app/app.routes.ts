import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {CartoonComponent} from './cartoon/cartoon.component';
import {LiveActionComponent} from './live-action/live-action.component';
import {SerieComponent} from './serie/serie.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'cartoon', component: CartoonComponent },
  { path: 'serie', component: SerieComponent },
  { path: 'live-action', component: LiveActionComponent },
  { path: '**', redirectTo: '' },
];
