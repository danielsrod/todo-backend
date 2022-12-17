import { Hono } from 'hono';
import { serveStatic } from 'hono/serve-static.bun';
import { compress } from 'hono/compress';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json';

import { routes } from './routes/index';

const port = parseInt(process.env.PORT) || 3000;

const app = new Hono();

app.use('/favicon.ico', serveStatic({ path: './public/favicon.ico' }));
app.use('*', compress());
app.use('*', cors());
app.use('*', logger());
app.use('*', prettyJSON());

app.route('/', routes);

app.get('/', async c => {
    try {
        return c.json({
            status: true,
            message: `App is working fine ${new Date().toLocaleString('pt-BR')}`,
            data: [
                {
                    author: 'Daniel Rodrigues',
                    page: 'https://linktr.ee/danielsrod',
                },
            ],
        });
    } catch (err) {
        return c.text(err);
    }
});

console.info(`Running at *:${port}`);

export default {
    port,
    fetch: app.fetch,
};
