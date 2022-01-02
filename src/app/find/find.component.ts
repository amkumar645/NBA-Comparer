import { Component, HostListener, Input, OnInit } from '@angular/core';
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
  public getScreenWidth: any;
  public getScreenHeight: any;
  medium = false;

  constructor(private playerService: PlayerService) { }

  // Figure this out to disable compare button
  ngOnInit(): void {
    this.playerService.isFullEvent.subscribe(value => {
      if (value === 'true')
        this.isReady = true;
      else 
        this.isReady = false;
    });
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    if (this.getScreenWidth <= 1200 || this.getScreenHeight <= 600)
      this.medium = true;
    else
      this.medium = false;
  }
 
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    if (this.getScreenWidth <= 1200 || this.getScreenHeight <= 600)
      this.medium = true;
    else
      this.medium = false;
  }

  onCompare() {
    this.comparingTime = true;
  }
}
