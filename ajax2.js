$(document).ready(function() {
	$("#boton_text").click(function(){
		$.ajax({
			type: "GET",
			url: "frase.txt",
			cache: false
	    }).done(function( text ) {
			$("#uno").html(text);
	    });

	});
   
});