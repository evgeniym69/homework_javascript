var openBtn = document.getElementById('open-btn'),

	nameValueField = document.getElementsByClassName('name-value')[0],
	budgetValueField = document.getElementsByClassName('budget-value')[0],
	goodsValueField = document.getElementsByClassName('goods-value')[0],
	itemsValueField = document.getElementsByClassName('items-value')[0],
	employersValueField = document.getElementsByClassName('employers-value')[0],
	discountValueField = document.getElementsByClassName('discount-value')[0],
	isopenValueField = document.getElementsByClassName('isopen-value')[0],

	goodsItemInput = document.getElementsByClassName('goods-item'),

	buttonGoods = document.getElementsByTagName('button')[1],
	buttonCountBudget = document.getElementsByTagName('button')[2],
	buttonHireEmployers = document.getElementsByTagName('button')[3],

	chooseItem = document.querySelector('.choose-item'),
	timeValue = document.querySelector('.time-value'),
	countBudgetValue = document.querySelector('.count-budget-value'),

	hireEmployersItemField = document.querySelectorAll('.hire-employers-item');


var budget,
	price;

openBtn.addEventListener('click', () => {
	budget = prompt('Ваш бюджет?', '');

	while(isNaN(budget) || budget == "" || budget == null) {
		budget = prompt('Вы ввели неверные данные. Введите корректное значение бюджета?', '');
	}

	budgetValueField.textContent = budget;

	nameValueField.textContent = prompt('Название вашего магазина', '').toUpperCase();

});

buttonGoods.addEventListener('click', () => {

	for (var i = 0; i < goodsItemInput.length; i++) {
		var a = goodsItemInput[i].value;
	 
		if((typeof(a)) === 'string' && (typeof(a)) != null && a.length < 50) {
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
			goodsValueField.textContent = mainList.shopGoods;
		} else {
			i = i - 1;
		}
	}

});

chooseItem.addEventListener('change', () => {
	var items = chooseItem.value;

	if(isNaN(items) || items != '') {
		mainList.shopItems = items.split(', ');
		mainList.shopItems.sort();

		itemsValueField.textContent = mainList.shopItems;
	};
		
});

timeValue.addEventListener('change', () =>{
	var time = timeValue.value;

	if(time < 0) {
		console.log('Такого не может быть!');
		mainList.open = false;

	} else if (time > 8 && time < 20){
		console.log("Время работать!");
		mainList.open = true;
	}else if (time < 24){
		console.log("Уже слишком поздно!");
		mainList.open = false;
	}
		else {
			console.log("В сутках только 24 часа!");
			mainList.open = false;
		};


	if(mainList.open == true){
		isopenValueField.style.backgroundColor = "green";
	} else {
		isopenValueField.style.backgroundColor = "red";	
	}

});

buttonCountBudget.addEventListener('click', () => {
	countBudgetValue.value = budget / 30;
});

buttonHireEmployers.addEventListener('click', () =>{

		for (var i = 0; i < hireEmployersItemField.length; i++) {
			var b = hireEmployersItemField[i].value;
			if((typeof(b)) === 'string' && (typeof(b)) != null && b != '' && b.length < 40 && isNaN(b)){
				console.log('Все верно!');
				mainList.employers[i] = b;
			} else{
				alert("Введите имя сотрудника используя только буквы");
				break;
			}
			employersValueField.textContent += mainList.employers[i] + ', ';
	}
});

var mainList = {
	cash: budget,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true,
	shopItems: [],
	
	discountPrice: function discountPrice(){
							if(mainList.discount == true){
								price = price * 0.8;
							}else{
								alert('У вас отсутствует скидка!');	
							}
						}
								
	
};
/*
for(var key in mainList){
	console.log('Наш магазин включает в себя: ' + key + ' СО ЗНАЧЕНИЕМ: '+ mainList[key]);
}*/



