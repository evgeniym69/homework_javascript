window.addEventListener('DOMContentLoaded', function(){
	var tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a){
		for (var i = a; i < tabContent.length; i++){
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
			};

			updateClock();
			var timeInterval = setInterval(updateClock, 1000);

	};

	setClock('timer', deadline);

	function animate(draw, duration) {
    let start = performance.now();
    requestAnimationFrame(function animate(time) {
        let timePassed = time - start;
        if (timePassed > duration) {
            timePassed = duration;
        }
        draw(timePassed);
        if (timePassed < duration) {
            requestAnimationFrame(animate);
        }
    })
};
let menu = document.getElementsByTagName('nav')[0];
 menu.addEventListener('click', function(event) {
    event.preventDefault();
    animate(function(timePassed) {
        let target = event.target;
      if (target.tagName = 'li') {
        let section = document.getElementById(target.getAttribute('href').slice(1));
          window.scrollBy(0, section.getBoundingClientRect().top / 20);
      }  
    }, 3500)
    
 })

}) ;