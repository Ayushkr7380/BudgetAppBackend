import { Router } from "express";
import { userLogin } from "../controllers/userAuth/user.auth.js";

const router = Router();

router.get('/login',userLogin);

export default router;