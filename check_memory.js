let arr = Array(1e8).fill('there was an idea');

arr.reverse();

const used = process.memoryUsage();

for (let key in used) {
	let value = Math.round(used[key] / 1024 / 1024 * 100) / 100;
	console.log(`${key} - ${value}MB`);
}
