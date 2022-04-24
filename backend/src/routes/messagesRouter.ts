import {Router} from "express";

import {messagesController} from "../controllers/messagesController";

const router = Router();

router.get('/',messagesController.getAllMessages);
router.post('/',messagesController.createMessage);

export const messagesRouter = router;