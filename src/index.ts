import { Hono } from 'hono';
import { serveStatic } from 'hono/serve-static.bun';
import { compress } from 'hono/compress';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json';

import { userRouter } from './routes/user';

const port = parseInt(process.env.PORT) || 3000;

const app = new Hono();

app.use('/favicon.ico', serveStatic({ path: './public/favicon.ico' }));
app.use('*', compress());
app.use('*', cors());
app.use('*', logger());
app.use('*', prettyJSON());

app.route('/', userRouter);

// app.get('/', c => {
//     const currentDate = new Date().toLocaleString('pt-BR');
//     return c.json({
//         status: true,
//         message: `App is working fine ${currentDate}`,
//         data: [
//             {
//                 author: 'Daniel Rodrigues',
//                 page: 'https://linktr.ee/danielsrod',
//             },
//         ],
//     });
// });

console.info(`Running at *:${port}`);

export default {
    port,
    fetch: app.fetch,
};
