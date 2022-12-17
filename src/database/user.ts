import connection from './connection';
import { DefaultReturnHandler } from '../utils/customHandlers';
import { IDoLogin } from '../interfaces/user';
import * as userQuerys from './querys/user';

export default {
    async doLogin(data: IDoLogin) {
        try {
            const query: string = userQuerys.doLogin;
            const params: any[] = [data.username, data.password];
            const { rows } = await connection.query(query, params);
            return new DefaultReturnHandler({
                status: true,
                message: 'User Found!',
                data: rows,
            });
        } catch (err) {
            console.error(err);
            return new DefaultReturnHandler({
                status: false,
                message: JSON.stringify(err),
                data: null,
            });
        }
    },
};
