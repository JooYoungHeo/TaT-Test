const Router = require('koa-router');

const data = new Router();

data.get('/', ctx => {
	ctx.body = {manager: 'yarn', framework: 'koa'};
});

module.exports = data;
