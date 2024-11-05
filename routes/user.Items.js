import { Router } from "express";
import { loggedIn } from "../middleware/checkLoggedIn.js";
import { deleteUserItem, getUserItems, updateUserItem, userItems } from "../controllers/userItems/userItem.js";


const router = Router();

router.post('/additem',loggedIn,userItems);
router.get("/getitem",loggedIn,getUserItems);
router.post("/deleteitem",loggedIn,deleteUserItem);
router.post("/updateitem",loggedIn,updateUserItem);


export default router;