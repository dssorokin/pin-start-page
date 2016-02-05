$(document).ready(function() {

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	var state = false;

	if($(window).width() > 1200)
	{
		
		if(!$('.nav-menu ul').parent().hasClass('container'))
		{
			console.log('hi');
			state = true;
			$('.nav-menu ul').wrap("<div class='container'></div>");
			$('.nav-menu').css('backgroundColor','rgba(25,114,174,.8)');
			$('.nav-menu a').css('backgroundColor','transparent');
		}
	}

	$(window).resize(function(){

	if($(window).width() > 1200)
	{
		
		if(!state)
		{
			console.log('hi');
			state = true;
			$('.nav-menu ul').wrap("<div class='container'></div>");
			$('.nav-menu').css('backgroundColor','rgba(25,114,174,.8)');
			$('.nav-menu a').css('backgroundColor','transparent');
		}
	}

	else
	{
		if(state)
		{
			$('.nav-menu ul').unwrap();
			$('.nav-menu').css('backgroundColor','transparent');
			$('.nav-menu a').css('backgroundColor','rgba(25,114,174,.8)');
			state = false;
		}
	}

	});

	
	


	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
