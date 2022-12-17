import { DefaultControllerCatchHandler } from '../utils/customHandlers';
import user from '../database/user';
import { Context } from 'hono';
import { IDoLogin } from '../interfaces/user';

export default {
    async doLogin(c: Context) {
        try {
            const data: IDoLogin = await c.req.json();

            const result = await user.doLogin(data);
            if (result.status === false) {
                throw new Error('Something went wrong');
            }

            c.status(200);
            return c.json(new DefaultControllerCatchHandler(result));
        } catch (err) {
            console.error(err);
            c.status(500);
            return c.json(
                new DefaultControllerCatchHandler({
                    status: false,
                    message: err,
                    data: null,
                }),
            );
        }
    },
};
