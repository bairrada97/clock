var now = new Date();
var days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
var months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];


function showTime(){
	now = new Date();
	$('.clock__hours').text( addLeadingZero(now.getHours()) );
	$('.clock__minutes').text( addLeadingZero(now.getMinutes()) );
	$('.clock__seconds').text( addLeadingZero(now.getSeconds()) );
	$('.clock__date').text( addLeadingZero(now.getDate()) );
	$('.clock__day').text( days[ now.getDay() ] );
	$('.clock__month').text( months[ now.getMonth() ] );
}	

function addLeadingZero(val){

	if (val < 10) {
		return '0' + val;
	}

	return val;

}

setInterval(function(){
	showTime();
}, 100);
