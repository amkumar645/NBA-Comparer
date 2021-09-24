import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerStats } from '../nbaPlayers';
import { nbaTeamsAdvanced } from '../nbaTeams';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-comparer',
  templateUrl: './comparer.component.html',
  styleUrls: ['./comparer.component.css']
})
export class ComparerComponent implements OnInit {
  @Input() player1: any;
  @Input() player2: any;
  advanced = false;
  constructor(private playerService: PlayerService,
    private router: Router) { }

  ngOnInit(): void {
  }

  checkTeamName(team: string) {
    if (team.length > 4) {
      var teamName: any = nbaTeamsAdvanced.filter((v, i) => {
          return (v["teamName"] == team)
      })
      team = teamName[0]['abbreviation'];
    }
    return team;

  }
  onAdvanced() {
    this.advanced = !this.advanced;
  }

  compare(value: string) {
    if (this.player1[value] > this.player2[value]) {
      return 1;
    }
    else if (this.player2[value] > this.player1[value]) {
      return 2;
    }
    else {
      return 3;
    }
  }

  onRefresh() {
    window.location.reload();
  }
}
