
  function mol(){
      var soluto = parseFloat(document.getElementById('soluto').value);
      var solucion = parseFloat(document.getElementById('solucion').value);
      var resMola = (soluto/solucion) * 100;
      console.log(resMola);
      document.getElementById('resp').innerText = "Molaridad "+resMola.toFixed(2);
  }

$(document).ready(function() {
  function limpiar2(){
      document.getElementById('soluto').value = "";
      document.getElementById('solucion').value = "";
  }

  $('#bt-send').on('click',limpiar2,mol);

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
