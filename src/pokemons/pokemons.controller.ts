import { Controller, Get } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';

@Controller('pokemons')
export class PokemonsController {
  constructor(private pokemonsService: PokemonsService) {}

  @Get('allPokemons')
  findAllPokemons() {
    return this.pokemonsService.findAllPokemons();
  }
}
