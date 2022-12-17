import { Hono } from 'hono';
import { userRouter } from './user';

export const routes = new Hono();

routes.route('/', userRouter);
