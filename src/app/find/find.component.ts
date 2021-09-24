import { Component, Input, OnInit } from '@angular/core';
import { PlayerStats } from '../nbaPlayers';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  player1 = 0;
  player2 = 1;
  isReady = false;
  comparingTime = false;
  constructor(private playerService: PlayerService) { }

  // Figure this out to disable compare button
  ngOnInit(): void {
    this.playerService.isFullEvent.subscribe(value => {
      if (value === 'true')
        this.isReady = true;
      else 
        this.isReady = false;
    });
    
  }
 

  onCompare() {
    this.comparingTime = true;
  }
}
