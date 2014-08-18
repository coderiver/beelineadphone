//faq list
$(document).ready(function(){
	$(".ask__list-item").click(function () {
		$(this).toggleClass("faq__active");
		$(this).find('.faq__info').slideToggle('200');
	});
});
//---