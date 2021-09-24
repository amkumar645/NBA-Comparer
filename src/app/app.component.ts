import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AdvancedNBAConversion, PlayerInfo, PlayerStats } from './nbaPlayers';
import { PlayerService } from './services/player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public playerStatsArray: PlayerStats[] = [];
  public playerInfoArray: PlayerInfo[] = [];
  public advancedConversions: AdvancedNBAConversion[] = [];
  constructor(private http: HttpClient, private playerService: PlayerService){
    this.http.get('/assets/NBA19502021.csv', {responseType: 'text'})
    .subscribe(
        data => {
            let csvToRowArray = data.split("\n");
            for (let index = 1; index < csvToRowArray.length - 1; index++) {
              let row = csvToRowArray[index].split(",");
              this.playerStatsArray.push(new PlayerStats( 
                row[1],
                parseInt(row[2]),
                row[3],
                parseInt(row[4]),
                parseFloat(parseFloat(row[5]).toFixed(1)),
                parseFloat(parseFloat(row[6]).toFixed(1)),
                parseFloat(parseFloat(row[7]).toFixed(1)),
                parseFloat(parseFloat(row[8]).toFixed(1)),
                parseFloat(parseFloat(row[9]).toFixed(1)),
                parseFloat(parseFloat(row[10]).toFixed(1)),
                parseFloat(parseFloat(row[11]).toFixed(1)),
                parseFloat(parseFloat(row[12]).toFixed(1)),
                parseFloat(parseFloat(row[13]).toFixed(1)),
                parseFloat(parseFloat(row[14]).toFixed(1)),
                parseFloat(parseFloat(row[15]).toFixed(1)),
                parseFloat(parseFloat(row[16]).toFixed(1)),
                parseFloat(parseFloat(row[17]).toFixed(1)),
                parseFloat(parseFloat(row[18]).toFixed(1)),
                parseFloat(parseFloat(row[19]).toFixed(1)),
                parseFloat(parseFloat(row[20]).toFixed(1)),
                parseFloat(parseFloat(row[21]).toFixed(1)),
                parseFloat(parseFloat(row[22]).toFixed(1)),
                row[23],
                parseInt(row[24])
              ));
              var arrayIndex = this.playerInfoArray.findIndex(v => v["name"] == row[1]);
              if (arrayIndex == -1) {
                this.playerInfoArray.push(new PlayerInfo(row[1], parseInt(row[2]), row[1].toLowerCase()));
              }
              else {
                if (this.playerInfoArray[arrayIndex].years.indexOf(parseInt(row[2])) == -1)
                  this.playerInfoArray[arrayIndex].years.push(parseInt(row[2]));
              }
            }
            this.playerService.setAllPlayersStats(this.playerStatsArray);
            this.playerService.setAllPlayers(this.playerInfoArray);
            this.playerService.setTableStats();
        },
        error => {
            console.log(error);
        }
    );
    
    this.http.get('/assets/AdvancedNBAConversion.csv', {responseType: 'text'})
    .subscribe(
        data => {
            let csvToRowArray = data.split("\n");
            let counter = 19501;
            for (let index = 1; index < csvToRowArray.length; index++) {
              let row = csvToRowArray[index].split(",");
              if (index % 2 == 1) {
                this.advancedConversions.push(new AdvancedNBAConversion( 
                  parseInt(row[22]),
                  parseFloat(parseFloat(row[14]).toFixed(1)),
                  parseFloat(parseFloat(row[2]).toFixed(1)),
                  parseFloat(parseFloat(row[15]).toFixed(1)),
                  parseFloat(parseFloat(row[11]).toFixed(1)),
                  parseFloat(parseFloat(row[6]).toFixed(1)),
                  parseFloat(parseFloat(row[16]).toFixed(1)),
                  parseFloat(parseFloat(row[3]).toFixed(1)),
                  parseFloat(parseFloat(row[17]).toFixed(1)),
                  parseFloat(parseFloat(row[8]).toFixed(1)),
                  parseFloat(parseFloat(row[13]).toFixed(1)),
                  parseFloat(parseFloat(row[12]).toFixed(1)),
                  parseFloat(parseFloat(row[7]).toFixed(1)),
                  parseFloat(parseFloat(row[21]).toFixed(1)),
                  parseFloat(parseFloat(row[10]).toFixed(1)),
                  parseFloat(parseFloat(row[5]).toFixed(1)),
                  parseFloat(parseFloat(row[4]).toFixed(1)),
                  parseFloat(parseFloat(row[20]).toFixed(1)),
                  parseFloat(parseFloat(row[18]).toFixed(1))
                ));
              }
              else {
                this.advancedConversions.push(new AdvancedNBAConversion( 
                  counter,
                  parseFloat(parseFloat(row[14]).toFixed(1)),
                  parseFloat(parseFloat(row[2]).toFixed(1)),
                  parseFloat(parseFloat(row[15]).toFixed(1)),
                  parseFloat(parseFloat(row[11]).toFixed(1)),
                  parseFloat(parseFloat(row[6]).toFixed(1)),
                  parseFloat(parseFloat(row[16]).toFixed(1)),
                  parseFloat(parseFloat(row[3]).toFixed(1)),
                  parseFloat(parseFloat(row[17]).toFixed(1)),
                  parseFloat(parseFloat(row[8]).toFixed(1)),
                  parseFloat(parseFloat(row[13]).toFixed(1)),
                  parseFloat(parseFloat(row[12]).toFixed(1)),
                  parseFloat(parseFloat(row[7]).toFixed(1)),
                  parseFloat(parseFloat(row[21]).toFixed(1)),
                  parseFloat(parseFloat(row[10]).toFixed(1)),
                  parseFloat(parseFloat(row[5]).toFixed(1)),
                  parseFloat(parseFloat(row[4]).toFixed(1)),
                  parseFloat(parseFloat(row[20]).toFixed(1)),
                  parseFloat(parseFloat(row[18]).toFixed(1))
                ));
                counter += 10;
              }
            }
            this.playerService.setConversion(this.advancedConversions);
        },
        error => {
            console.log(error);
        }
    );
  }
}
