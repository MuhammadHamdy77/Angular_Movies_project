import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../serv.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {


  stars:any[]=[];
  users:any[];
  constructor(_MoviesService:MoviesService) {

    _MoviesService.getMovies().subscribe(data => {
      this.users = data.results;
	  
      for( let i = 0 ; i < this.users.length ; i++){
        let vote = Math.round(this.users[i].vote_average)
        for(let j = 1 ; j <= vote ; j++){
          this.stars.push(j);
        }
        this.users[i].votestar = this.stars;
        this.stars=[];
      }
      
    console.log(this.users)
    })
    
  }

  ngOnInit() {
  }

}
