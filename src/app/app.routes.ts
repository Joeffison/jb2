/**
 * Created by joeff on 13/06/2017.
 */
import {Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo: '/home'}
];
