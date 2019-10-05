import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { FormsComponent } from './forms/forms.component';
import { NewsComponent } from './news/news.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {CardComponent} from './card/card.component'

const routes: Routes = [

{path:'movies', component:MoviesComponent},
{path:'', redirectTo:'movies', pathMatch:'full'},
{path:'card',component:CardComponent},
{path:'news',  component:NewsComponent},
{path:'forms', component:FormsComponent},
{path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
