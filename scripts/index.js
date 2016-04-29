$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
	$("#intro").click(function(){
		$("#pages").attr('src', 'pages/intro.html'); 
	});
	$("#minispill").click(function(){
		$("#pages").attr('src', 'pages/minispill.html'); 
	});
}); 