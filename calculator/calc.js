const display=document.getElementById("display")

function appendval(x){
   display.value+=x;
}

function cleardisplay(){
   display.value="";
}
function calculate(){
    try{
         display.value=eval(display.value);
    }
    catch(error){
          display.value="Error";
    };
    
}