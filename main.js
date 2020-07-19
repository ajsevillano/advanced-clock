function getTime() {
	let time, hours, minutes, seconds, formattedSeconds;
	time = new Date();
	hours = time.getHours();
	minutes = time.getMinutes();
	seconds = time.getSeconds();

	formattedHours = addLeadingZero(hours);
	formattedMinutes = addLeadingZero(minutes);
	formattedSeconds = addLeadingZero(seconds);

	//Querys
	document.querySelector('.HoursFirstDigit').innerText = formattedHours[0];
	document.querySelector('.HoursSecondDigit').innerText = formattedHours[1];
	document.querySelector('.MinutesFirstDigit').innerText = formattedMinutes[0];
	document.querySelector('.MinutesSecondDigit').innerText = formattedMinutes[1];
	document.querySelector('.SecondsFirstDigit').innerText = formattedSeconds[0];
	document.querySelector('.SecondsSecondDigit').innerText = formattedSeconds[1];

	//Timer
	setTimeout(() => {
		getTime();
	}, 500);
}

function addLeadingZero(param) {
	let formattedNumber = ('0' + param).slice(-2);
	return formattedNumber;
}

getTime();
