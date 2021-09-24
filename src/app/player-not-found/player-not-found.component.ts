import { Component, Input, OnInit } from '@angular/core';
import { PlayerStats } from '../nbaPlayers';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-player-not-found',
  templateUrl: './player-not-found.component.html',
  styleUrls: ['./player-not-found.component.css']
})
export class PlayerNotFoundComponent implements OnInit {
  @Input() playerNumber!: number;
  reloadForm = false;
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
  }

  onReloadForm() {
    this.reloadForm = true;
  }
}
