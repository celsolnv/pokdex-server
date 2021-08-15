import { PokemonUserRepository } from './../repositories/PokemonUserRepository';
import { getCustomRepository } from 'typeorm';
import { PokemonRepository } from './../repositories/PokemonRepository';

 interface IGetAllPokemonRequest{
     userId:number;
 }
export class GetAllPokemonsService{
    async execute({userId}:IGetAllPokemonRequest){
        const pokemonUserRepository = getCustomRepository(PokemonUserRepository);
        const pokemonRepository = getCustomRepository(PokemonRepository);

        const pokemonsCaptured = await pokemonUserRepository.find({
            select:['pokemonId'],
            where:{userId}
        });

        const listPokemonsIds = pokemonsCaptured.map((pokemon)=>{
            return(pokemon.pokemonId);
        });

        const allPokemons = await pokemonRepository.find();
        
        const allPokemonsFormatted = allPokemons.map((pokemon)=>{
            return({
                ...pokemon,
                inMyPokemons: listPokemonsIds.includes(pokemon.id) ? true: false
            })
        });

        return allPokemonsFormatted;
    }
}