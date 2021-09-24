import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerStats } from '../nbaPlayers';
import { nbaTeamsAdvanced } from '../nbaTeams';
import { PlayerService } from '../services/player.service';


@Component({
  selector: 'app-advanced-comparer',
  templateUrl: './advanced-comparer.component.html',
  styleUrls: ['./advanced-comparer.component.css']
})
export class AdvancedComparerComponent implements OnInit {
  @Input() player1: any;
  @Input() player2: any;
  advanced = false;
  baseYear = 2020;
  conversion: any[] = this.playerService.getConversion();
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

  adjust(category: string, year: number, playerNumber: number) {
    var baseAvg = this.conversion[140][category];
    var baseStd = this.conversion[141][category];
    var arrayIndex = this.conversion.findIndex(v => v["year"] == year);
    var yearAvg = this.conversion[arrayIndex][category];
    var yearStd = this.conversion[arrayIndex + 1][category];
    if (playerNumber == 1) 
    {
      return ((this.player1[category] - yearAvg)/yearStd) * baseStd + baseAvg;
    }
    else {
      return ((this.player2[category] - yearAvg)/yearStd) * baseStd + baseAvg;
    }
  }

  compare(value: string) {
    let player1AdjVal = this.adjust(value, this.player1.year, 1);
    let player2AdjVal = this.adjust(value, this.player2.year, 2);
    if (player1AdjVal > player2AdjVal) {
      return 1;
    }
    else if (player1AdjVal < player2AdjVal) {
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