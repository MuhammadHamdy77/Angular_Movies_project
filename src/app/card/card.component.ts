import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../player.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
play:any[];
  constructor(_PlayerService:PlayerService) {

    this.play = _PlayerService.player;
   }

  ngOnInit() {
  }

}
