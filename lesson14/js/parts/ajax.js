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