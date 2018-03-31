var budget = prompt('Ваш бюджет?');
var storeName = prompt('Название вашего магазина');


var mainList = {
	cash: budget,
	name: storeName,
	stuff: shopGoods[],
	staff: employers{},
	open: false
};


mainList.shopGoods[0] = prompt('Какой тип товаров будем продавать?');
mainList.shopGoods[1] = prompt('Какой тип товаров будем продавать?');
mainList.shopGoods[2] = prompt('Какой тип товаров будем продавать?');

alert("Ваш бюджет на один день составляет: " + budget/30);

console.log(mainList);//Вывод данных из объекта mainList

