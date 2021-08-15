import { GetAllPokemonsService } from './../services/GetAllPokemonsService';
import {Request,Response} from 'express'

export class GetAllPokemonsController{
    async handle(request:Request,response:Response){
        const { userId } = request;

        const getAllPokemonsService = new GetAllPokemonsService();

        const allPokemons = await getAllPokemonsService.execute({userId});

        if (!allPokemons) return response.status(204).send({message:"Not found pokemons! Try again after"});

        return response.send(allPokemons);
    }
} 