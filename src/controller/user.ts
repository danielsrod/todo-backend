import { DefaultControllerCatchHandler } from '../utils/customHandlers';
import user from '../database/user';
import { Context } from 'hono';

const doLogin = async (c: Context) => {
    try {
        return c.json(
            new DefaultControllerCatchHandler({
                status: true,
                message: 'all good',
                data: null,
            }),
        );
    } catch (err) {
        console.error(err);
        return c.json(
            new DefaultControllerCatchHandler({
                status: false,
                message: err,
                data: null,
            }),
        );
    }
};

export default {
    doLogin,
};
