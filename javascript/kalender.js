
let StartDate = new Date(2020,1,24);
let DaysInMonth =new Date(2020, 2, 0).getDate();

let NextDate;
let CurrentDate = StartDate;
let DaysLeftInMonth = DaysInMonth- StartDate.getDate();


//var today = new Date();
//if(StartDate.setDate(CurrentDate.getDate()+28)>today){
   // console.log("yes");
    // set javascript class
//}


MakeMonthCalender();


function MakeMonthCalender(){

for (i = 0; i < 28; i++) {


    DoStuff();
 
 
  } 

}



function DoStuff(){

    if(DaysLeftInMonth>0){   
    
    console.log(DaysLeftInMonth);
    
    CurrentDate.setDate(CurrentDate.getDate()+1);

    DaysLeftInMonth= DaysLeftInMonth - 1; 
   
    console.log(CurrentDate);
    
    return;

    }
  
    console.log("////////////////////////////////////////////")
    if(CurrentDate.getMonth()==11){          
        CurrentDate.setDate(1);
        CurrentDate.setMonth(0);
        CurrentDate.setFullYear(CurrentDate.getFullYear()+1);
        DaysLeftInMonth =new Date(CurrentDate.getFullYear(), CurrentDate.getMonth()+1, 0).getDate() -1;
        console.log(" executed");
        console.log(CurrentDate);     
        return;

    }
 
    CurrentDate.setDate(1);
    CurrentDate.setMonth(CurrentDate.getMonth()+1);
    
    console.log(CurrentDate);
    DaysLeftInMonth =new Date(CurrentDate.getFullYear(), CurrentDate.getMonth()+1, 0).getDate() -1;

}

