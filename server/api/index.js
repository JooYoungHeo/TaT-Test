const Router = require('koa-router');

const api = new Router();
const Data = require('./Data');

api.use('/data', Data.routes());

module.exports = api;
