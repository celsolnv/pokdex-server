import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController{
    async handle(request:Request, response:Response){

        const { email,password,confirmPassword } = request.body;

        if (!email) return response.status(400).send({message:"Invalid email"});
        
        if (!password || !confirmPassword) return response.status(400).send({message:"Invalid password"});

        
        const createUserService = new CreateUserService();

        const user = await createUserService.execute({email,password,confirmPassword});

        if(user){
            return response.status(201).send(user);
        }

        return response.status(400).send({message:"Not possible save user"});

    }
}