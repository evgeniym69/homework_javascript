window.addEventListener('DOMContentLoaded', function(){
	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a){
		for (let i = a; i < tabContent.length; i++){
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b){
		if(tabContent[b].classList.contains('hide')){
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function() {
		var target = event.target;
		if(target.className == "info-header-tab"){
			for(var i = 0; i < tab.length; i++){
				if(target == tab[i]){
				 showTabContent(i);
				 break;
				}
			}
		}
	});

//Timer

	let deadline = '2018-03-08';

	function getTimeRemaining(endtime){
		let t = Date.parse(endtime) - Date.parse(new Date()),
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
		let timer = document.getElementById(id),
			_hours = timer.querySelector('.hours'),
			_minutes = timer.querySelector('.minutes'),
			_seconds = timer.querySelector('.seconds');

			function updateClock(){
				let _t = getTimeRemaining(endtime);
					_hours.innerHTML = _t.hours;
					_minutes.innerHTML = _t.minutes;
					_seconds.innerHTML = _t.seconds;

					if(_t.total <= 0){
						timer.innerHTML = "00 : 00 : 00";
					}
			}

			updateClock();
			let timeInterval = setInterval(updateClock, 1000);

	}

	setClock('timer', deadline);

	//Модальное окно

		let more = document.querySelector('.more'),
				overlay = document.querySelector('.overlay'),
				close = document.querySelector('.popup-close'),
				infoBlock = document.querySelector('.info');

		more.addEventListener('click', function(){
				this.classList.add('more-splash');
				overlay.style.display = "block";
				document.body.style.overflow = 'hidden';
		});

		close.addEventListener('click', function(){
				overlay.style.display = "none";
				more.classList.remove('more-splash');
				document.body.style.overflow = 'visible';
		});

		infoBlock.addEventListener('click', function(event){
			if(event.target && event.target.className == 'description-btn'){
				overlay.style.display = "block";
			}
		});

}) ;

