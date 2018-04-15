function timer(){
	var deadline = '2018-03-08';

	function getTimeRemaining(endtime){
		var t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
			hours = Math.floor((t / (1000 * 60 * 60)));

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function setClock(id, endtime){
		var timer = document.getElementById(id),
			_hours = timer.querySelector('.hours'),
			_minutes = timer.querySelector('.minutes'),
			_seconds = timer.querySelector('.seconds');

			function updateClock(){
				var _t = getTimeRemaining(endtime);
					_hours.innerHTML = _t.hours;
					_minutes.innerHTML = _t.minutes;
					_seconds.innerHTML = _t.seconds;

					if(_t.total <= 0){
						timer.innerHTML = "00 : 00 : 00";
					}
			}

			updateClock();
			var timeInterval = setInterval(updateClock, 1000);

	}

	setClock('timer', deadline);

}

module.exports = timer;