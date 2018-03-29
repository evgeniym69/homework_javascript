var budget = prompt('Ваш бюджет?');
var storeName = prompt('Название вашего магазина');
var shopGoods = [''];
var employers = {};

var mainList = {
	budget: budget,
	name: storeName,
	shopGoods: shopGoods,
	staff: employers,
	open: ''
};


shopGoods[0] = prompt('Какой тип товаров будем продавать?');
shopGoods[1] = prompt('Какой тип товаров будем продавать?');
shopGoods[2] = prompt('Какой тип товаров будем продавать?');

console.log(shopGoods);//Вывод записанных товаров в массив

alert("Ваш бюджет на один день составляет: " + budget/30);

console.log(mainList);//Вывод данных из объекта mainList

