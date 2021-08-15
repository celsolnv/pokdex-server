import { GetAllPokemonsController } from './controllers/GetAllPokemonsController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateUserController } from './controllers/CreateUserController';
import {Router} from 'express';

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const getAllPokemonsController = new GetAllPokemonsController();

router.post("/sign-up",createUserController.handle);
router.post("/sign-in",authenticateUserController.handle);
router.get("/pokemons",getAllPokemonsController.handle);


export {router};

