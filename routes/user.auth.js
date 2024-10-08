import { Router } from "express";
import { userLogin, userSignUp } from "../controllers/userAuth/user.auth.js";

const router = Router();

router.post('/signup',userSignUp);
router.post('/login',userLogin);

export default router;