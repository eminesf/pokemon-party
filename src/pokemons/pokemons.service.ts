import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

import { Pokemon } from './Pokemon';

const baseUrl = 'https://pokeapi.co/api/v2';

@Injectable()
export class PokemonsService {
  constructor(private httpService: HttpService) {}

  findAllPokemons(): Observable<AxiosResponse<Pokemon[]>> {
    return this.httpService.get(`${baseUrl}/pokemon?limit=151&offset=0`);
  }
}
