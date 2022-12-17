import { validator } from 'hono/validator';

export const validators = {
    VDoLogin: validator(v => ({
        username: v.body('username').isRequired(),
        password: v.body('password').isRequired(),
    })),
};
