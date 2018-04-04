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

	if(isNaN(items) && items != '') {
		mainList.shopItems = items.split(', ');
		mainList.shopItems.sort();

		itemsValueField.textContent = mainList.shopItems;
	} ;
		
});

var mainList = {
	cash: budget,
	name: storeName,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true,
	shopItems: [],
	workTime: function workTime(time){
						if(time < 0) {
							console.log('Такого не может быть!');
						} else if (time > 8 && time < 20){
							console.log("Время работать!");
							mainList.open = true;
						}else if (time < 24){
							console.log("Уже слишком поздно!");
						}
							else {
								console.log("В сутках только 24 часа!");
							}
				},
	dayBudget: function dayBudget(){
							alert('Ваш ежедневный бюджет ' + mainList.budget / 30);
							},
	discountPrice: function discountPrice(){
							if(mainList.discount == true){
								price = price * 0.8;
							}else{
								alert('У вас отсутствует скидка!');	
							}
						}, 
	employersHiring: 	function employersHiring(){
								for (var i = 1; i < 5; i++) {
									var b = prompt('Введите имя Вашего сотрудника!', '');
									if((typeof(b)) === 'string' && (typeof(b)) != null && b != '' && b.length < 20 && isNaN(b)){
										console.log('Все верно!');
										mainList.employers[i] = b;
									} else{
										alert("Введите имя сотрудника используя только буквы");
										i = i - 1;
									}
								}
							},
	chooseShopItems: function chooseShopItems(){
									
					
}
};
/*
for(var key in mainList){
	console.log('Наш магазин включает в себя: ' + key + ' СО ЗНАЧЕНИЕМ: '+ mainList[key]);
}*/



