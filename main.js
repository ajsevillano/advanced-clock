function getTime() {
	let time, hours, minutes, seconds, formattedSeconds;
	time = new Date();
	hours = time.getHours();
	minutes = time.getMinutes();
	seconds = time.getSeconds();

	formattedSeconds = addLeadingZero(seconds);

	// console.log(formattedSeconds[0]);
	// console.log(formattedSeconds[1]);
}

function addLeadingZero(param) {
	let formattedNumber = ('0' + param).slice(-2);
	return formattedNumber;
}

getTime();
