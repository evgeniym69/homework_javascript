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
		resetBtn = document.getElementById('reset');

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

let candidateName = document.querySelector('.name');

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

});


resetBtn.addEventListener('click', function(){
	mainBlock.style.display = "none";
	customBlock.style.display = "flex";
let divRemove = document.querySelectorAll('.main-cards-item')[2];
	mainCardsBlock.removeChild(divRemove);

});

//Голосование
let voting = document.getElementById('voting'),
		resultCount = document.querySelectorAll('.result-count'),
		progressBar1 = document.querySelector('.progress-bar-1'),
		progressBar2and3 = document.querySelectorAll('.progress-bar-2');


voting.addEventListener('click', function(){
		let a = Math.ceil((Math.random()*100)/3) + '%';
				b = Math.ceil((Math.random()*100)/3) + '%';
				с = Math.ceil((Math.random()*100)/3) + '%';

		    resultCount[0].innerHTML = a;
		    resultCount[1].innerHTML = b;
		   // resultCount[2].innerHTML = c;
    if (event.target){
        progressBar1.style.height = a;
        progressBar2and3[0].style.height = b;
       // progressBar[2].style.height = '70%';
  }

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
		slideIndex = 1;

function showBackgroundSlides(n) {
      if (n > arrMen.length) {
        slideIndex = 1;
      };
      if (n < 1) {
        slideIndex = arrMen.length;
      };
      preview.style.backgroundImage = arrMen[slideIndex - 1],
      previewMain.style.backgroundImage = arrMen[slideIndex - 1]

    }
    function plusSlides (n) {
      showBackgroundSlides(slideIndex += n)
    }
    prev.addEventListener('click', function() {
      plusSlides(-1);
    });
    next.addEventListener('click', function() {
      plusSlides(1);
    });

