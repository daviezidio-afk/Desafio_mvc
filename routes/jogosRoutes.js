//routes /jogosRoutes.js

import { Router } from "express";
import { getJogos, getJogosPorId, getJogosPorFabricante, getJogosPorAno } from "../controllers/jogosController.js";

const router = Router();

router.get("/", getJogos);
router.get("/:id", getJogosPorId);
router.get("/fabricante/:fabricante", getJogosPorFabricante);
router.get("/ano/:ano", getJogosPorAno);

export default router;