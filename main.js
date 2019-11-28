//Funcion para limpiar los imputs molaridad
function limpiar1(){
    document.getElementById('soluto').value = "";
    document.getElementById('solucion').value = "";
    console.log('Limpiar ready');
}
//Funcion de molaridad
function molaridad(){
    var soluto = parseFloat(document.getElementById('soluto').value);
    var volM = parseFloat(document.getElementById('solucion').value);
    var resMola = (soluto/volM);
    console.log("Molaridad ready");
    if(isNaN(resMola)){
        document.getElementById('resp').innerText = "Ingresa valores";
    }else{
        document.getElementById('resp').innerText = "Molaridad "+resMola.toFixed(2);
    };
    limpiar1();
}
//Limpiar los imput de molalidad
function limpiar2(){
    document.getElementById('solutoMola').value = "";
    document.getElementById('entryKg').value = "";
    console.log('Limpiar ready');
}
//Funcion de molalidad
function molalidad(){
    var solutoMolali = parseFloat(document.getElementById('solutoMola').value);
    var varKg = parseFloat(document.getElementById('entryKg').value);
    var resMolali = (solutoMolali/varKg);
    console.log(resMolali);
    console.log("Molalidad ready");
    if(isNaN(resMolali)){
        document.getElementById('respMolalidad').innerText = "Ingresa valores ";
    }else{
        document.getElementById('respMolalidad').innerText = "Molalidad "+resMolali.toFixed(2);
    };
    limpiar2();
}

function masaMasa(){
    var soluto1 = parseFloat(document.getElementById('solutoMM').value);
    var solucion1 = parseFloat(document.getElementById('solucionMM').value);
    var solucionSuma = soluto1 + solucion1;
    var resMMsuma = (soluto1/solucionSuma) * 100;
    console.log(resMMsuma);
    console.log("Molalidad ready");
    if(isNaN(resMolali)){
        document.getElementById('respMolalidad').innerText = "Ingresa valores ";
    }else{
        document.getElementById('respMolalidad').innerText = "Molalidad "+resMMsuma.toFixed(2);
    };
    limpiar2();
}




$(document).ready(function() {

  $( function() {
      $( "#tabs-1" ).tabs();
  });

  $( function() {
      $( "#tabs-2" ).tabs();
  });

  $( function() {
      $( "#tb1" ).tabs();
  });

  $( function() {
      $( "#tb2" ).tabs();
  });

  $( function() {
      $( "#tb3" ).tabs();
  });

});
