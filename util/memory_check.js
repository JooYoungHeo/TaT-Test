module.exports = () => {
	console.log("Process: %s - %s MB ", new Date(), process.memoryUsage().rss / 1048576, process.memoryUsage());
}
