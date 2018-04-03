var budget,
	storeName,
	time,
	price;


function start(){
	budget = prompt('Ваш бюджет?', '');

	while(isNaN(budget) || budget == "" || budget == null) {
		budget = prompt('Вы ввели неверные данные. Введите корректное значение бюджета?', '');
	}

	storeName = prompt('Название вашего магазина', '').toUpperCase();
	time = 21;

}

//start();

var mainList = {
	cash: budget,
	name: storeName,
	shopGoods:[],
	employers:{},
	open: false,
	discount: true,
	shopItems: [],
	chooseGoods: function chooseGoods(){

		for (var i = 0; i < 5; i++) {

		var a = prompt('Какой тип товаров будем продавать?', '');
		
						if((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50){
							console.log('Все верно!');
							mainList.shopGoods[i] = a;
						} else{
							i = i - 1;
						}
					}
				},
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
									for(i = 0; i < 1; i++){

									var items = prompt("Перечислите Ваши товары через запятую", "");

									if((typeof(items)) === 'string' && (typeof(items)) != null && items != '' && isNaN(items)){
										mainList.shopItems = items.split(",");
										mainList.shopItems.push(prompt("Вы точно указали все товары, которые необходимы?", ""));
										mainList.shopItems.sort();
										mainList.shopItems.forEach(function(item, i, arr){
											alert("У нас вы можете купить: " + (i + 1) + ":" + item);
										})

									} else{
										i = i - 1;
									}
									}
	}
					
};

for(var key in mainList){
	console.log('Наш магазин включает в себя: ' + key + ' СО ЗНАЧЕНИЕМ: '+ mainList[key]);
};

var openBtn = document.getElementById('open-btn'),

	nameField = document.getElementsByClassName('name'),
	nameValueField = document.getElementsByClassName('name-value'),
	budgetField = document.getElementsByClassName('budget'),
	budgetValueField = document.getElementsByClassName('budget-value'),
	goodsField = document.getElementsByClassName('goods'),
	goodsValueField = document.getElementsByClassName('goods-value'),
	itemsField = document.getElementsByClassName('items'),
	itemsValueField = document.getElementsByClassName('items-value'),
	employersField = document.getElementsByClassName('employers'),
	employersValueField = document.getElementsByClassName('employers-value'),
	discountField = document.getElementsByClassName('discount'),
	discountValueField = document.getElementsByClassName('discount-value'),
	isopenField = document.getElementsByClassName('isopen'),
	isopenValueField = document.getElementsByClassName('isopen-value'),

	goodsItemFirstInput = document.getElementsByClassName('goods-item')[0],
	goodsItemSecondInput = document.getElementsByClassName('goods-item')[1],
	goodsItemThirdInput = document.getElementsByClassName('goods-item')[2],
	goodsItemFourthInput = document.getElementsByClassName('goods-item')[3],

	buttonApprove = document.getElementsByTagName('button')[1],
	buttonCount = document.getElementsByTagName('button')[2],
	buttonHire = document.getElementsByTagName('button')[3],

	chooseItem = document.querySelector('choose-item'),
	timeValue = document.querySelector('time-value'),
	countBudgetValue = document.querySelector('count-budget-value'),

	hireEmployersItemFirstField = document.querySelectorAll('hire-employers-item')[0],
	hireEmployersItemSecondField = document.querySelectorAll('hire-employers-item')[1],
	hireEmployersItemThirdField = document.querySelectorAll('hire-employers-item')[2];

console.log(buttonApprove);
