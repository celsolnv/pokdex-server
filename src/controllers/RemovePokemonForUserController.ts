import { RemovePokemonForUserService } from './../services/RemovePokemonForUserService';
import { Request, Response } from "express";


export class RemovePokemonForUserController{
    async handle(request:Request,response:Response){
        const { userId } = request;
        const pokemonId   = Number(request.params.id);

        const removePokemonForUserService = new RemovePokemonForUserService()

        const result = await removePokemonForUserService.execute({userId,pokemonId})

        if (result) return response.send({message:"Pokemon release"});

        return response.status(400).send("Not possible release pokemon");
    }
}