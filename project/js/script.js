window.addEventListener('DOMContentLoaded', function () {

let createButton = document.getElementById('popup-btn'),
		overlay = document.querySelector('.overlay'),
		customBlock = document.querySelector('.custom'),
		mainBlock = document.querySelector('.main'),
		customInfo = document.querySelector('.custom-info'),
		customChar = document.querySelector('.custom-char'),
		customStyle = document.querySelector('.custom-style'),
		mainCardsBlock = document.querySelector('.main-cards'),
		mainCardsItem = document.querySelectorAll('.main-cards-item')[1],
		readyBtn = document.getElementById('ready'),
		resetBtn = document.getElementById('reset'),
		sexCustomMale = document.getElementById('male'),
		sexCustomFemale = document.getElementById('female'),
		arrMen = [" url('./img/construct-5.png')",
					"url('./img/construct-6.png')",
					"url('./img/construct-7.png')",
					"url('./img/construct-8.png')"],
		arrWomen = ["url('./img/construct-1.png')", 
					"url('./img/construct-2.png')",
					"url('./img/construct-3.png')",
					"url('./img/construct-4.png')"],
		slideIndex = 1,
		preview = document.querySelector('.preview'),
		previewMain = document.querySelector('.person-easy'),
		nameCustom = document.getElementById('name'),
		ageCustom = document.getElementById('age'),
		customViews = document.getElementById('select'),
		bioCustom = document.getElementById('bio'); 

createButton.addEventListener('click', function(){
	overlay.style.display = "none";
	mainBlock.style.display = "none";
	customBlock.style.display = "flex";
	customInfo.style.display = "block";
	customInfo.classList.add('animated' , 'fadeInLeft');
	customChar.style.display = "block";
	customChar.classList.add('animated' , 'fadeInUp');
	customStyle.style.display = "block";
	customStyle.classList.add('animated' , 'fadeInRight');

	sexCustomMale.checked = false;//Удаляю атрибут checked у input radio



});



/*sexCustomMale.addEventListener('click', function(){
	function showBackgroundSlidesMen(n) {
	      if (n > arrMen.length){ 
	      	slideIndexMen = 1; 
	      };
	      if (n < 1) {
	      	slideIndexMen = arrMen.length;
	      };

	      for(let i = 0; i < arrMen.length; i++){
			
	      	preview.style.backgroundImage = arrMen[i - 1];
	     	previewMain.style.backgroundImage = arrMen[i - 1];
	      }

	      return arrMen[slideIndexMen - 1];
	      }

	    function plusSlides(n) {
	      showBackgroundSlidesMen(slideIndexMen += n);
	    }

	    prev.addEventListener('click', function() {
	      plusSlides(-1);
	    });

	    next.addEventListener('click', function() {
	      plusSlides(1);
	    });
}); 



sexCustomFemale.addEventListener('click', function(){
	function showBackgroundSlidesWomen(n) {
      if (n > arrWomen.length) { slideIndexWomen = 1;};
      if (n < 1) { slideIndexWomen = arrWomen.length;};
      preview.style.backgroundImage = arrWomen[slideIndexWomen - 1],
      previewMain.style.backgroundImage = arrWomen[slideIndexWomen - 1];

      return arrWomen[slideIndexWomen - 1];
      }

    function plusSlides(n) {
      showBackgroundSlidesWomen(slideIndexWomen += n);
    }

    prev.addEventListener('click', function() {
      plusSlides(-1);
    });

    next.addEventListener('click', function() {
      plusSlides(1);
    });
}); 
	


	*/


//Slider


let prev = document.querySelector('.prev'),
	next = document.querySelector('.next');



	function showSlides(n) {

    if (n > arrWomen.length || n > arrMen.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = arrWomen.length;
        slideIndex = arrMen.length;
    }

    for (let i = 0; i < arrWomen.length; i++) {
      preview.style.backgroundImage = arrWomen[slideIndex - 1],
      previewMain.style.backgroundImage = arrWomen[slideIndex - 1];

    }

    for (let i = 0; i < arrMen.length; i++) {
        preview.style.backgroundImage = arrMen[i - 1];
	    previewMain.style.backgroundImage = arrMen[i - 1];
    }

    if(sexCustomMale.checked) {

        preview.style.background =  arrMen[[slideIndex - 1]] + 'center no-repeat #fff';
        preview.style.backgroundSize = 'contain';
        previewMain.style.background = arrMen[[slideIndex - 1]] + 'center no-repeat';
        previewMain.style.backgroundSize = 'contain';
      

    } else if(sexCustomFemale.checked) {

        preview.style.background = arrWomen[[slideIndex - 1]] + 'center no-repeat #fff';
        preview.style.backgroundSize = 'contain';
        previewMain.style.background = arrWomen[[slideIndex - 1]] + 'center no-repeat';
        previewMain.style.backgroundSize = 'contain';

    }

}

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

prev.addEventListener('click', function() {
    plusSlides(-1);
});

next.addEventListener('click', function() {
    plusSlides(1);
});


//Добавление блока с кандидатом
readyBtn.addEventListener('click', function(){

		if(nameCustom.value == '' && ageCustom.value == ''){
			alert('Введите Имя, Возраст и выберите пол кандидата!');
		}else{
		div = mainCardsItem.cloneNode(true);//Создаю "глубокую" копию уже имеющегося блока с кандидатом.
		mainCardsBlock.appendChild(div);
		div.classList.add('main-cards-item', 'animated' , 'fadeInRight');

		customBlock.style.display = "none";
		mainBlock.style.display = "block";
		mainBlock.classList.add('animated' , 'fadeInDown');

		nameCandidate = document.querySelectorAll('.name')[2];
		ageCandidate = document.querySelectorAll('.age')[2];
		sexCandidate = document.querySelectorAll('.sex')[2];
		candidateViews = document.querySelectorAll('.views')[2];
		bioCandidate = document.querySelectorAll('.bio')[2];
		photoCandidate = document.querySelectorAll('.photo-2')[1];







		if(nameCustom.value == '' || typeof(nameCustom.value) === null || typeof(nameCustom.value) === "nubmer" || nameCustom.value.length > 30){
			nameCustom.style.cssText = 'border: 1px solid red;';
			nameCustom.value = "";
			nameCustom.placeholder = "ФИО используя буквы";
			nameCandidate.textContent = "Неверное имя";
			}
			else{
			nameCandidate.textContent = nameCustom.value;
			};

		if (ageCustom.value < 35 || ageCustom.value > 65 || ageCustom.value == '' || typeof(ageCustom.value) === null || ageCustom.value.length > 3 || ageCustom.value.length <= 1) {
			ageCustom.style.cssText = 'border: 1px solid red;';
			ageCustom.value = "";
			ageCustom.placeholder = "Возраст в цифрах от 35 до 65 лет";
			ageCandidate.textContent = "Вы ввели неправильный возраст";
			}
			else{
			ageCandidate.textContent = ageCustom.value + " лет";
			};

		if(customViews.value == "Либеральные"){
			customViews.value = "Либеральные";
		}else if (customViews.value = "Левые"){
			customViews.value = "Левые";
		}else{
			customViews.value = "Правые";
		};


		if (sexCustomMale.checked){
    		sexCandidate.innerHTML = sexCustomMale.value;
		} else if(sexCustomFemale.checked){
   		 	sexCandidate.innerHTML = sexCustomFemale.value;
		};
		

		candidateViews.textContent = customViews.value;
		bioCandidate.textContent = bioCustom.value;

		if (sexCustomMale.checked){
			photoCandidate.style.background = arrMen[slideIndex - 1] + 'no-repeat center center / 90%';
		}
		else{
			photoCandidate.style.background = arrWomen[slideIndex - 1] + 'no-repeat center center / 76%';
		};



//Обнуление и Голосование
let voting = document.getElementById('voting'),
		resultCount = document.querySelectorAll('.result-count'),
		progressBar1 = document.querySelector('.progress-bar'),
		progressBar2 = document.querySelectorAll('.progress-bar-2')[0],
		progressBar3 = document.querySelectorAll('.progress-bar-2')[1],
		mainCardsItemFirst = document.querySelectorAll('.main-cards-item')[0],
		mainCardsItemSecond = document.querySelectorAll('.main-cards-item')[1],
		mainCardsItemThird = document.querySelectorAll('.main-cards-item')[2],
		pecent,
		totalPercents = 101,
		crime = false,
		min = 0,
		winnerIndex = 0,
		a = 23, b = 57, c = 20;

//Обнуление
	resultCount[0].innerHTML = 0 + '%';
    resultCount[1].innerHTML = 0 + '%';
   	resultCount[2].innerHTML = 0 + '%';
    progressBar1.style.height = 0;
    progressBar2.style.height = 0;
    progressBar3.style.height = 0;



//Голосование
voting.addEventListener('click', function(){

	/*a = Math.floor((Math.random()*100));
		b = Math.floor((Math.random()*100));
		c = Math.floor((Math.random()*100));*/


//Удаление класса active у блоков
if(mainCardsItemFirst.classList.contains('main-cards-item-active')){
		mainCardsItemFirst.classList.remove('main-cards-item-active');
}else if(mainCardsItemSecond.classList.contains('main-cards-item-active')){
		mainCardsItemSecond.classList.remove('main-cards-item-active');
}else {
		mainCardsItemThird.classList.remove('main-cards-item-active');
}

//Добавление класса выиграшному блоку
if (a > b && a > c){
	mainCardsItemFirst.classList.add('main-cards-item-active');
	}else if(b > a && b > c){
	mainCardsItemSecond.classList.add('main-cards-item-active');
	}else if (c > a && c > b){
	mainCardsItemThird.classList.add('main-cards-item-active');
}

	 resultCount[0].innerHTML = a + '%';
	 resultCount[1].innerHTML = b + '%';
	 resultCount[2].innerHTML = c + '%';

     progressBar1.style.height = a + '%';
     progressBar2.style.height = b + '%';
     progressBar3.style.height = c + '%';

 });

let crimeBtn = document.getElementById('crime');

crimeBtn.addEventListener('click', function(){
	a -= 3;//20
	b -= 22;
	c += 25;//Добавляем к 20ти процентам ещё 25

 			resultCount[0].innerHTML = 20 + '%';
	 		resultCount[1].innerHTML = 35 + '%';
			resultCount[2].innerHTML = 45 + '%';

     progressBar1.style.height = 20 + '%';
     progressBar2.style.height = 35 + '%';
     progressBar3.style.height = 45 + '%';


	 if(mainCardsItemFirst.classList.contains('main-cards-item-active')){
			mainCardsItemFirst.classList.remove('main-cards-item-active');
	}else if(mainCardsItemSecond.classList.contains('main-cards-item-active')){
			mainCardsItemSecond.classList.remove('main-cards-item-active');
	}else {
			mainCardsItemThird.classList.remove('main-cards-item-active');
	}
});

}
});//Закрытие реди адд ивент листенер


resetBtn.addEventListener('click', function(){
	let divRemove = document.querySelectorAll('.main-cards-item')[2];
		mainBlock.style.display = "none";
		customBlock.style.display = "flex";
		mainCardsBlock.removeChild(divRemove);

		nameCustom.value = '';
		ageCustom.value = '';
		if (sexCustomMale.checked){
    		sexCustomMale.checked = false;
		} else{
   		 	sexCustomFemale.checked = false;
		};
		customViews = 'Либеральные';
		bioCustom.value = '';

		preview.style.backgroundImage = arrMen[0];
		previewMain.style.backgroundImage = arrMen[0];

});


});//DOMContentLoaded




			
