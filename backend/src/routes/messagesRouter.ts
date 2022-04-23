import {Router} from "express";
import {messagesController} from "../controllers/messagesController";

const router = Router();

router.post('/',messagesController.createMessage)

export const messagesRouter = router;