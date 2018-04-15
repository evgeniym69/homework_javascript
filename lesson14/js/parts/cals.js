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