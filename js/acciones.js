//JavaScript
	
$(document).ready(function(e){
	$('#principal1'). height($('#page1').height());//calcular el alto de la pantalla del dispositivo 	
	document.addEventListener("deviceready",function(){
		//precarga el sonido
		audio=window.plugins.LowLatencyAudio;
		audio.preloadFX('cebra','audio/selva/CEBRA.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('elefante','audio/selva/ELEFANTE.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('leon','audio/selva/LEON.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('puma','audio/selva/PUMA.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('tigre','audio/selva/TIGRE.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('zorro','audio/selva/ZORRO.mp3',function(){},function(e){alert('Error '+e);});
		//REPRODUCIR LAS NOTAS
		
		$('.animalin').bind('touchstart',function(){$(this).addClass('tocada');audio.play($(this).attr('id'));});
		
		$('.animalin').bind('touchend',function(){$(this).removeClass('tocada');});
		
   
	
	},false); //deviceready
});//ready