$(document).ready(function () {
	//$('body').awesomeCursor('pencil');
	$('#question1').hide();
	$('#question2').hide();
	$('#question3').hide();
	$('#question4').hide();
	$('#question5').hide();
	$('#score').hide();
	$('#option1SubmitButton').prop("disabled",true);
	$('#option2SubmitButton').prop("disabled",true);
	$('#option3SubmitButton').prop("disabled",true);
	$('#option4SubmitButton').prop("disabled",true);
	$('#option5SubmitButton').prop("disabled",true);

	var currQuestion = 0;
	var number = 10;
	var numCorrect = 0;
	var numWrong = 0;
	var counter;
	
	$('#start').on('click', function(){
		question1();
	});

	$('#reset').on('click', function(){
		window.location.reload();
	});

	function question1(){
		$('p').show();
		$('.currQuestion').replaceWith($( "#question1" ));
		$('#question2').hide();
		$('#question3').hide();
		$('#question4').hide();
		$('#question5').hide();
		$('#question1').show(500);
		$('#option1SubmitButton').prop("disabled",false);
		currQuestion = 1;
		run();
	};

	function question2(){
		$('p').show();
		$('.currQuestion').replaceWith($( "#question2" ));
		$('#question1').hide();
		$('#question3').hide();
		$('#question4').hide();
		$('#question5').hide();
		$('#question2').show(500);
		$('#option2SubmitButton').prop("disabled",false);
		currQuestion = 2;
		run();
	};

	function question3(){
		$('p').show();
		$('.currQuestion').replaceWith($( "#question3" ));
		$('#question1').hide();
		$('#question2').hide();
		$('#question4').hide();
		$('#question5').hide();
		$('#question3').show(500);
		$('#option3SubmitButton').prop("disabled",false);
		currQuestion = 3;
		run();
	};

	function question4(){
		$('p').show();
		$('.currQuestion').replaceWith($( "#question4" ));
		$('#question1').hide();
		$('#question2').hide();
		$('#question3').hide();
		$('#question5').hide();
		$('#question4').show(500);
		$('#option4SubmitButton').prop("disabled",false);
		currQuestion = 4;
		run();
	};

	function question5(){
		$('p').show();
		$('.currQuestion').replaceWith($( "#question5" ));
		$('#question1').hide();
		$('#question2').hide();
		$('#question3').hide();
		$('#question4').hide();
		$('#question5').show(500);
		$('#option5SubmitButton').prop("disabled",false);
		currQuestion = 5;
		run();
	};

	function run(){
        counter = setInterval(decrement, 1000);
    }

    function decrement(){
        number--;
        $('.timer').html(number);
        if (number === 0 && currQuestion == 1){
            stop();
            numWrong++;
            $('#option1SubmitButton').prop("disabled",true);
            question2();
        }else if(number === 0 && currQuestion == 2){
            stop();
            numWrong++;
            $('#option2SubmitButton').prop("disabled",true);
            question3();
        }else if(number === 0 && currQuestion == 3){
            stop();
            numWrong++;
            $('#option3SubmitButton').prop("disabled",true);            
            question4();
        }else if(number === 0 && currQuestion == 4){
            stop();
            numWrong++;
            $('#option4SubmitButton').prop("disabled",true);
            question5();
        }else if(number === 0 && currQuestion == 5){
            stop();
            $('#option5SubmitButton').prop("disabled",true);
            numWrong++;
            calculateScore();
        }
    }

    function stop(){
        clearInterval(counter);        
		number = 10;
    };

    function calculateScore(){
    	$('p').show();
    	$('.currQuestion').replaceWith($( "#score" ));
    	$('#question5').hide();
    	$('#score').show();
    	$('#playername').text($("#name").val());
    	$('#gamedate').text($("#date").val());
    	$('#correct').text(numCorrect);
    	$('#wrong').text(numWrong);
    	$('#yourscore').text((numCorrect / 5)*100 + "%");
    };

    $('#option1SubmitButton').on('click', function(){
		
		if (currQuestion == 1 && $('input[name=inlineRadioOptions1]:checked').val() === 'D') {
			numCorrect++;
			stop();
			$('#option1SubmitButton').prop("disabled",true);
			$('p').hide();
			$('#answers1').css('backgroundImage', 'url(assets/images/commcards.jpg)');
			setTimeout(question2, 2000);
		}else{
			numWrong++;
			stop();
			$('#option1SubmitButton').prop("disabled",true);
			question2();
		}
	});

	$('#option2SubmitButton').on('click', function(){
		stop();
		if (currQuestion == 2 && $('input[name=inlineRadioOptions2]:checked').val() === 'C') {
			numCorrect++;
			stop();
			$('#option2SubmitButton').prop("disabled",true);
			$('p').hide();
			$('#answers2').css('backgroundImage', 'url(assets/images/blinds.png)');
			setTimeout(question3, 2000);
		}else{
			numWrong++;
			stop();
			$('#option2SubmitButton').prop("disabled",true);
			question3();
		}
	});

	$('#option3SubmitButton').on('click', function(){
		stop();
		if (currQuestion == 3 && $('input[name=inlineRadioOptions3]:checked').val() === 'A') {
			numCorrect++;
			stop();
			$('#option3SubmitButton').prop("disabled",true);
			$('p').hide();
			$('#answers3').css('backgroundImage', 'url(assets/images/river.png)');
			setTimeout(question4, 2000);
		}else{
			numWrong++;
			stop();
			$('#option3SubmitButton').prop("disabled",true);
			question4();
		}
	});

	$('#option4SubmitButton').on('click', function(){
		stop();
		if (currQuestion == 4 && $('input[name=inlineRadioOptions4]:checked').val() === 'C') {
			numCorrect++;
			stop();
			$('#option4SubmitButton').prop("disabled",true);
			$('p').hide();
			$('#answers4').css('backgroundImage', 'url(assets/images/burncards.png)');
			setTimeout(question5, 2000);
		}else{
			numWrong++;
			stop();
			$('#option4SubmitButton').prop("disabled",true);
			question5();
		}
	});

	$('#option5SubmitButton').on('click', function(){
		stop();
		if (currQuestion == 5 && $('input[name=inlineRadioOptions5]:checked').val() === 'B') {
			numCorrect++;
			stop();
			$('#option5SubmitButton').prop("disabled",true);
			$('p').hide();
			$('#answers5').css('backgroundImage', 'url(assets/images/hammer.png)');
			setTimeout(calculateScore, 2000);
		}else{
			numWrong++;
			stop();
			$('#option5SubmitButton').prop("disabled",true);
			calculateScore();
		}
	});
});

