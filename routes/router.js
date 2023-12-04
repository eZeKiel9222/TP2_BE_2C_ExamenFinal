import { Router } from "express";
import rutaRoutes from "./rutaRoutes.js"
const router = Router();

router.use("/ruta" , rutaRoutes)


export default router