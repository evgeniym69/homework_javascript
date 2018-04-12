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
			}

			updateClock();
			var timeInterval = setInterval(updateClock, 1000);

	}

	setClock('timer', deadline);

	//Модальное окно

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

class options{
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

/*let test = new options('300px', '500px', 'yellow', '42px', 'center');
test.newDiv('Текст в DIV'); Добавление дива в конце страницы*/

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

	//Slider

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
				
	//Calc

	let persons = document.getElementsByClassName('counter-block-input')[0],
	 	restDays = document.getElementsByClassName('counter-block-input')[1],
	 	place = document.getElementById('select'),
	 	totalValue = document.getElementById('total'),
	 	personsSum = 0,
	 	restDaysSum = 0,
	 	total = 0;

	 	totalValue.innerHTML = 0;

	 	persons.addEventListener('change', function() {
	 		personsSum = +this.value;
	 		total = (restDaysSum + personsSum)*4000;
	 		if (restDays.value == '' || restDays.value == 0){
	 			totalValue.innerHTML = 0;
	 		} else{
	 			totalValue.innerHTML = total;
	 		}
	 	});

 		restDays.addEventListener('change', function() {
 			restDaysSum = +this.value;
 			total = (restDaysSum + personsSum)*4000;
 			if (persons.value == '' || persons.value == 0){
	 			totalValue.innerHTML = 0;
	 		} else{
	 			totalValue.innerHTML = total;
	 		}
	 	});

	 	place.addEventListener('change', function(){
	 		if(restDays.value == '' || persons.value == '' || persons.value == 0 || restDays.value == 0){
	 			totalValue.innerHTML = 0;
	 		}else{
	 			let a = total;
	 			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
	 		}
	 	});


});