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