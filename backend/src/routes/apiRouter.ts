import {Router} from "express";

import {usersRouter} from "./usersRouter";
import {messagesRouter} from "./messagesRouter";

const router = Router();

router.use('/users',usersRouter)
router.use('/messages',messagesRouter)

export const apiRouter = router;