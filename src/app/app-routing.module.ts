import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { HomeComponent } from './views/home/home.component';
import { StoreComponent } from './views/store/store.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Store', component: StoreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
