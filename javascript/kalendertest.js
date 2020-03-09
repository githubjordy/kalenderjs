//var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);

var d = new Date(1994,5,14);
console.log(d);


console.log(d.getDate());
//console.log(d.getDay()); dag van de week
console.log(d.getFullYear());
console.log(d.getMonth());

console.log("///////////////////////////////////")



d.setDate(d.getDate()+1); //Sets the day of the month of a date object
console.log(d.getDate());

var z =new Date(2020, 3, 0).getDate();
console.log(z);
//console.log(d.setFullYear(d.getFullYear()));//Sets the year of a date object
//console.log(d.setMonth(d.getMonth())); //Sets the month of a date object





//////als referentie voor index php post
var x = document.getElementsByClassName("example");
  let i=0;
 
  while(true){

  //x[i].onclick = function(event) {alert(event.target.indexOf )};
  x[i].onclick=(function () {
  //let n =i
  return function () {let number = i;
  alert(number);
  return number;}
})();