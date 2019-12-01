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
//Limpiar entradas de porcentage masa masa
function limpiar3(){
    document.getElementById('solutoMM').value = "";
    document.getElementById('solucionMM').value = "";
    console.log('Limpiar ready');
}
//Funcion para Porecentage masa masa
function masaMasa(){
    var soluto1 = parseFloat(document.getElementById('solutoMM').value);
    var solvente1 = parseFloat(document.getElementById('solucionMM').value);
    var solucionSuma = soluto1 + solvente1;
    var resMM = (soluto1/solucionSuma) * 100;
    console.log(resMM);
    console.log("Porcentaje masa masa ready");
    if(isNaN(resMM)){
        document.getElementById('respMM').innerText = "Ingresa valores ";
    }else{
        document.getElementById('respMM').innerText = "% m/m "+resMM.toFixed(2);
    };
    limpiar3();
}
function limpiar4(){
    document.getElementById('solutoMV').value = "";
    document.getElementById('disolucionMV').value = "";
    console.log('Limpiar ready');
}
//Funcion para Porcentage masa volumen
function masaVol(){
    var soluto2 = parseFloat(document.getElementById('solutoMV').value);
    var disolucion = parseFloat(document.getElementById('disolucionMV').value);
    var resMV = (soluto2/disolucion) * 100;
    console.log(resMV);
    console.log("Porcentaje Masa Volumen ready");
    if(isNaN(resMV)){
        document.getElementById('respMV').innerText = "Ingresa valores ";
    }else{
        document.getElementById('respMV').innerText = "% m/v "+resMV.toFixed(2);
    };
    limpiar4();
}
//Funcion para limpiar entradas de Normalidad
function limpiar5(){
    document.getElementById('gramosSN').value = "";
    document.getElementById('equivN').value = "";
    document.getElementById('pesoN').value = "";
    document.getElementById('solventeN').value = "";
    console.log('Limpiar ready');
}
//Funcion para Normalidad
function normalidad(){
    var gSoluto = parseFloat(document.getElementById('gramosSN').value);
    var equiv = parseFloat(document.getElementById('equivN').value);
    var pMole = parseFloat(document.getElementById('pesoN').value);
    var solvNor = parseFloat(document.getElementById('solventeN').value);
    var resNor = (gSoluto * 1000 * equiv) / (pMole * solvNor);
    console.log(resNor);
    console.log("Normalidad ready");
    if(isNaN(resNor)){
        document.getElementById('respNor').innerText = "Ingresa valores ";
    }else{
        document.getElementById('respNor').innerText = "Normalidad "+resNor.toFixed(2);
    };
    limpiar5();
}
//Funcion para limpiar imputs de moles a gramos
function limpiarG(){
    document.getElementById('Moles').value = "";
    document.getElementById('pMolecular').value = "";
    console.log('Limpiar ready');
}
//Funcion para convertir moles a gramos
function molesTog(){
    var moles1 = parseFloat(document.getElementById('Moles').value);
    var pMol = parseFloat(document.getElementById('pMolecular').value);
    var resGramos = (moles1 * pMol) / 1;
    console.log(resGramos);
    console.log("Moles to gramos ready");
    if(isNaN(resGramos)){
        document.getElementById('respG').innerText = "Ingresa valores ";
    }else{
        document.getElementById('respG').innerText = resGramos.toFixed(2)+ " g";
    };
    limpiarG();
}
//Funcion para limpiar los imputs de gramos a moles
function limpiarM(){
    document.getElementById('gramosF').value = "";
    document.getElementById('pMolecular2').value = "";
    console.log('Limpiar ready');
}
//Funcion para convertir de gramos a moles
function gramosToMol(){
    var gramosFor = parseFloat(document.getElementById('gramosF').value);
    var pMol2 = parseFloat(document.getElementById('pMolecular2').value);
    var resMoles = (gramosFor * 1) / pMol2;
    console.log(resMoles);
    console.log("Gramos to Moles ready");
    if(isNaN(resMoles)){
        document.getElementById('respMoles').innerText = "Ingresa valores ";
    }else{
        document.getElementById('respMoles').innerText = resMoles.toFixed(2)+ " Moles";
    };
    limpiarM();
}


$(document).ready(function() {

  $( function() {
      $( "#tabs-1" ).tabs();
  });

  $( function() {
      $( "#tabs-2" ).tabs();
  });

  $( function() {
<<<<<<< HEAD
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
=======
      $( "#tb1" ).tabs();
  });

  $( function() {
      $( "#tb2" ).tabs();
  });

  $( function() {
      $( "#tb3" ).tabs();
  });


>>>>>>> gh-pages
});
