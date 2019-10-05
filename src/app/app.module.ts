import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsComponent } from './news/news.component';
import { MoviesComponent } from './movies/movies.component';
import { FormsComponent } from './forms/forms.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SeemorPipe } from './seemor.pipe';
import { SearchPipe } from './search.pipe';
import { Semore2Pipe } from './semore2.pipe';
import { Search2Pipe } from './search2.pipe';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewsComponent,
    MoviesComponent,
    FormsComponent,
    NotfoundComponent,
    SeemorPipe,
    SearchPipe,
    Semore2Pipe,
    Search2Pipe,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
