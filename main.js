//Clock
function getTime() {
	let time,
		hours,
		minutes,
		seconds,
		HoursFirstDigit,
		HoursSecondDigit,
		MinutesFirstDigit,
		MinutesSecondDigit,
		SecondsFirstDigit,
		SecondsSecondDigit;

	time = new Date();
	hours = time.getHours();
	minutes = time.getMinutes();
	seconds = time.getSeconds();

	[HoursFirstDigit, HoursSecondDigit] = addLeadingZero(hours);
	[MinutesFirstDigit, MinutesSecondDigit] = addLeadingZero(minutes);
	[SecondsFirstDigit, SecondsSecondDigit] = addLeadingZero(seconds);

	//Querys
	document.querySelector('.HoursFirstDigit').innerText = HoursFirstDigit;
	document.querySelector('.HoursSecondDigit').innerText = HoursSecondDigit;
	document.querySelector('.MinutesFirstDigit').innerText = MinutesFirstDigit;
	document.querySelector('.MinutesSecondDigit').innerText = MinutesSecondDigit;
	document.querySelector('.SecondsFirstDigit').innerText = SecondsFirstDigit;
	document.querySelector('.SecondsSecondDigit').innerText = SecondsSecondDigit;

	//Timer
	setTimeout(() => {
		getTime();
	}, 500);
}

function addLeadingZero(param) {
	let formattedNumber = ('0' + param).slice(-2);
	return formattedNumber;
}

//Theme Switcher
toggleButton.addEventListener('click', () => {
	const body = document.body;
	const toggleButton = document.getElementById('toggleButton');

	if (toggleButton.checked == true) {
		body.classList.replace('light', 'dark');
	} else {
		body.classList.replace('dark', 'light');
	}
});

getTime();
