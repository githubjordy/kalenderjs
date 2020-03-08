
let StartDate = new Date(2020,1,24);
let CurrentDate = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementsByClassName("DateButton")[1].addEventListener("click",function(){next()});
document.getElementsByClassName("DateButton")[0].addEventListener("click",function(){previous()});
/*while(StartDate< CurrentDate){
 StartDate.setDate(StartDate.getDate()+28);


}

StartDate.setDate(StartDate.getDate()-28);*/
let WorkingDate =StartDate;

// all grid items
let items = document.getElementsByClassName("grid-item");
document.getElementById("headertext").innerHTML = `Agenda ${WorkingDate.getFullYear()}`;
//document.getElementById("CurrentDateView").innerHTML= new Date().getMonth;



FirstOpen();
//next();


function FirstOpen(){
     
    for (i = 0; i < 28; i++) {
        
        if(WorkingDate.getMonth()==0 && WorkingDate.getDate()==1){
            document.getElementById("headertext").innerHTML = `Agenda ${WorkingDate.getFullYear()}`;
        }

        if(WorkingDate.getMonth()==CurrentDate.getMonth() && WorkingDate.getDate()==CurrentDate.getDate()
        && WorkingDate.getFullYear()==CurrentDate.getFullYear()){
            
            items[i].style.background = "gray";
        };
        if(WorkingDate.getMonth()!=CurrentDate.getMonth()){
            items[i].style.color = "gray";
        }
        else{
            items[i].style.color = "black";
        }
        items[i].innerHTML= months[WorkingDate.getMonth()]+" " +WorkingDate.getDate();
        WorkingDate.setDate(WorkingDate.getDate()+1);   
     
    } 

}
function previous(){

    WorkingDate.setDate(WorkingDate.getDate()-56);

    for (i = 0; i < 28; i++) {
        console.log(WorkingDate.getMonth());
        console.log(WorkingDate.getDate());
        if(WorkingDate.getMonth()==11 && WorkingDate.getDate()==4){
            document.getElementById("headertext").innerHTML = `Agenda ${WorkingDate.getFullYear()}`;
        }

        if(items[i].style.backgroundColor=="gray"){
            items[i].style.background = "rgba(255, 255, 255, 0.8)";
        }
       
       
        if(WorkingDate.getMonth()==CurrentDate.getMonth() && WorkingDate.getDate()==CurrentDate.getDate()
        && WorkingDate.getFullYear()==CurrentDate.getFullYear()){
            items[i].style.background = "gray";
        }
        if(WorkingDate.getMonth()!=CurrentDate.getMonth()||WorkingDate.getFullYear()!=CurrentDate.getFullYear()){
            items[i].style.color = "gray";
        }
        else {
            items[i].style.color = "black";
        }
        items[i].innerHTML= months[WorkingDate.getMonth()]+" " +WorkingDate.getDate();
        WorkingDate.setDate(WorkingDate.getDate()+1);
        
        
     
     
      } 
}


function next(){
  
    for (i = 0; i < 28; i++) {


        if(WorkingDate.getMonth()==0 && WorkingDate.getDate()==1){
            document.getElementById("headertext").innerHTML = `Agenda ${WorkingDate.getFullYear()}`;
        }

        if(items[i].style.backgroundColor=="gray"){
            items[i].style.background = "rgba(255, 255, 255, 0.8)";
        }
       
       
        if(WorkingDate.getMonth()==CurrentDate.getMonth() && WorkingDate.getDate()==CurrentDate.getDate()
        && WorkingDate.getFullYear()==CurrentDate.getFullYear()){
            items[i].style.background = "gray";
        }
        if(WorkingDate.getMonth()!=CurrentDate.getMonth()||WorkingDate.getFullYear()!=CurrentDate.getFullYear()){
            items[i].style.color = "gray";
        }
        else{
            items[i].style.color = "black";
        }
        items[i].innerHTML= months[WorkingDate.getMonth()]+" " +WorkingDate.getDate();
        WorkingDate.setDate(WorkingDate.getDate()+1); 
        
       

       /* console.log(WorkingDate);
        WorkingDate.setDate(WorkingDate.getDate()+1);     
        if(WorkingDate.getDate()==CurrentDate.getDate()){
            console.log("yes");
        };*/
        
     
     
      } 
}