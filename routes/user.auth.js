import { Router } from "express";
import { userLogin, userLogout, userSignUp } from "../controllers/userAuth/user.auth.js";
import { showUserDetails } from "../controllers/userAuth/user.auth.js";
import { loggedIn } from "../middleware/checkLoggedIn.js";

const router = Router();

router.post('/signup',userSignUp);
router.post('/login',userLogin);
router.get('/',loggedIn,showUserDetails);
router.post("/logout",loggedIn,userLogout);
export default router;