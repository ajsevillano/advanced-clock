//Global variables
const toggleButton = document.getElementById('toggleButton');

function getTime() {
	let time = new Date();
	hours = time.getHours();
	minutes = time.getMinutes();
	seconds = time.getSeconds();
}

//Clock
function clock() {
	getTime();

	let HoursFirstDigit,
		HoursSecondDigit,
		MinutesFirstDigit,
		MinutesSecondDigit,
		SecondsFirstDigit,
		SecondsSecondDigit;

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
		clock();
	}, 500);
}

function addLeadingZero(param) {
	let formattedNumber = ('0' + param).slice(-2);
	return formattedNumber;
}

//Greeting message
function greeting() {
	getTime();

	if (hours >= 7 && hours < 12) {
		document.querySelector('.greeting').innerText = 'Good morning';
	} else if (hours >= 12 && hours < 17) {
		document.querySelector('.greeting').innerText = 'Good afternoon';
	} else {
		document.querySelector('.greeting').innerText = 'Good evening';
		toggleButton.checked = true;
		const body = document.body;
		body.classList.replace('light', 'dark');
	}
}

//Theme Switcher
toggleButton.addEventListener('click', () => {
	const body = document.body;
	if (toggleButton.checked == true) {
		body.classList.replace('light', 'dark');
	} else {
		body.classList.replace('dark', 'light');
	}
});

clock();
greeting();
