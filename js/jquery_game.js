$(document).ready(function() {
	
	$("#v").click(function() {
		$(this).addClass("appear");
	});

	$("#o").click(function() {
		$(this).addClass("appear");
	});

	$("#d").click(function() {
		$(this).addClass("appear");
	});

	$("#k").click(function() {
		$(this).addClass("appear");
	});

	$("#a").click(function() {
		$(this).addClass("appear");
	});
});

$(document).keydown(function(e) {
    switch(e.which) {
       case 32:
       $("#v").addClass("appear");
       $("#o").addClass("appear");
       $("#d").addClass("appear");
       $("#k").addClass("appear");
       $("#a").addClass("appear");
       break;
       default: return;
    }
    e.preventDefault();
});