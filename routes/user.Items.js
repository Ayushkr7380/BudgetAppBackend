import { Router } from "express";
import { userItem } from "../controllers/userItems/user.Item.js";
import { loggedIn } from "../middleware/checkLoggedIn.js";

const router = Router();

router.post('/additem',loggedIn,userItem);

export default router;