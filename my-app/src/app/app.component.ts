import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string="mather's day";
  imgSrc: string="https://y20india.in/wp-content/uploads/2024/05/1351266-o.webp"
  numberOne: number = 1;
  numberTwo: number = 2;
  togglePokemon: boolean = false;

  constructor() {
    this.title = "teddy";
  }

}
