import { Router } from "express";
import { userItem } from "../controllers/userItems/user.Item.js";

const router = Router();

router.post('/additem',userItem);

export default router;