import { Router } from "express";
import VotoController from "../controller/VotoController.js";

const votoRoutes = Router()
const votoController = new VotoController()

//CRUD VOTOS
votoRoutes.post("", votoController.create)
votoRoutes.get("/general", votoController.getAll)



export default votoRoutes