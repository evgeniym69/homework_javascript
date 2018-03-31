var budget = prompt('Ваш бюджет?');
var storeName = prompt('Название вашего магазина');
var time = 19;

var mainList = {
	cash: budget,
	name: storeName,
	shopGoods:[],
	employers:{},
	open: false
};


/*for (var i = 0; i < 5; i++) {

		var a = prompt('Какой тип товаров будем продавать?');
		
		if((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50){
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
		} else{
			i = i - 1;
		}
};
*/

//Переписывание цикла FOR

var i = 0;

/*while(i < 5){
	var a = prompt('Какой тип товаров будем продавать?');

	if((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50){
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
		} else{
			i = i - 1;
		}
		i++;
}*/

do {
	var a = prompt('Какой тип товаров будем продавать?');

	if((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50){
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
		} else{
			i = i - 1;
		}
		i++;
}while (i < 5);



if(time < 0) {
	console.log('Такого не может быть!');
} else if (time > 8 && time < 20){
	console.log("Время работать!");
}else if (time < 24){
	console.log("Уже слишком поздно!");
}
	else {
		console.log("В сутках только 24 часа!");
	}


alert("Ваш бюджет на один день составляет: " + budget/30);
console.log(mainList);
