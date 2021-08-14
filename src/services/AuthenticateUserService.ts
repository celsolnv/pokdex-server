import { getCustomRepository } from 'typeorm';
import { UserRepository } from './../repositories/UserRepository';
import {compare} from 'bcrypt';
import {sign} from 'jsonwebtoken'
interface IAuthenticateRequest{
    email:string;
    password:string;
}

export class AuthenticateUserService{
    async execute({email,password}:IAuthenticateRequest){

        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findOne({email});

        if(!user) throw new Error("Email not exists");

        const passwordMatch = await compare(password,user.password);

        if (!passwordMatch) throw new Error("Email/password incorrect");

        const token = sign(
            {
                email:user.email
            },
            process.env.JWT_SECRET,
            {
                subject:String(user.id),
                expiresIn:"1d"
            }
        );
        console.log("My token => ", token)
        return token;

    }
}