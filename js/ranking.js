function calcularJog1(){
    var valor1 = parseInt(document.getElementById('aves1').value, 10);
    var valor2 = parseInt(document.getElementById('cartasBonus1').value, 10);
    var valor3 = parseInt(document.getElementById('objFinal1').value, 10);
    var valor4 = parseInt(document.getElementById('ovos1').value, 10);   
    var valor5 = parseInt(document.getElementById('comidas1').value, 10);
    var valor6 = parseInt(document.getElementById('cartasEmbaixo1').value, 10);   
    document.getElementById('total1').value = valor1 + valor2 + valor3 + valor4 + valor5 + valor6;
}

function calcularJog2(){
    var valor1 = parseInt(document.getElementById('aves2').value, 10);
    var valor2 = parseInt(document.getElementById('cartasBonus2').value, 10);
    var valor3 = parseInt(document.getElementById('objFinal2').value, 10);
    var valor4 = parseInt(document.getElementById('ovos2').value, 10);   
    var valor5 = parseInt(document.getElementById('comidas2').value, 10);
    var valor6 = parseInt(document.getElementById('cartasEmbaixo2').value, 10);
    document.getElementById('total2').value = valor1 + valor2 + valor3 + valor4 + valor5 + valor6;
}