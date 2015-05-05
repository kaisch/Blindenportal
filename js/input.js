var currentElem = 0;
var frameDummy = "frame";
var divDummy = "df";

document.onkeydown = function(event) {
	if (event.keyCode == 13) 
	{//Enter wurde betätigt -> wie klick auf"Weiter"
		switch_(1);
	}
}

function initial()
{
	createButtons();
	var div_formular = document.getElementById("formular");
	div_formular.innerHTML += "<form id='formtest' name='formtest' method='GET' action='" + nextLink + "'></form>";
	var form_formtest = document.getElementById("formtest");		
	var audioTags = "";
	var entryFields = "";
	for (var i = 0; i < arr.length; i++)
	{	
		audioTags += '<audio id="' + arr[i][2] 
		+ '" src="http://translate.google.com/translate_tts?tl=de&q=' 
		+ arr[i][0] + '+' + arr[i][3] + '">Login</audio>';
		var typeString = 'type="text"';
		if(arr[i][1] == true)
		{
			typeString = 'type="password"';
		}
		entryFields += '<div class= "entrydiv hide" id="' 
		+ divDummy + i + '">' + arr[i][0] 
		+ '</br><input ' + typeString + ' class="entryfield" id="' 
		+ frameDummy + i + '" name="' + arr[i][0] 
		+ '" onfocus="play_label(\'' + arr[i][2] + '\')" onblur="stop_label(\'' 
		+ arr[i][2] + '\')"/></div>';
	}
	form_formtest.innerHTML += entryFields;
	content.document.body.innerHTML = audioTags + content.document.body.innerHTML;

	var elem = document.getElementById(divDummy + 0);
	removeClass(elem, "hide");	
	var elem = document.getElementById(frameDummy + 0);
	elem.focus();
}

function createButtons()
{
	content.document.body.innerHTML = '<button onclick="switch_(0)" class="bottomLeft case-button red" onmouseover="play_label(\'zurueck\')" onmouseout="stop_label(\'zurueck\')">Zurück</button>' + content.document.body.innerHTML;
	content.document.body.innerHTML = '<button onclick="switch_(1)" class="bottomRight case-button green" onmouseover="play_label(\'weiter\')" onmouseout="stop_label(\'weiter\')">Weiter</button>' + content.document.body.innerHTML;
	content.document.body.innerHTML = '<audio id="weiter" src="http://translate.google.com/translate_tts?tl=de&q=Weiter">Login</audio>' + content.document.body.innerHTML;
	content.document.body.innerHTML = '<audio id="zurueck" src="http://translate.google.com/translate_tts?tl=de&q=Zurueck">Login</audio>' + content.document.body.innerHTML;
}

function switch_helper(value)//value = 1 fur weiter oder -1 für zurück
{
	var elem = document.getElementById(divDummy + currentElem);
	addClass(elem, "hide");
	currentElem+=value;
	var nextElem = document.getElementById(divDummy + currentElem);
	removeClass(nextElem, "hide");

	var formular_ = document.getElementById(frameDummy + currentElem);
	formular_.focus();
}

function switch_(direction)//0 = last; 1 = next
{
	if(direction == 1)
	{
		if(currentElem < arr.length-1)
		{
			switch_helper(1);
		}
		else
		{
			document.forms["formtest"].submit();
		}
	}
	else
	{
		if(currentElem > 0)
		{
			switch_helper(-1);
		}
		else
		{
			openLink(lastLink);
		}
	}
}

function openLink(link)
{
	window.location.href = link;
}

function removeClass(ele,cls)
{
	if (hasClass(ele,cls)) 
	{
		var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
		ele.className=ele.className.replace(reg,' ');
	}
}

function addClass(elem, cls)
{
	elem.className += " " + cls;
}

function hasClass(element, cls) 
{
	return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function play_label(audioId) 
{
	document.getElementById(audioId).play();
}

function stop_label(audioId) 
{
	document.getElementById(audioId).pause();
	document.getElementById(audioId).load();
	console.log("stop audio")
}