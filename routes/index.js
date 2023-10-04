import express from "express";
import UsersController from "../controllers/UsersController.js";
import usersRoutes from "./users.routes.js";

const routes = express.Router();
const controller = new UsersController();

routes.get('/', (req, res) => controller.index);
routes.post('/', (req, res) => controller.find);

routes.use('/users', usersRoutes);

export default routes;
