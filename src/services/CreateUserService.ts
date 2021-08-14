import { UserRepository } from './../repositories/UserRepository';
import {validate as validateEmail} from 'email-validator'
import { getCustomRepository } from 'typeorm';
import {hash} from 'bcrypt';

interface ICreateUserRequest{
    email:string;
    password:string;
    confirmPassword:string;
}

export class CreateUserService{

    async execute({email,password,confirmPassword}:ICreateUserRequest){
        const userRepository = getCustomRepository(UserRepository);

        if(password !== confirmPassword) throw new Error("Password diference");
        
        if(!validateEmail(email)) throw new Error("Invalid format email");

        const emailExists = await userRepository.checkUserExistsByEmail(email);
        if (emailExists) throw new Error("Email already exists");

        const passwordHash = await hash(password,8)

        const user = userRepository.create({
            email,
            password:passwordHash
        })

        await userRepository.save(user);

        return user;

    }
}