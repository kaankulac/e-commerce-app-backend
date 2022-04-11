import express, {Router} from 'express';
import * as userController from "../controllers/userController";

var router = Router();


router.get('/api/user',userController.getUser);
router.post('/api/user/login',userController.userLogin);
router.post('/api/user/register',userController.userRegister);
// router.get('/api/user/logout') // ?

export default router;

