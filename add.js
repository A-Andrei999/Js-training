var imputCalc = document.querySelector('.histori');
    resultCalc = document.querySelector('.output');


function imput(i) {
   imputCalc.value = imputCalc.value + i;
}

function result() {
   if( eval(imputCalc.value) == undefined){
      resultCalc.value = "0";
      imputCalc.value ="0";
   } if( eval(imputCalc.value) == Infinity){
      resultCalc.value = "0";
      imputCalc.value ="You cannot divide by zero";
   }
   resultCalc.value = eval(imputCalc.value);
   imputCalc.value = eval(imputCalc.value);
}

function backspace() {
   imputCalc.value = imputCalc.value.substring(0, imputCalc.value.length-1 )
}

function reset() {
   resultCalc.value = "0";
   imputCalc.value ="0";
}
