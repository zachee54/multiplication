var number1, number2;

function createQuestion() {
	number1 = createRandomNumber();
	number2 = createRandomNumber();
	setTextContent('text1', number1);
	setTextContent('text2', number2);
	
	enableSendButton();
	document.getElementById('answer').value = '';
	document.getElementById('message').innerHTML = '';
}

function createRandomNumber() {
	return Math.ceil(Math.random() * 10);
}

function setTextContent(id, text) {
	var node = document.getElementById(id);
	node.innerHTML = text;
}

function checkAnswer() {
	var answer = parseInt(document.getElementById('answer').value);
	if (!isNaN(answer)) {
		var messageNode = document.getElementById('message');
		var solution = number1*number2;
		messageNode.innerHTML = (answer == solution) ? 'Bravo !' : ('Désolé !<br/>La bonne réponse était ' + number1 + ' x ' + number2 + ' = ' + solution);
		
		enableSolutionButton();
	}
}

function enableSolutionButton() {
	document.getElementById('send').disabled = true;
	document.getElementById('nouveau').setAttribute('style', 'display:block');
}

function enableSendButton() {
	document.getElementById('send').disabled = false;
	document.getElementById('nouveau').setAttribute('style', 'display:none');
}