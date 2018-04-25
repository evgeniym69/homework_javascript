(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function(){

/*class options{
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	newDiv(text){
		let div = document.createElement('div');
		document.body.appendChild(div);
		div.textContent = text;
		div.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign}`;
	}
}

let test = new options('300px', '500px', 'yellow', '42px', 'center');
test.newDiv('Текст в DIV'); Добавление дива в конце страницы*/

	let tab = require('../parts/tabs.js');
	let modal = require('../parts/modal.js');
	let ajax = require('../parts/ajax.js');
	let slider = require('../parts/slider.js');
	let calc = require('../parts/cals.js');
	let timer = require('../parts/timer.js');

	tab();
	modal();
	ajax();
	slider();
	calc();
	timer();



});
},{"../parts/ajax.js":2,"../parts/cals.js":3,"../parts/modal.js":4,"../parts/slider.js":5,"../parts/tabs.js":6,"../parts/timer.js":7}],2:[function(require,module,exports){
function ajax(){
	let message = new Object();
		message.loading = "<img src='../img/ajax-loader.gif'>";
		message.success = "<img src='../img/checked-icon.png'> Спасибо! Скоро мы с вами свяжемся";
		message.failure = "<img src='../img/error-icon.png'> Ошибка. Что-то пошло не так...";

let form = document.getElementsByClassName('main-form')[0];
		input = form.getElementsByTagName('input');

		contactForm = document.getElementById('form');//Беру айди формы
		inputContact = contactForm.getElementsByTagName('input');//Беру инпуты у формы

		statusMessage = document.createElement('div');
		statusMessage.classList.add('status');


		form.addEventListener('submit', function(event){
				event.preventDefault();
				form.appendChild(statusMessage);

				//AJAX

				let request = new XMLHttpRequest();
						request.open('POST', './server.php');

						request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

						let formData = new FormData(form);

						request.send(formData);

						request.onreadystatechange = function(){
							if(request.readyState < 4){
								statusMessage.innerHTML = message.loading;
							}else if(request.readyState === 4){
								if(request.status == 200 && request.status < 300){
									statusMessage.innerHTML = message.success;
								//Добавляем контент на страницу
								}
								else{
									statusMessage.innerHTML = message.failure;
								}
							}
						};

						for(let i = 0; i < input.length; i++){
							input[i].value = '';
							//Очищаем поля ввода
						}
		});

	contactForm.addEventListener('submit', function(event){
			event.preventDefault();
			contactForm.appendChild(statusMessage);

					//AJAX

				let request = new XMLHttpRequest();
						request.open('POST', './server.php');

						request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

						let formData = new FormData(form);

						request.send(formData);

						request.onreadystatechange = function(){
							if(request.readyState < 4){
								statusMessage.innerHTML = message.loading;
							}else if(request.readyState === 4){
								if(request.status == 200 && request.status < 300){
									statusMessage.innerHTML = message.success;
								//Добавляем контент на страницу
								}
								else{
									statusMessage.innerHTML = message.failure;
								}
							}
						};

						for(let i = 0; i < inputContact.length; i++){
							inputContact[i].value = '';
							//Очищаем поля ввода
						}

		});
}

module.exports = ajax;
},{}],3:[function(require,module,exports){
function calc(){
	let persons = document.getElementsByClassName('counter-block-input')[0],
	 	restDays = document.getElementsByClassName('counter-block-input')[1],
	 	place = document.getElementById('select'),
	 	totalValue = document.getElementById('total'),
	 	personsSum = 0,
	 	restDaysSum = 0,
	 	total = 0;

	 	totalValue.innerHTML = 0;

	 	persons.addEventListener('change', function() {
	 		this.value = Math.ceil(Math.abs(persons.value));
	 		personsSum = +this.value;
	 		total = (restDaysSum + personsSum)*4000;
	 		if (persons.value <= 0 || restDays.value <= 0 ){
	 			totalValue.innerHTML = 0;
	 		} else {
	 			totalValue.innerHTML = total;
	 		}
	 	});

 		restDays.addEventListener('change', function() {
 			this.value = Math.ceil(Math.abs(restDays.value));
 			restDaysSum = +this.value;
 			total = (restDaysSum + personsSum)*4000;
 			if (restDays.value <= 0 || persons.value <= 0){
	 			totalValue.innerHTML = 0;
	 		} else {
	 			totalValue.innerHTML = total;
	 		}
	 	});

	 	place.addEventListener('change', function(){
	 		if(persons.value <= 0 || restDays.value <= 0) {
	 			totalValue.innerHTML = 0;
	 		} else {
	 			let a = total;
	 			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
	 		}
	 	});
}

module.exports = calc;
},{}],4:[function(require,module,exports){
function modal(){

		var more = document.querySelector('.more'),
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
}

module.exports = modal;
},{}],5:[function(require,module,exports){
function slider(){
	let slideIndex = 1,
		slides = document.getElementsByClassName('slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dot = document.getElementsByClassName('dot');

		showSlides(slideIndex);

		function showSlides(n){

			if(n > slides.length) {
				slideIndex = 1;
			};

			if(n < 1){
				slideIndex = slides.length;
			};

			for(let i = 0; i < slides.length; i++){
				slides[i].style.display = 'none';
			};

			for(let i = 0; i < dot.length; i++){
				dot[i].classList.remove('dot-active');
			};

			slides[slideIndex - 1].style.display = 'block';
			dot[slideIndex - 1].classList.add('dot-active');
		}

		function plusSlides(n){
			showSlides(slideIndex += n)
		}

		function currentSlide(n){
			showSlides(slideIndex = n)
		}

		prev.addEventListener('click', function(){
			plusSlides(-1)
		});

		next.addEventListener('click', function(){
			plusSlides(1)
		});

		dotsWrap.addEventListener('click', function(event) {
			for(let i = 0; i < dot.length + 1; i++) {
				if(event.target.classList.contains('dot') && event.target == dot[i-1]){
					currentSlide(i);
				}
			}
		});

	
		setInterval(function()
				{ 
					plusSlides(slideIndex);
				},
				5000); 
}

module.exports = slider;
},{}],6:[function(require,module,exports){
function tab(){
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
}

module.exports = tab;
},{}],7:[function(require,module,exports){
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
},{}]},{},[1]);