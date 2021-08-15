import { EntityRepository, Repository } from 'typeorm';
import { Pokemon } from './../entities/Pokemon';

@EntityRepository(Pokemon)
export class PokemonRepository extends Repository<Pokemon>{}