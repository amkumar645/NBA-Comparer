import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public getScreenWidth: any;
  public getScreenHeight: any;
  medium = false;
  
  constructor() { }

  ngOnInit() {
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


}
