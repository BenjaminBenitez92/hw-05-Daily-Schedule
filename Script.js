function currentTime() {
var time = moment().format("dddd, MMM Do, hh:mm:ss");
$("#currentDay" ).text(time);
}





var currentHour = parseInt(moment().format('H'))
$('.colorcode').each(function(){
    var val = parseInt($(this).prop('id'));
    if(val > currentHour && val < currentHour+6){
        $(this).css('background-color','Blue');
    }else if(val < currentHour && val > currentHour-6){
        $(this).css('background-color','Red');
    }else if(val === currentHour){
        $(this).css('background-color','Green');
    }else{
        $(this).css('background-color','gray');
    }
    console.log(currentHour)
});
 setInterval(currentTime, 1000);