function mol(){
    var soluto = parseFloat(document.getElementById('soluto').value);
    var solucion = parseFloat(document.getElementById('solucion').value);
    var resMola = (soluto/solucion) * 100;
    console.log(resMola);
    document.getElementById('resp').innerText = "Molaridad "+resMola.toFixed(2);
}

function limpiar2(){
    document.getElementById('soluto').value = "";
    document.getElementById('solucion').value = "";
}

function limpiar(){
    $('#soluto').click(function(){
        $('input[type="text"]').val('');
    });
}



$( function() {
    $( "#tabs" ).tabs();
});
