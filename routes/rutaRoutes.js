import { Router } from "express";
import RutaController from "../controller/RutaController.js";

const rutaRoutes = Router()
const rutaController = new RutaController()

//CRUD ROLES
rutaRoutes.post("", rutaController.create)
rutaRoutes.get("", rutaController.getAll)
rutaRoutes.get("/:id", rutaController.get)
rutaRoutes.put("/:id", rutaController.update)
rutaRoutes.delete("/:id", rutaController.delete)

export default rutaRoutes