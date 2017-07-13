$(document).ready(function(){
	var cont = 1;
	
	$('.fotos').hide(); 
	$('.fotos:first').show(); 
	$('.fa-circle:first').css({'color': '#60B99A'});

	$('.right').click(siguiente);
	$('.left').click(atras);
	$('.fa-circle').click(paginacion);
 
  
	setInterval(function(){
		siguiente();
	}, 6000);

	function siguiente(){
		if( cont >= 5){
			cont = 1;
		} 
		else {
			cont++;
		}

		$('.fotos').hide(); 
		$('#img'+ cont).fadeIn(1000); 

		$('.fa-circle').css({'color': 'white'});
		$('#cir'+ cont).css({'color': '#60B99A'});
		
	}

	function atras(){
		if( cont <= 1){
			cont = 5;
		} 
		else {
			cont--;
		}

		$('.fotos').hide(); 
		$('#img'+ cont).fadeIn(1000); 

		$('.fa-circle').css({'color': 'white'});
		$('#cir'+ cont).css({'color': '#60B99A'});
	}

	function paginacion(){
		var circuloID = $(this).index() + 1; 
		console.log(circuloID);
		$('.fotos').hide(); 
		$('#img'+ circuloID).fadeIn(1000); 

		$('.fa-circle').css({'color': 'white'});
		$(this).css({'color': '#60B99A'});

		cont = circuloID;

	}

});