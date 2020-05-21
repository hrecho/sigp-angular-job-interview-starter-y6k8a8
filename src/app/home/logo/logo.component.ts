import { Component, OnInit, Input,  EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  @Input() width;
  @Output() clicksEvent = new EventEmitter<number>();

  public clicks = 0;

  constructor() { }

  ngOnInit() {
  }

  countClick() {
    this.clicks++;
    this.clicksEvent.next(this.clicks);
  }

}