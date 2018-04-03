document.body.style.backgroundImage = "url('./img/apple_true.jpg')";

var menu = document.querySelector('.menu'), 
	listItem = document.createElement('li'),
	menuItem = document.getElementsByClassName('menu-item'),
	adv = document.querySelector('.adv'),
	propmt = document.getElementById('prompt'),
	question = prompt("Как вы относитесь к технике Apple?", "");

listItem.innerHTML = "<li class='menu-item'>Пятый пункт</li>";
menu.appendChild(listItem);
menu.insertBefore(menuItem[2], menuItem[1]);
title.textContent = "Мы продаем только подлинную технику Apple";
adv.remove();//Вычитал на https://learn.javascript.ru/modifying-document. Или использовать другой способ и, если да, то какой?
propmt.textContent = question;
