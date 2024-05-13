import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";

interface Pokemon {
  id: number,
  name:string,
  type:string,
  isCool:boolean,
  isStylish: boolean,
}

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

  pokemonName: string="12depokemonName";

  pokemons: Pokemon[] = [{
    id: 1,
    name:"pikachu",
    type:'electric',
    isCool: true,
    isStylish:false,
  },{
    id: 2,
    name:"pikaf",
    type:'fly',
    isCool: true,
    isStylish:false,

  },{
    id: 3,
    name:"squitle",
    type:'water',
    isCool: true,
    isStylish:false,

  },{
    id: 4,
    name:"charmander",
    type:'fire',
    isCool: false,
    isStylish:true,

  },
  ]



  constructor() {
    this.title = "teddy";
  }

  handleClick(value:any){
    console.log(value)
  }

}
