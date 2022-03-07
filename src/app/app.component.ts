import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dataBinding';
  valorInput: number = 0
  
  constructor() {}
  Somar() {
    this.valorInput++;
  }

  Diminuir() {
    this.valorInput--;
  }

}
