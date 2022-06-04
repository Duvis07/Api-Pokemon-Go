import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  name: string;

  constructor(private PokemonService: PokemonService) {
    this.name = 'Pokemon';
  }

  ngOnInit(): void {}
  search() {
    this.PokemonService.getPokemon(this.name).subscribe((data) =>
      console.log(data)
    );
  }
}
