var currentElem = 0;

document.onkeydown = function(event) {
	if (event.keyCode == 13) 
	{//Enter wurde betätigt -> wie klick auf"Weiter"
		switch_(1);
	}
}
function initial()
{		
	var audioTags = "";
	var buttons = "";
	for (var i = 0; i < arr.length; i++) {    
		if (arr[i][3] == true) 
		{ 
			buttons += '<button class="case-button fixed button' + i + ' ' +arr[i][1]
			+ '" onmouseover="play_label(\''
			+ arr[i][4] + '\')" onmouseout="stop_label(\''
			+ arr[i][4] +'\')" onclick="openLink(\''
			+ arr[i][2] +'\')">' + arr[i][0] + '</button>';
		
			audioTags += '<audio id="' + arr[i][4] 
			+ '" src="http://translate.google.com/translate_tts?tl=de&q=' 
			+ arr[i][0] + '">Login</audio>';
		}
	}
	content.document.body.innerHTML = buttons + content.document.body.innerHTML;
	content.document.body.innerHTML = audioTags + content.document.body.innerHTML;
}

function openLink(link)
{
	window.location.href = link;
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