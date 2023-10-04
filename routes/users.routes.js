import express from "express";
import UsersController from "../controllers/UsersController.js";

const routes = express.Router();
const controller = new UsersController();

routes.get('/', controller.index);
routes.get('/add', controller.viewAdd);
routes.get('/edit/:id', controller.viewEdit);
routes.post('/add', controller.add);
routes.post('/edit/:id', controller.edit);
routes.get('/del/:id', controller.delete);
routes.post('/', controller.find);

export default routes;
