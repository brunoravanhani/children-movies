import { Routes } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {CartoonComponent} from './cartoon/cartoon.component';
import {LiveActionComponent} from './live-action/live-action.component';
import {SerieComponent} from './serie/serie.component';

export const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'cartoon', component: CartoonComponent },
  { path: 'serie', component: SerieComponent },
  { path: 'live-action', component: LiveActionComponent },
  { path: '**', redirectTo: '' },
];
