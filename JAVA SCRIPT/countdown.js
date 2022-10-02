function countdown(){
    var countDown= Digits.value
    countDown--
    Digits.value = countDown
    
    if( countDown <= 0  ){
        // alert("stop")
    } 

}
function timer(){
    setTimeout( countdown,1000);
    // alert( "counting down")
}