import { Router } from "express";
import { loggedIn } from "../middleware/checkLoggedIn.js";
import { getUserItems, userItems } from "../controllers/userItems/userItem.js";


const router = Router();

router.post('/additem',loggedIn,userItems);
router.get("/getitem",loggedIn,getUserItems);


export default router;