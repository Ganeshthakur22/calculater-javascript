 let result=document.getElementById("inputtext")

 
 let Calculate = (number)=>{
result.value+=number;
 }

 let Result=()=>{
try{
   result.value=eval(result.value)
}
catch(err){
   alert("enter the valid")
}
 }



function clr (){
   result.value=" ";
}
function del (){
   result.value=result.value.slice(0,-1);
}