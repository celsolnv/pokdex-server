import { RemovePokemonForUserController } from './controllers/RemovePokemonForUserController';
import { AddPokemonForUserController } from './controllers/AddPokemonForUserController';
import { GetAllPokemonsController } from './controllers/GetAllPokemonsController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateUserController } from './controllers/CreateUserController';
import {Router} from 'express';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const getAllPokemonsController = new GetAllPokemonsController();
const addPokemonForUserController = new AddPokemonForUserController();
const removePokemonForUserController = new RemovePokemonForUserController();

router.post("/sign-up",createUserController.handle);
router.post("/sign-in",authenticateUserController.handle);
router.get("/pokemons",ensureAuthenticated,getAllPokemonsController.handle);
router.post("/my-pokemons/:id/add",ensureAuthenticated,addPokemonForUserController.handle);
router.post("/my-pokemons/:id/remove",ensureAuthenticated,removePokemonForUserController.handle);

export {router};

