import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const usersController = new UsersController();
const settingsController = new SettingsController();
const messagesController = new MessagesController();

routes.post("/users", usersController.create);
routes.post("/settings", settingsController.create);

routes.get("/messages/:id", messagesController.showByUser);
routes.post("/messages", messagesController.create);

export { routes };