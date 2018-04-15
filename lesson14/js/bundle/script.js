window.addEventListener('DOMContentLoaded', function(){

/*class options{
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	newDiv(text){
		let div = document.createElement('div');
		document.body.appendChild(div);
		div.textContent = text;
		div.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign}`;
	}
}

let test = new options('300px', '500px', 'yellow', '42px', 'center');
test.newDiv('Текст в DIV'); Добавление дива в конце страницы*/

	let tab = require('../parts/tabs.js');
	let modal = require('../parts/modal.js');
	let ajax = require('../parts/ajax.js');
	let slider = require('../parts/slider.js');
	let calc = require('../parts/cals.js');
	let timer = require('../parts/timer.js');

	tab();
	modal();
	ajax();
	slider();
	calc();
	timer();



});