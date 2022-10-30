import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemon";
import { Pokemon } from "./pokemon";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit() {
    console.table(this.pokemonList);
    this.selectPokemons(this.pokemonList[0]);
  }
  selectPokemons(pokemon: Pokemon) {
    console.log(`Vous avez selectionné ${pokemon.name}`);
  }
}
