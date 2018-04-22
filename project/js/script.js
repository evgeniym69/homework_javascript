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
		crime = document.getElementById('crime');


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
});


//Добавление блока с кандидатом
readyBtn.addEventListener('click', function(){
	let div = mainCardsItem.cloneNode(true);//Создаю "глубокую" копию уже имеющегося блока с кандидатом.
		mainCardsBlock.appendChild(div);
		div.classList.add('main-cards-item', 'animated' , 'fadeInRight');

		customBlock.style.display = "none";
		mainBlock.style.display = "block";
		mainBlock.classList.add('animated' , 'fadeInDown');

		nameCustom = document.getElementById('name').value;
		nameCandidate = document.querySelectorAll('.name')[2];

		ageCustom = document.getElementById('age').value;
		ageCandidate = document.querySelectorAll('.age')[2];

		sexCustomMale = document.getElementById('male');
		sexCustomFemale = document.getElementById('female');
		sexCandidate = document.querySelectorAll('.sex')[2];

		customViews = document.getElementById('select').value;
		candidateViews = document.querySelectorAll('.views')[2];

		bioCustom = document.getElementById('bio').value;
		bioCandidate = document.querySelectorAll('.bio')[2];

		photoCandidate = document.querySelectorAll('.photo-2')[1];


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


		nameCandidate.textContent = nameCustom;
		ageCandidate.textContent = ageCustom;
		candidateViews.textContent = customViews;
		bioCandidate.textContent = bioCustom;

		photoCandidate.style.background = arrWomen[slideIndex - 1] + 'no-repeat center center / 76%';

		console.log(arrWomen[slideIndex - 1]);


//Обнуление и Голосование
let voting = document.getElementById('voting'),
		resultCount = document.querySelectorAll('.result-count'),
		progressBar1 = document.querySelector('.progress-bar-1'),
		progressBar2 = document.querySelectorAll('.progress-bar-2')[0];
		progressBar3 = document.querySelectorAll('.progress-bar-2')[1];

//Обнуление
		resultCount[0].innerHTML = 0 + '%';
    resultCount[1].innerHTML = 0 + '%';
   	resultCount[2].innerHTML = 0 + '%';
    progressBar1.style.height = 0;
    progressBar2.style.height = 0;
    progressBar3.style.height = 0;


//Голосование
voting.addEventListener('click', function(){
		let //a = Math.ceil((Math.random()*100)) + '%';
				//b = Math.ceil((Math.random()*100)) + '%';
				//c = Math.ceil((Math.random()*100)) + '%';

		    a = randomInteger(0, 100) ;
				b = randomInteger(0, 100) ;
				c = randomInteger(0, 100) ;

		function randomInteger(min, max) {
		    var rand = min + Math.random() * (max + 1 - min);
		    rand = Math.floor(rand);
		    return rand;
			}

				mainCardsItemFirst = document.querySelectorAll('.main-cards-item')[0];
				mainCardsItemSecond = document.querySelectorAll('.main-cards-item')[1];
				mainCardsItemThird = document.querySelectorAll('.main-cards-item')[2];

			
				if(mainCardsItemFirst.classList.contains('main-cards-item-active')){
						mainCardsItemFirst.classList.remove('main-cards-item-active');
				}else if(mainCardsItemSecond.classList.contains('main-cards-item-active')){
						mainCardsItemSecond.classList.remove('main-cards-item-active');
				}else {
						mainCardsItemThird.classList.remove('main-cards-item-active');
				}

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

    if (event.target){
        progressBar1.style.height = a + '%';
        progressBar2.style.height = b + '%';
        progressBar3.style.height = c + '%';
  	}

 });


});

resetBtn.addEventListener('click', function(){
	let divRemove = document.querySelectorAll('.main-cards-item')[2];
		mainBlock.style.display = "none";
		customBlock.style.display = "flex";
		mainCardsBlock.removeChild(divRemove);
});


//Slider
let preview = document.querySelector('.preview'),
		previewMain = document.querySelector('.person-easy'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		arrWomen = ["url('./img/construct-1.png')", 
								"url('./img/construct-2.png')",
								"url('./img/construct-3.png')",
								"url('./img/construct-4.png')"],
		arrMen = ["url('./img/construct-5.png')",
								"url('./img/construct-6.png')",
								"url('./img/construct-7.png')",
								"url('./img/construct-8.png')"],
		slideIndex = 0;

		preview.style.backgroundImage = 'none';
		previewMain.style.backgroundImage = 'none';

function showBackgroundSlides(n) {
      if (n > arrWomen.length) {
        slideIndex = 1;
      };
      if (n < 1) {
        slideIndex = arrWomen.length;
      };
      preview.style.backgroundImage = arrWomen[slideIndex - 1],
      previewMain.style.backgroundImage = arrWomen[slideIndex - 1];

      return arrWomen[slideIndex - 1];
      }

    function plusSlides(n) {
      showBackgroundSlides(slideIndex += n)
    }

    prev.addEventListener('click', function() {
      plusSlides(-1);
    });
    next.addEventListener('click', function() {
      plusSlides(1);
    });


crime.addEventListener('click', function(){

});



			
