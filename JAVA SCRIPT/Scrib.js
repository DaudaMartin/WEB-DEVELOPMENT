function checkAdmission(){
     a = input1.value
     b = input2.value
     c = input3.value
    if( c >= 30 && c<40 )
    {alert("GRADE IS F9 Failed ! Admission Denied")}
    else if ( c<0){
        alert( "Invalid Input")
    }
    else if( c>100){
        alert( "Invalid Input")
    }
     else if( c>=40 && c<=45)
    {alert(" Your Score is Average")}
     else if( c>45 && c<=49)
    {alert( " GRADE IS D No Admission Offered Yet" )}
     else if( c>49 && c<=59)
    {alert("GRADE IS B Admission is in Progress")}
     else if( c>59 && c<=69)
    {alert( " Congratulation Admission offered")}
    else if ( c>69){
        alert( " Excellent, Congratulation You have been Offered Admission")
    }}
   function startcount(){
       startcount (checkAdmission, 1000)
   }
