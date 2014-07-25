$(document).ready(function() {

	$('.js-select').selectmenu();

	//tab
	function tab() {
	$(".js-tab").each(function(){
		var tab_link = $(this).find("a");
		var tab_item = $(this).find("li");
		var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
		tab_cont.hide();
		tab_item.first().addClass("is-active");
		$(this).parents(".js-tab-group").find(".js-tab1").show();
		tab_link.on("click", function() {
			var index = $(this).attr("href");
			tab_item.removeClass("is-active");
			$(this).parent().addClass("is-active");
			tab_cont.hide();
			$(this).parents(".js-tab-group").find("."+index).show();
			return false;
			});
		});
	}
	tab();

	// tabs
	$(".js-tabs-pane").removeClass("is-visible");
	$(".js-tabs-nav li:first").addClass("is-active");
	$(".js-tabs-pane:first").addClass("is-visible");

	$(".js-tabs-nav li").click(function() {
		$(".js-tabs-nav li").removeClass("is-active");
		$(this).addClass("is-active");
		$(".js-tabs-pane").removeClass("is-visible");
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).addClass("is-visible");
		return false;
	});

	// scroll
	$(".navbar a").click(function (){
		var page = $(this).attr("href");

		$('html, body').animate({
			scrollTop: $(page).offset().top - 110
		}, 600);
		return false;
	});

	$(".js-tab-chow").click(function(){
		$(".js-select2").selectmenu();
	})

	$(".js-question").click(function(){
		$(".js-feedback").show();
		$(".js-top-field").slideDown();
		$(".js-language").removeClass("is-active");
		$(".js-password-block").hide();
		$(".js-login").hide();
		$(".js-sheet").hide();
	});

	$(".js-close-field").click(function(){
		$(".js-feedback").slideUp();
		$(".js-top-field").slideUp();
		$(".js-language").removeClass("is-active");
		$(".js-password-block").hide();
		$(".js-login").hide();
		$(".js-sheet").hide();
	});

	$(".js-personally").click(function(){
		$(".js-login").show();
		$(".js-top-field").slideDown();
		$(".js-language").removeClass("is-active");
		$(".js-feedback").hide();
		$(".js-sheet").hide();
	})

	$(".js-password").click(function(){
		$(".js-password-block").show();
		$(".js-language").removeClass("is-active");
		$(".js-login").hide();
		$(".js-sheet").hide();
	})

	$(".js-language").click(function(){
		$(this).addClass("is-active");
		$(".js-sheet").show();
		$(".js-top-field").slideDown();
		$(".js-password-block").hide();
		$(".js-feedback").hide();
		$(".js-login").hide();
	})

	//validate
	$("#form").validate({
        rules: {
            message: {
                required: true
            }
        },
		messages:{
			message:{
                required: "Ваш вопрос не может быть пустым"
			}
		},
		errorPlacement: function(error, element) {
			if (element.attr("name") == "message") error.insertAfter($("input[name=message]"));
		}
	});
	
	//select
	function select() {
		var el = $('.js-select-other');
		var el_title = el.children("span");
		var item = el.find('li');
		var input = el.find(".js-select-input");
		var el_text = el.find(".js-select-text");
		var checkbox = el.find(".checkbox");
		var list = el.find('.js-select-drop');
		el_title.bind("click",function(event){
			// tooltip();
			if ($(this).parent().hasClass('is-open')) {
				$(this).parent().removeClass('is-open');
				$(this).parent().parent().parent().removeClass('is-open');
			}
			else {
				el.removeClass('is-open');
				$('.row').removeClass('is-open')
				$(this).parent().addClass('is-open');
				$(this).parent().parent().parent().addClass('is-open');
			};
			event.stopPropagation();
		});
		checkbox.bind("click",function(event){
			event.stopPropagation();
		});
		item.bind("click",function(){
			$(this).toggleClass("is-selected");
			var text = $(this).html();
			var id = $(this).attr("data-id");
			$(this).parents(".js-select-other").find(".js-select-text").html(text);
			$(this).parents(".js-select-other").find(".js-select-input").val(id);
	 });
	};
	select();

	//click document
	$(document).click(function() {
		$('.js-select-other').removeClass('is-open');
	});

});
