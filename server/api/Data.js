const Router = require('koa-router');
const data = new Router();
const createThumb = require('../../util/create-thumb');
const showMemory = require('../../util/memory_check');

const image = 'ScarletWitch.jpg';

data.get('/', async(ctx) => {
	await createThumb(image).then(result => {
		showMemory();
		ctx.body = 'Job done';
	}).catch(err => {
		ctx.body = 'Job fail';
	});
});

module.exports = data;
