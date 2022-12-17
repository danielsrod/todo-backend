import { Hono } from 'hono';
import userController from '../controller/user';
import { validators } from '../validator/user';

export const userRouter = new Hono();

userRouter.post('/user/doLogin/', userController.doLogin);
