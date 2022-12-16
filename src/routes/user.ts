import { Hono } from 'hono';
import userController from '../controller/user';

export const userRouter = new Hono();

userRouter.get('/user/doLogin', userController.doLogin);
