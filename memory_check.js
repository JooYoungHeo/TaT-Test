const fs = require('fs');
const path = require('path');
const Jimp = require('jimp');

console.time("jimp-memory-test");

const dirName = 'images';
const fileList = fs.readdirSync(dirName);
const thumbName = 'thumbs';

for (let i = 0, p = Promise.resolve() ; i < fileList.length ; i++) {
	
	p = p.then(() => new Promise(resolve => {
		let imageFile = fileList[i];
		let imagePath = path.join(dirName, imageFile);
		let fileStat = fs.statSync(imagePath);
		let fileSize = fileStat['size'] / 1024;

		readJimp(imagePath, imageFile).then(result => {
			console.log("file: %s - %s KB", imageFile, fileSize);
			showMemoryUsage();
			return resolve();
		}).catch(err => { 
			console.log(err);
			return resolve(); 
		});
	}));
}

function showMemoryUsage() {
	console.log("Process: %s - %s MB ", new Date(), process.memoryUsage().rss / 1048576, process.memoryUsage());
}

function readJimp(imgPath, imgFile) {
	return new Promise((resolve, reject) => {
		Jimp.read(imgPath).then(image => {
			image.resize(256,
				256).quality(80).greyscale().write(path.join(thumbName, imgFile));
			resolve();
		}).catch(err => {
			reject(err);
		});
	});
}

console.timeEnd("jimp-memory-test");
