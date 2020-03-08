

function BepaalBeginDatum(){

let begindatum = new Date();



if(begindatum.getDate()- 28<0){

    let subtract = begindatum.getDate();
    begindatum.setDate(begindatum.getDate()-subtract+1);
    begindatum.getDay();
   
    console.log(begindatum);
    console.log(begindatum.getDay());

    
   while(begindatum.getDay()!=1){
        
        console.log(begindatum.getDay());
        begindatum.setDate(begindatum.getDate()-1);
        console.log(begindatum);
    }
    console.log(begindatum);
}

else{
    begindatum =begindatum.setDate(begindatum.getDate()- 28);
}
 return begindatum;
}