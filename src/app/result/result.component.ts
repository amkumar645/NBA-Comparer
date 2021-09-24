import { Component, Input, OnInit } from '@angular/core';
import { PlayerInfo, PlayerStats } from '../nbaPlayers';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  player!: PlayerInfo;
  @Input() playerNumber!: number;
  reloadForm = false;
  constructor(private playerService: PlayerService) {
    
   }

  ngOnInit(): void {
    this.player = this.playerService.getCurrentPlayer(this.playerNumber);
  }

  onReloadForm() {
    this.playerService.setCurrentPlayer(null, this.playerNumber);
    this.reloadForm = true;
    
  }

}
