import { PokemonUserRepository } from './../repositories/PokemonUserRepository';
import { getCustomRepository } from 'typeorm';

interface IRemovePokemonRequest{
    userId:number;
    pokemonId:number;
}

export class RemovePokemonForUserService{
    async execute({pokemonId,userId}:IRemovePokemonRequest){
        const pokemonUserRepository = getCustomRepository(PokemonUserRepository);

        const relationExists = await pokemonUserRepository.find({
            where:{pokemonId,userId}
        });
        if (relationExists.length === 0) throw new Error("Pokemon not captured");

        const result = await pokemonUserRepository.delete({pokemonId,userId});

        if (result.affected > 0){
            return true;
        }
        return false;


    }
}