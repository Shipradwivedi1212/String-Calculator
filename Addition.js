function addition(str){
try{
    var total = 0;
    var ng = "";
    var x;
   for(var i=0;i< str.length;i++){
    x = str[i];
    if(parseInt(x)){
        if(str[i-1]=="-"){
            x= "-"+x;
        }
        if(parseInt(x)>0){
            total = total + parseInt(x);
        }
        else{
            ng = ng + " "+x.slice(1);
        }
        }
   }
   if(ng){
    throw (`negative numbers not allowed ${ng}`)
   }
   return total;
}
catch(e){
  console.log(e);
}
}
addition("////n");