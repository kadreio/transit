import * as Koa from 'koa';
import * as Router from 'koa-router';
import { getSchedule, getStop } from './dao/mta';
import { sendMessage } from './utils/notifications';
import { Stop } from './models/stop';
import sequelize from './sequelize';
import { setStops } from './services/sync';

const app = new Koa();
const router = new Router();
console.log('start server');

router.get('/mta/schedules/:stopId', async (ctx) => {
  console.log('here');
  ctx.body = await getSchedule(ctx.params.stopId);
});

router.get('/mta/stops/:stopId', async (ctx) => {
  ctx.body = await getStop(ctx.params.stopId)
});

router.get('/mta/stops', async (ctx) => {
  ctx.body = await getStop();
});

router.get('/sync-stops', async (ctx) => {
  setStops();
  ctx.body = 'Test';
});

router.get('/*', async (ctx) => {
  ctx.body = "hello world";
});


app.use(router.routes());

app.listen(3000);
