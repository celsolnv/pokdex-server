import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateUserController } from './controllers/CreateUserController';
import {Router} from 'express';

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController()

router.post("/sign-up",createUserController.handle);
router.post("/sign-in",authenticateUserController.handle);

export {router}

