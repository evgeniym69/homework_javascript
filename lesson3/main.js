var budget,
	storeName,
	time,
	price;


function start(){
	budget = prompt('Ваш бюджет?');

	while(isNaN(budget) || budget == "" || budget == null) {
		budget = prompt('Вы ввели неверные данные. Введите корректное значение бюджета?');
	}

	storeName = prompt('Название вашего магазина').toUpperCase();
	time = 21;

}

start();

var mainList = {
	cash: budget,
	name: storeName,
	shopGoods:[],
	employers:{},
	open: false,
	discount: true
};

function chooseGoods(){

for (var i = 0; i < 5; i++) {

		var a = prompt('Какой тип товаров будем продавать?');
		
		if((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50){
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
		} else{
			i = i - 1;
		}
	}
};

//chooseGoods();

function workTime(time){
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
};

workTime(18);

function dayBudget(){
	return budget/30;
}
dayBudget();

/*price = 500;
function discountPrice(){
	if(mainList.discount == true){
		alert("Новая цена со скидкой 20% составляет = " + (price*0.8));
	}else{
		alert('У вас отсутствует скидка!');	
	}
};

discountPrice();*/

function employersHiring(){
	for (var i = 0; i < 4; i++) {

		var b = prompt('Введите имя Вашего сотрудника!');
		
		if((typeof(b)) === 'string' && (typeof(b)) != null && b != '' && b.length < 20 && isNaN(b)){
			console.log('Все верно!');
			mainList.employers[i] = b;
		} else{
			alert("Введите имя сотрудника используя только буквы");
			i = i - 1;
		}
	}
};

employersHiring();


alert("Ваш бюджет на один день составляет: " + dayBudget());
console.log(mainList);
