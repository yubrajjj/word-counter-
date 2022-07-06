var textbox=document.getElementById("textbox");
textbox.addEventListener("input",function(){
var text=this.value;
text=text.trim();

var char=text.length;
let word=text.split(" ");


var cleanlist=word.filter(function(elm){
return elm !="";
});

console.log(word);
document.getElementById("char").innerHTML=char;
document.getElementById("word").innerHTML=cleanlist.length;


});