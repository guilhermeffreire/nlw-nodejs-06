import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

import { ensureAdmin } from "./middlewares/ensureAdmin";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticate } from "./middlewares/ensureAuthenticate";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListTagsContoller } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listTagsController = new ListTagsContoller();
const listUsersService = new ListUsersController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAuthenticate, ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticate, createComplimentController.handle);

router.get("/users/compliments/send", ensureAuthenticate, listUserReceiveComplimentsController.handle);
router.get("/users/compliments/receive", ensureAuthenticate, listUserSendComplimentsController.handle);
router.get("/tags", ensureAuthenticate, listTagsController.handle);
router.get("/users", ensureAuthenticate, listUsersService.handle);

export { router }