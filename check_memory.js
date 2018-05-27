const fs = require('fs');
const path = require('path');
const Jimp = require('jimp');

console.time("jimp-memory-test");

let INTERVAL = 100;

// Test images
let fileName = './images/Thor.jpg';  //17KB size

// show memory usage periodically, period is set by const INTERVAL
function showMemoryUsage() {
	console.log("Process: %s - %s MB ", new Date(), process.memoryUsage().rss / 1048576, process.memoryUsage());
}

showMemoryUsage();

Jimp.read(fileName).then(function(image) {
	console.log(image);
}).catch(function (err) {
	console.log(err);
});

// show memory usage after processes is spawned
showMemoryUsage();

console.timeEnd("jimp-memory-test");
