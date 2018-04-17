function sum(a, b) {
	return a + b > 10;
}

let arr1 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
let num = arr1[1][1];

var each = function(startArr, f){return f(startArr)};
var arr = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
console.log(each(arr, myFunc));




describe('Сумма/Соответствие/функция each', function(){
	
		it("Возращает ли функция sum true?", function(){
		assert.isTrue(sum(9,2));//или так assert(sum(2,2));
		});

		it("Равна ли переменная num 5", function(){
		assert.equal(num, 5);
		});

		it("Тип данных функции each", function(){
		assert.typeOf(each, 'function');// Не пойму как проверить на тип данных, который она вовзращает
		});


		it("Cвойство length функции each", function(){
		assert.lengthOf(each, 2);
		});

		it("Возвращает массив со значениями [8, 7, 6, 5, 4]", function(){
		assert.equal(each, 8, 7, 6, 5, 4);
		});

}); 



