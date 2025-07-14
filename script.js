let textbox=document.getElementById("textbox");
let toF=document.getElementById("toFarenheit");
let toC=document.getElementById("toCelsius");
let result=document.getElementById("result");
let temp;
function convert(){
if(toFarenheit.checked){
    temp=Number(textbox.value);
    temp=temp*9/5+32;
    result.textContent=temp.toFixed(1)+" F";

}
else if(toCelsius.checked){
    temp=Number(textbox.value);
    temp=(temp-32)*(5/9);
    result.textContent=temp.toFixed(1)+" C";
    

}
else{
    result.textContent="Please Select a Unit";
}
}