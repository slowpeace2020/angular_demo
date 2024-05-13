import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";

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
  favoriteAnimal: string="panda"


  constructor() {
    this.title = "teddy";
  }

}
