import { Component, OnInit } from '@angular/core';
import { PlayerInfo, PlayerStats } from '../nbaPlayers';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-total-comparer',
  templateUrl: './total-comparer.component.html',
  styleUrls: ['./total-comparer.component.css']
})
export class TotalComparerComponent implements OnInit {
  title: string = '';
  link: string = '';
  currentYear1: number = 0;
  currentYear2: number = 1;
  player1!: PlayerInfo;
  player2!: PlayerInfo;
  player1Full!: PlayerStats;
  player2Full!: PlayerStats;
  nbaPlayerStats: PlayerStats[] = this.playerService.getAllPlayersStats();
  adjusted = false;
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.adjusted = false;
    this.title = !this.adjusted ? "NBA Season Comparer" : "Adjusted Season Comparer";
    this.link = !this.adjusted ? "Show adjusted stats" : "Show regular stats";
    this.player1 = this.playerService.getCurrentPlayer(0);
    this.player2 = this.playerService.getCurrentPlayer(1);
    this.currentYear1 = this.player1.years[0];
    this.currentYear2 = this.player2.years[0];
    this.player1Full = this.nbaPlayerStats.filter((v, i) => {
      return (v["name"].startsWith(this.player1.name)
             && v["year"] == this.currentYear1);
    })[0];
    this.player2Full = this.nbaPlayerStats.filter((v, i) => {
      return (v["name"].startsWith(this.player2.name)
             && v["year"] == this.currentYear2);
    })[0];
  }

  onYear1(direction: string) {
    var index = this.player1.years.indexOf(this.currentYear1)
    if (direction == 'left') {
      if (index == 0) {
        this.currentYear1 = this.player1.years[this.player1.years.length - 1];
      }
      else {
        this.currentYear1 = this.player1.years[index - 1];
      }
      
    }
    else {
      if (index == this.player1.years.length - 1) {
        this.currentYear1 = this.player1.years[0];
      }
      else {
        this.currentYear1 = this.player1.years[index + 1];
        console.log(this.currentYear1);
      }
    }
    this.player1Full = this.nbaPlayerStats.filter((v, i) => {
      return (v["name"].startsWith(this.player1.name)
             && v["year"] == this.currentYear1);
    })[0];
  }

  onYear2(direction: string) {
    var index = this.player2.years.indexOf(this.currentYear2)
    if (direction == 'left') {
      if (index == 0) {
        this.currentYear2 = this.player2.years[this.player2.years.length - 1];
      }
      else {
        this.currentYear2 = this.player2.years[index - 1];
      }
      
    }
    else {
      if (index == this.player2.years.length - 1) {
        this.currentYear2 = this.player2.years[0];
      }
      else {
        this.currentYear2 = this.player2.years[index + 1];
        console.log(this.currentYear2);
      }
    }
    this.player2Full = this.nbaPlayerStats.filter((v, i) => {
      return (v["name"].startsWith(this.player2.name)
             && v["year"] == this.currentYear2);
    })[0];
  }

  onAdjusted() {
    this.adjusted = !this.adjusted;
    this.title = !this.adjusted ? "NBA Season Comparer" : "Adjusted Season Comparer";
    this.link = !this.adjusted ? "Show adjusted stats" : "Show regular stats"

  }
}
