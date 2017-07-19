$( document ).ready(function() {


	function move(element, percentage) {
	  var elem = document.getElementById(element);   
	  var width = 1;
	  var id = setInterval(frame, 10);
	  function frame() {
	    if (width >= percentage) {
	      clearInterval(id);
	    } else {
	      width++; 
	      elem.style.width = width + '%'; 
	    }
	  }
	}

	$(".button-collapse").sideNav();

	$('.scrollspy').scrollSpy();

	var options = [{ selector:"#skills", offset: 10, callback: function(el) {          
      $(el).animate({'opacity':'1'},1500);
      move('javabar', 90);
      move('springframeworkbar', 75);
      move('springsecuritybar', 65);
      move('mulebar', 60);
      move('webservicesbar', 65);
      move('mavenbar', 90);
      move('gitbar', 80);
      move('mybatisbar', 85);
      move('oraclebar', 60);
      move('mysqlbar', 80);
      move('mongodbbar', 60);
      move('javascriptbar', 85);
      move('jquerybar', 80);
      move('backbonebar', 70);
      move('htmlbar', 90);
      move('materializebar', 90);
    }},
    { selector:"#confirmsign", offset: 10, callback: function(el) {         
      $(el).animate({'opacity':'1'},1500);
    }},
    { selector:"#udc", offset: 10, callback: function(el) {         
      $(el).animate({'opacity':'1'},2500);
    }},
    { selector:"#indra", offset: 10, callback: function(el) {         
      $(el).animate({'opacity':'1'},2500);
    }},
    { selector:"#aireuropa", offset: 10, callback: function(el) {         
      $(el).animate({'opacity':'1'},2500);
    }},
    { selector:"#optare", offset: 10, callback: function(el) {         
      $(el).animate({'opacity':'1'},2500);
    }},
    { selector:"#carrera", offset: 10, callback: function(el) {         
      $(el).animate({'opacity':'1'},2500);
    }},
    { selector:"#first", offset: 10, callback: function(el) {         
      $(el).animate({'opacity':'1'},2500);
    }},
    { selector:"#mongodb", offset: 10, callback: function(el) {         
      $(el).animate({'opacity':'1'},2500);
    }},
    { selector:"#mule", offset: 10, callback: function(el) {         
      $(el).animate({'opacity':'1'},2500);
    }},
    { selector:"#motivations", offset: 10, callback: function(el) {         
      $(el).animate({'opacity':'1'},2500);
    }},
    { selector:"#interests", offset: 10, callback: function(el) {         
      $(el).animate({'opacity':'1'},2500);
    }}];
	Materialize.scrollFire(options);
	
});