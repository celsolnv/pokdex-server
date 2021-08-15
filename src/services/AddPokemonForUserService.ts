import { PokemonUserRepository } from './../repositories/PokemonUserRepository';
import { getCustomRepository } from 'typeorm';

interface IAddPokemonRequest{
    userId:number;
    pokemonId:number;
}
export class AddPokemonForUserService{
    async execute({userId,pokemonId}:IAddPokemonRequest){
        const pokemonUserRepository = getCustomRepository(PokemonUserRepository);

        const relationExists = await pokemonUserRepository.find({
            where:{pokemonId,userId}
        });

        if (relationExists) throw new Error("Pokemon already capture");
    
        const pokemonUser = pokemonUserRepository.create({
            pokemonId,
            userId
        });

        console.log(pokemonUser);

        await pokemonUserRepository.save(pokemonUser);

        return pokemonUser;

    }
}