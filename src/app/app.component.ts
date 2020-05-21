import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public activeItem = 'home';

  setActiveItem(activeItem) {
    this.activeItem = activeItem;
  }

}
