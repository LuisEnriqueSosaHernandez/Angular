import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';

import { HttpClientModule } from "@angular/common/http";

import { DomseguroPipe } from './pipes/domseguro.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DomseguroPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
