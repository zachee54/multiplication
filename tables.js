var number1, number2;

function createQuestion() {
	number1 = createRandomNumber();
	number2 = createRandomNumber();
	$('#text1').html(number1);
	$('#text2').html(number2);
	
	enableSendButton();
	$('#answer').val('');
	$('#message').html('');
}

function createRandomNumber() {
	return Math.ceil(Math.random() * 10);
}

function checkAnswer() {
	var answer = parseInt($('#answer').val());
	if (!isNaN(answer)) {
		var solution = number1*number2;
		$('#message').html((answer == solution) ? 'Bravo !' : ('Désolé !<br/>La bonne réponse était ' + number1 + ' x ' + number2 + ' = ' + solution));
		
		enableSolutionButton();
	}
}

function enableSolutionButton() {
	$('#send').prop('disabled', true);
	$('#nouveau').show();
}

function enableSendButton() {
	$('#send').prop('disabled', false);
	$('#nouveau').hide();
}