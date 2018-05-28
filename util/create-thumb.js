const path = require('path');
const Jimp = require('jimp');

const dirName = 'images';
const thumbName = 'thumbs';

module.exports = (imgFile) => {
	return new Promise((resolve, reject) => {
		let imgPath = path.join(dirName, imgFile);
		let randomNumber = Math.floor(Math.random()*90000) + 10000;

		Jimp.read(imgPath).then(image => {
			image.resize(256,256).quality(80).write(path.join(thumbName,`${randomNumber}.jpg`));
			resolve();
		}).catch(err => {
			reject(err);
		});
	});
}
