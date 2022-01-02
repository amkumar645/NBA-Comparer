import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email_info: string = '';
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

  scroll(el: HTMLElement) {
    el.scrollIntoView();
}

}
