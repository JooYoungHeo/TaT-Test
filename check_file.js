const fs = require('fs');
const images = 'images';
const imageFiles = fs.readdirSync(images);

imageFiles.forEach(item => {
	let imagePath = `${images}/${item}`;

	let fileStat = fs.statSync(imagePath);
	let imageSize = fileStat['size'];

	console.log(`${item} - ${imageSize}byte`);
});
