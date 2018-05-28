const request = require('request');

for (let i = 0, p = Promise.resolve(); i < 1000 ; i++) {
	p = p.then(() => new Promise(resolve => {
		requestUrl().then(() => {
			console.log('%s - done', i);
			return resolve();
		}).catch(() => {
			return resolve();
		});
	}));
}

function requestUrl() {
	return new Promise((resolve, reject) => {
		request.get({url: 'http://localhost:4000/api/data'}, (err, res, body) => {
			if (err) reject();
			else resolve();
		});
	});
}
