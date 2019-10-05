import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../serv.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

stars:any[]=[];
userss:any[];

  constructor(_MoviesService:MoviesService) {
  
  	_MoviesService.getNews().subscribe(data => {
	
	this.userss = data.results;
	
	for( let i = 0 ; i < this.userss.length ; i++){
		let vote = Math.round(this.userss[i].vote_average);
		for(let j = 1 ; j <= vote ; j++)
		{
		this.stars.push(j);
		}
		this.userss[i].votestar = this.stars;
		this.stars=[];
	}
	
	})
  }

  ngOnInit() {
  }

}
