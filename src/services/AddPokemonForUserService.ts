import { PokemonRepository } from './../repositories/PokemonRepository';
import { PokemonUserRepository } from './../repositories/PokemonUserRepository';
import { getCustomRepository } from 'typeorm';

interface IAddPokemonRequest{
    userId:number;
    pokemonId:number;
}
export class AddPokemonForUserService{
    async execute({userId,pokemonId}:IAddPokemonRequest){
        const pokemonUserRepository = getCustomRepository(PokemonUserRepository);
        const pokemonRepository = getCustomRepository(PokemonRepository);

        const relationExists = await pokemonUserRepository.find({
            where:{pokemonId,userId}
        });
        if (relationExists.length > 0) throw new Error("Pokemon already capture");

        const pokemonExits = await pokemonRepository.findOne({id:pokemonId})

        if(!pokemonExits) throw new Error("Pokemon does not exists");
    
        const pokemonUser = pokemonUserRepository.create({
            pokemonId,
            userId
        });

        await pokemonUserRepository.save(pokemonUser);

        return pokemonUser;

    }
}