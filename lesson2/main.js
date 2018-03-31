var budget = prompt('Ваш бюджет?');
var storeName = prompt('Название вашего магазина');


var mainList = {
	cash: budget,
	name: storeName,
	shopGoods:[],
	employers:{},
	open: false
};


for (var i = 0; i < 5; i++) {

		var a = prompt('Какой тип товаров будем продавать?');
		
		if((typeof(a)) === 'string' && (typeof(a)) === null && a !== '' && a.length < 50){
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
		}
}

alert("Ваш бюджет на один день составляет: " + budget/30);
console.log(mainList);
