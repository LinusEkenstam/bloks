
// Playing around with Javascript, don't understand it all yet but trying to. 

$(document).ready(function() {

	console.log("Just plaing around with things. If your looking here, you'll notice that my .js skills are not superb");

	var win   = $(window);
	var doc   = $(document);
	var body  = $('body');
	var $self = $(this);

	$('.input').css('height', document.documentElement.clientHeight);
	
	 var button = Dropbox.createChooseButton({ 
		success: function (files) {
			var url = files[0].link;
			$.ajax({
				url: "/proxy.php?url=" + url
			}).done(function () {
				alert(JSON.stringify(arguments));
			})
		} 
	});
	document.getElementById("myDocs").appendChild(button); 

	//window.onbeforeunload=function(e){return "Are you sure you want to exit this node? All your work will be lost";}

});

/*
// BIND loses the rmenu, changes to HIDE on movement.   
$(document).bind("click", function(event) {
        document.getElementById("rmenu").className = "hide";
    });



function mouseX(evt) {
    if (evt.pageX) {
        return evt.pageX;
    } else if (evt.clientX) {
       return evt.clientX + (document.documentElement.scrollLeft ?
           document.documentElement.scrollLeft :
           document.body.scrollLeft);
    } else {
        return null;
    }
}

function mouseY(evt) {
    if (evt.pageY) {
        return evt.pageY;
    } else if (evt.clientY) {
       return evt.clientY + (document.documentElement.scrollTop ?
       document.documentElement.scrollTop :
       document.body.scrollTop);
    } else {
        return null;
    }
} 
*/


// Saving to Local WEB HTML5 DB. 

window.saveMyDoc = function() {
    var name = document.getElementById("name").value;
    var content = document.getElementById("content").innerHTML;
    localStorage.setItem(name, content);
}


window.loadMyDoc = function () {
    var name = document.getElementById("name").value;
    document.getElementById("content").innerHTML = localStorage.getItem(name);
}
    
    

// Toggle night mode. 
var mode = function() {
	$('html').toggleClass('night');
}


// Toggle text-elignment.
var align = function(align) {
	if (align == 'justify') {
		$('#main').css('text-align', 'justify');
	}
	if (align == 'left') {
		$('#main').css('text-align', 'left');
	}
	if (align == 'right') {
		$('#main').css('text-align', 'right');
	}
}


// Toggle the possibility to do spellcheck.
function ToggleSpellCheck () {
    var area = document.getElementById ("spellcheck");

    if ('spellcheck' in area) {
        area.spellcheck = !area.spellcheck;
    } else {
        alert ("Your browser doesn't support this example!");
    }
}

// Changing fonts. 
var font = function(sel) {
	var value = sel.value;  

   	switch(value) {
   		case "0":
        	document.getElementsByTagName('body')[0].className = 'avenir';
        	break;

    	case "1":
       		document.getElementsByTagName('body')[0].className = 'avenir';
        	break;

        case "2":
       		document.getElementsByTagName('body')[0].className = 'helvetica';
        	break;

        case "3":
       		document.getElementsByTagName('body')[0].className = 'helvetica-neue';
        	break;

    	default:
       		document.getElementsByTagName('body')[0].className = 'avenir';
   	}
}

// Toggle fullscreen.
var fullscreen = function(id) {
	var element = document.getElementById(id);
    
	if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} 

	else if (element.webkitRequestFullScreen) {
		element.webkitRequestFullScreen(element.ALLOW_KEYBOARD_INPUT);
	}

	else {
		alert("Your broswer doesn't support this fullscreen-shit.")
	}
 }
 
