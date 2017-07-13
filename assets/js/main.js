$(document).ready(function(){
	var cont = 1;
	
	$('.fotos').hide(); 
	$('.fotos:first').show(); 

	$('.right').click(siguiente);
	$('.left').click(atras);
 
  
	setInterval(function(){
		siguiente();
	}, 40000);

	function siguiente(){
		if( cont >= 3){
			cont = 1;
		} 
		else {
			cont++;
		}

		$('.fotos').hide(); 
		$('#img'+ cont).fadeIn(1000); 
		

	}

	function atras(){
		if( cont <= 1){
			cont = 3;
		} 
		else {
			cont--;
		}

		$('.fotos').hide(); 
		$('#img'+ cont).fadeIn(1000); 
	}

});