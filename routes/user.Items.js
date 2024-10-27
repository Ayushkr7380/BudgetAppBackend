import { Router } from "express";
import { loggedIn } from "../middleware/checkLoggedIn.js";
import { userItems } from "../controllers/userItems/userItem.js";


const router = Router();

router.post('/additem',loggedIn,userItems);



export default router;