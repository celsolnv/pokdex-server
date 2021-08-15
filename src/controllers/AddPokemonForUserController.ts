import { AddPokemonForUserService } from './../services/AddPokemonForUserService';
import { Request, Response } from 'express';

export class AddPokemonForUserController{
    async handle(request:Request,response:Response){
        const { userId } = request;
        const pokemonId   = Number(request.params.id);

        const addPokemonForUserService = new AddPokemonForUserService();

        const pokemonUser = await addPokemonForUserService.execute({userId,pokemonId});

        if(pokemonUser) return response.status(201).send(pokemonUser);

        return response.sendStatus(400);

    }
}
