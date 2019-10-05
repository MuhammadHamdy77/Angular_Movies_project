import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(_HttpClient:HttpClient) { }

  player:any=[
  {name:'Ronaldo',Age:'34',Club:'Juve',link:'www.google.com',img:'../../assets/1.jpg'},
  {name:'Ronaldo',Age:'34',Club:'Juve',link:'www.google.com',img:'../../assets/2.jpg'},
  {name:'Ronaldo',Age:'34',Club:'Juve',link:'www.google.com',img:'../../assets/3.jpg'},
  {name:'Ronaldo',Age:'34',Club:'Juve',link:'www.google.com',img:'../../assets/4.jpg'},
  {name:'Ronaldo',Age:'34',Club:'Juve',link:'www.google.com',img:'../../assets/2.jpg'},
  {name:'Ronaldo',Age:'34',Club:'Juve',link:'www.google.com',img:'../../assets/3.jpg'},
  {name:'Ronaldo',Age:'34',Club:'Juve',link:'www.google.com',img:'../../assets/1.jpg'}
]
}
