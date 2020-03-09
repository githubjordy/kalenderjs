
let StartDate = new Date(2020,1,24);
//let StartDate = new Date(2019,11,24);
//let CurrentDate = new Date(2020,0,7);
let CurrentDate = new Date();
document.getElementById("openit").addEventListener("click",function(){
    this.style.display="none";
    document.getElementById("myform").style.display="none";
})
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementsByClassName("DateButton")[1].addEventListener("click",function(){next()});
document.getElementsByClassName("DateButton")[0].addEventListener("click",function(){previous()});
while(StartDate< CurrentDate){
 StartDate.setDate(StartDate.getDate()+28);


}

StartDate.setDate(StartDate.getDate()-28);

let WorkingDate =StartDate;

// all grid items
let items = document.getElementsByClassName("grid-item");
//document.getElementById("headertext").innerHTML = `Agenda ${WorkingDate.getFullYear()}`;
//document.getElementById("CurrentDateView").innerHTML= new Date().getMonth;



FirstOpen();
//next();


function FirstOpen(){
     
    for (i = 0; i < 28; i++) {

        items[i].onclick=(function () {
            let IndexOfElement =i
            return function () {let number = IndexOfElement;
            document.getElementById("openit").style.display = "block";
            document.getElementById("myform").style.display="block";
            alert(number);
            return number;}
          })();
  
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
   
    if(CurrentDate.getFullYear()!=WorkingDate.getFullYear()&& CurrentDate.getMonth()!=11){
        document.getElementById("headertext").innerHTML = `Agenda ${WorkingDate.getFullYear()}`;}
        else{
        document.getElementById("headertext").innerHTML = `Agenda ${CurrentDate.getFullYear()}`;}  
        
}
function previous(){

    WorkingDate.setDate(WorkingDate.getDate()-56);
    let contains=false;
    for (i = 0; i < 28; i++) {
       
        if(items[i].style.backgroundColor=="gray"){
            items[i].style.background = "rgba(255, 255, 255, 0.8)";
        }
       
       
        if(WorkingDate.getMonth()==CurrentDate.getMonth() && WorkingDate.getDate()==CurrentDate.getDate()
        && WorkingDate.getFullYear()==CurrentDate.getFullYear()){
            items[i].style.background = "gray";
            contains =true;
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
      
      if(contains){
        document.getElementById("headertext").innerHTML = `Agenda ${CurrentDate.getFullYear()}`;}  
       
     else{
        document.getElementById("headertext").innerHTML = `Agenda ${WorkingDate.getFullYear()}`;} 
        
        
}


function next(){
  let contains = false;
    for (i = 0; i < 28; i++) {


        if(items[i].style.backgroundColor=="gray"){
            items[i].style.background = "rgba(255, 255, 255, 0.8)";
        }
       
       
        if(WorkingDate.getMonth()==CurrentDate.getMonth() && WorkingDate.getDate()==CurrentDate.getDate()
        && WorkingDate.getFullYear()==CurrentDate.getFullYear()){
            items[i].style.background = "gray";
            contains =true;
        }
        if(WorkingDate.getMonth()!=CurrentDate.getMonth()||WorkingDate.getFullYear()!=CurrentDate.getFullYear()){
            items[i].style.color = "gray";
        }
        else{
            items[i].style.color = "black";
        }
        items[i].innerHTML= months[WorkingDate.getMonth()]+" " +WorkingDate.getDate();
        WorkingDate.setDate(WorkingDate.getDate()+1); 
        
     
      } 
      
      //debugger;
      if(contains){
        document.getElementById("headertext").innerHTML = `Agenda ${CurrentDate.getFullYear()}`;}  
       
     else{
        document.getElementById("headertext").innerHTML = `Agenda ${WorkingDate.getFullYear()}`;} 
        
      
}