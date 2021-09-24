import { EventEmitter } from '@angular/core';
import { AdvancedNBAConversion, PlayerInfo, PlayerStats } from '../nbaPlayers';
import { nbaTeamsAdvanced } from '../nbaTeams';


export class PlayerService {
    currentPlayer: any[] = [];
    nbaStats: PlayerStats[] = [];
    nbaPlayers: PlayerInfo[] = [];
    nbaAdvancedConversion: AdvancedNBAConversion[] = [];
    tableStats: PlayerStats[][] = [];
    isFullEvent = new EventEmitter();

    setConversion(conversion: AdvancedNBAConversion[]) {
        this.nbaAdvancedConversion = conversion;   
    }
    getConversion() {
        return this.nbaAdvancedConversion;
        
    }

    setAllPlayers(players: PlayerInfo[]) {
        this.nbaPlayers = players;
        
    }
    getAllPlayers() {
        return this.nbaPlayers;
    }
    setAllPlayersStats(stats: PlayerStats[]) {
        this.nbaStats = stats;
    }
    
    getAllPlayersStats() {
        return this.nbaStats;
    }


    setCurrentPlayer(playerValue: any, playerNumber: number) {
        this.currentPlayer[playerNumber] = playerValue;
    }

    getCurrentPlayer(playerNumber: number) {
        return this.currentPlayer[playerNumber];
    }

    isFull() {
        if (this.currentPlayer[0] != null && this.currentPlayer[1] != null) {
            this.isFullEvent.emit("true");
        }
        else {
            this.isFullEvent.emit("false")
        }
    }

    setTableStats() {
        for (let i = 0; i < 72; i++) {
            this.tableStats[i] = [];
        } 
        for (let j = 0; j < this.nbaStats.length; j++) {
            if (this.nbaStats[j].year)
            {
                let index = this.nbaStats[j].year - 1950;
                if (j!= 0 && this.nbaStats[j-1].name ) {
                    
                    if (this.nbaStats[j].name != this.nbaStats[j-1].name) {
                        if (this.nbaStats[j].team.length > 4) {
                            var teamName: any = nbaTeamsAdvanced.filter((v, i) => {
                                return (v["teamName"] == this.nbaStats[j].team)
                            })
                            this.nbaStats[j].team = teamName[0]['abbreviation'];
                        }
                        this.tableStats[index].push(this.nbaStats[j]);
                    }
                       
                }
                
            }  
        }
        
    }
    getTableStats() {
        return this.tableStats;
    }
}