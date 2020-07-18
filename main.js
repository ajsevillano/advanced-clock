function getTime() {
	let time, hours, minutes, seconds, formattedSeconds;
	time = new Date();
	hours = time.getHours();
	minutes = time.getMinutes();
	seconds = time.getSeconds();

	formattedSeconds = addLeadingZero(seconds);

	document.querySelector('.SecondsFirstDigit').innerText = formattedSeconds[0];
	document.querySelector('.SecondsSecondDigit').innerText = formattedSeconds[1];

	timer = setTimeout(() => {
		getTime();
	}, 500);
}

function addLeadingZero(param) {
	let formattedNumber = ('0' + param).slice(-2);
	return formattedNumber;
}

getTime();
