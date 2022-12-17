import { Pool, Connection } from 'pg';
import { config } from 'dotenv';
config();

interface ICredentials {
    host: string;
    database: string;
    user: string;
    password: string;
    port: number;
}

const credentials: ICredentials = {
    host: String(process.env.PG_HOST),
    database: String(process.env.PG_DTBS),
    user: String(process.env.PG_USER),
    password: String(process.env.PG_PASS),
    port: Number(process.env.PG_PORT),
};

const client = new Pool(credentials);
// const client = new Connection(credentials);

const teste = async () => {
    const sql = 'select * from users';
    const params = [];
    const result = await client.query(sql, params);
    console.log(result);
};
teste();
// console.log('client >>> ', client);
console.info('Connected to Postgres Database');

export default client;
