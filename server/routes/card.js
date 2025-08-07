import { Router } from "express";
import { addCardData, getCardData, updateCardData } from "../controller/cardControllers.js";
export const cardRoutes=Router();

cardRoutes.get("/all/card",getCardData);
cardRoutes.put("/update/card/:id",updateCardData);
cardRoutes.post("/add/card",addCardData);
// cardRoutes.get("/all/card",getCardData);
