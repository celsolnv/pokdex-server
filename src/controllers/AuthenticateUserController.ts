import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

export class AuthenticateUserController{
    async handle(request:Request,response:Response){

        const {email , password} = request.body;

        if (!email || !password) return response.status(400).send({message:"Email or password empty"})

        const authenticateUserService = new AuthenticateUserService();

        const token = await authenticateUserService.execute({email,password});

        if (token) return response.send({token});

        return response.status(400).send({message:"Not possible auth user!"})

    }
}