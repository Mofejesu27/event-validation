function myDate(){
    let date;
    let CurrentDate = document.getElementById('date');
 oldDate = new Date(CurrentDate.value)
  var newDate = new Date()
if(oldDate < newDate){
   date = 'Past Event'

}else if(oldDate == newDate){
    date = 'Today\'s Event'

}else{
    date ="Upcoming Event";
}

document.getElementById('datte').innerHTML=date;
}