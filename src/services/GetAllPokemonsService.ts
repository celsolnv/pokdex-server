import { getCustomRepository } from 'typeorm';
import { PokemonRepository } from './../repositories/PokemonRepository';


export class GetAllPokemonsService{
    async execute(){
        const pokemonRepository = getCustomRepository(PokemonRepository);

        const allPokemons = await pokemonRepository.find();

        return allPokemons;
    }
}