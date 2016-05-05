//JavaScript
	
$(document).ready(function(e){
	$('#principal2'). height($('#page2').height());//calcular el alto de la pantalla del dispositivo 	
	document.addEventListener("deviceready",function(){
		//precarga el sonido
		audio=window.plugins.LowLatencyAudio;
		audio.preloadFX('bur','audio/granja/BUR.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('gal','audio/granja/GAL.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('cab','audio/granja/CAB.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('ove','audio/granja/OVE.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('pat','audio/granja/PAT.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('tor','audio/granja/TOR.mp3',function(){},function(e){alert('Error '+e);});
		//REPRODUCIR LAS NOTAS
		
		$('.animalin').bind('touchstart',function(){$(this).addClass('tocada');audio.play($(this).attr('id'));});
		
		$('.animalin').bind('touchend',function(){$(this).removeClass('tocada');});
		
   
	
	},false); //deviceready
});//ready