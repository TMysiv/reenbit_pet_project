import {Router} from "express";
import {usersController} from "../controllers/usersController";

const router = Router();

router.get('/',usersController.getAllUsers)

export const usersRouter = router;