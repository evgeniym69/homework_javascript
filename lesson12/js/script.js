$(document).ready(function() {

		$('.main_btna').click(function(){
				$('.overlay').fadeIn(1500);
				$('.modal').show('slow');
				$('body').css('overflow', 'hidden');

		});

		$('.main_btn').click(function(){
				$('.overlay').fadeIn(1500);
				$('.modal').show('slow');
				$('body').css('overflow', 'hidden');
		});

		$('nav li:eq(1)').click(function(){
				$('.overlay').fadeIn(1500);
				$('.modal').show('slow');
				$('body').css('overflow', 'hidden');
		});

		$('.close').click(function(){
				$('.overlay').fadeOut(500);
				$('.modal').hide('slow');
				$('body').css('overflow', 'visible');
		});

	
});