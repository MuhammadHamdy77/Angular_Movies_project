import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  

  constructor(public _HttpClient:HttpClient) { }


getMovies():Observable<any>
{
 return this._HttpClient.get('https://api.themoviedb.org/3/movie/popular?api_key=48a641f4f76d7c9d5c11600f517a91fa&language=en-US&page=1');
} 


getNews():Observable<any>{
return this._HttpClient.get('https://api.themoviedb.org/3/movie/popular?api_key=48a641f4f76d7c9d5c11600f517a91fa&language=en-US&page=1');
}
}
