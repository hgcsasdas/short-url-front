import { Routes } from '@angular/router';
import { RedirectComponentComponent } from './components/redirect-component/redirect-component.component';
import { MainPageComponent } from './components/main-page/main-page.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: ':linkAcortado', component: RedirectComponentComponent }
];
