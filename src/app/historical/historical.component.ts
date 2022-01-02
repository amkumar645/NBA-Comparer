import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PlayerStats } from '../nbaPlayers';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent implements OnInit, AfterViewInit {
  yearStats: PlayerStats[][] = [];
  years: number[] = [];
  currentYear = 2021;
  nbaPlayers!: any;
  dataSource!: any;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public getScreenWidth: any;
  public getScreenHeight: any;
  medium = false;

  displayedColumns: string[] = ['name', 'team', 'year', 'gp', 'ppg', 'apg', 'rpg', 'orbg', 'drbg', 'spg', 'bpg', 'tpg', 'fpg', 
  'per', 'ows', 'dws', 'ws', 'obpm', 'dbpm', 'bpm', 'vorp', 'usg'];

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.nbaPlayers = this.playerService.getAllPlayersStats();
    this.yearStats = this.playerService.getTableStats();
    for (let i = 0; i < 72; i++) {
      this.years.push(1950 + i);
    }
    this.dataSource = new MatTableDataSource(this.yearStats[71]);
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    if (this.getScreenWidth <= 1200 || this.getScreenHeight <= 600)
      this.medium = true;
    else
      this.medium = false;

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

  chooseDataSource(year: number) {
    console.log("Reached");
    this.dataSource = new MatTableDataSource(this.yearStats[year]);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    return this.dataSource;
  }
  


}
