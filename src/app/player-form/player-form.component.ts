import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { AbstractControl, Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PlayerInfo, PlayerStats } from '../nbaPlayers';
import { PlayerService } from '../services/player.service';
import { startWith, map, filter, debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
  @Input() playerNumber!: any;
  nbaPlayers = this.playerService.getAllPlayersStats();
  nbaPlayerInfo= this.playerService.getAllPlayers();
  title: string = '';
  sport: string = '';
  options: string[] = ['One', 'Two', 'Three'];
  playerForm: FormGroup = new FormGroup({
    'playerName': new FormControl('', Validators.required),
  });
  filteredOptions!: Observable<PlayerInfo[]>;
  

  submitted = false;

  playerValue: any = null;

  playerExists = false;

  constructor(private route: Router, private playerService: PlayerService,
    private http: HttpClient) {
  }

  ngOnInit(): void {
    this.submitted = false;
    this.sport = this.route.url.substring(1);
    this.title = this.playerNumber === 0 ? "Find the first player" : "Find the second player";
    this.filteredOptions = this.playerForm.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: any): PlayerInfo[] {
    this.nbaPlayerInfo= this.playerService.getAllPlayers();
    if (value['playerName'] == '' || value.length == 0) {
      return [];
    }
    else {
      return this.nbaPlayerInfo.filter((v, i) => {
        return (v['lowercase'].startsWith(value['playerName'].toLowerCase()));
      }).splice(0, 5);
    }
  }

  onSubmit() {
    this.nbaPlayers = this.playerService.getAllPlayersStats();
    this.nbaPlayerInfo = this.playerService.getAllPlayers();
    this.submitted = true;
    this.playerValue = this.playerForm.value;
    var arrayIndex = this.nbaPlayerInfo.findIndex(v => v["name"].startsWith(this.playerValue.playerName));
    arrayIndex != -1 ? this.playerExists = true: this.playerExists = false;
    if (this.playerExists) {
      this.playerService.setCurrentPlayer(this.nbaPlayerInfo[arrayIndex], this.playerNumber);
      this.playerService.isFull();
    }
  }
}
