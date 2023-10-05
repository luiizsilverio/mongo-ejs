import express from "express";
import usersRoutes from "./users.routes.js";

const routes = express.Router();

routes.get('/', (req, res) => res.redirect('/users'));
routes.post('/', (req, res) => usersRoutes.find);

routes.use('/users', usersRoutes);

export default routes;
