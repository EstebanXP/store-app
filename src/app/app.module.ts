import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SliderComponent } from './components/slider/slider.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { Error404Component } from './views/error404/error404.component';
import { HomeComponent } from './views/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StoreComponent } from './views/store/store.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    SidebarComponent,
    SliderComponent,
    LandingPageComponent,
    Error404Component,
    HomeComponent,
    NavbarComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
