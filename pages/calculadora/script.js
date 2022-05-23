
function simulador()
{
   // chamadas do DOM

   let simuladorRangeDom = document.querySelector('#simulador-range').value
   let demoDom = document.querySelector('#fatura-mensal-do-usuario')

   let EconomiaMensalDoUsuárioDom = document.querySelector('#economia-mensal-do-usuario')
   let EconomiaAnualDoUsuárioDom = document.querySelector('#economia-anual-do-usuario')
   let co2EvitadoDom = document.querySelector('#co2-evitado')
   let arvoresSalvasDom = document.querySelector('#arvores-salvas')

   
   /* área de calculo */
   let faturaMensalDoUsuario = (parseFloat(simuladorRangeDom).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));

   let economiaMensalEstimada = (parseFloat(simuladorRangeDom*0.95).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));

   
   let economiaAnualEstimada = economiaMensalEstimada*12
   let co2Evitado = faturaMensalDoUsuario*1000
   let arvoresSalvas = co2Evitado/500

   /* criação e exibição dos elementos de resultado  */

   demoDom.innerHTML = 
   `Minha fatura mensal é: ${faturaMensalDoUsuario}`

   EconomiaMensalDoUsuárioDom.innerHTML = 
   `Economia mensal estimada ${economiaMensalEstimada}`

   EconomiaAnuallDoUsuárioDom.innerHTML = 
   `Economia anual estimada  ${economiaAnualEstimada}`

   co2EvitadoDom.innerHTML = 
   `Toneladas de emissão Evitadas (t co2/mês)${co2Evitado} tCO2`

   arvoresSalvasDom.innerHTML = 
   `Árvores salvas (unidades/mês)${arvoresSalvas}`
}

// BC Energia
/*
if($("#simulador-range").length > 0)
{
   var slider = document.getElementById("simulador-range");
   var output = document.getElementById("demo");
   output.innerHTML = slider.value;

   slider.oninput = function() {
     output.innerHTML = this.value;
     $(".valor-fatura-mensal").text(parseFloat(slider.value).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));

      //VARIÁVEIS PARA O CALCULO
      var i = parseFloat(0.80311);
      var ii = parseFloat(12.00);
      var iii = parseInt(20);
      var iv = parseFloat(0.0755);
      var vi = parseFloat(12.48);
      var vii = $("#demo").text();
      var e = (vii - ii)/(i);
      //END VARIÁVEIS

      var economiaMensalEstimada = parseInt((vii - ii)*(iii)).toString();

      var economiaMensalEstimada2 = economiaMensalEstimada.length - 2;

      var economiaMensalEstimada3 = economiaMensalEstimada.slice(0, economiaMensalEstimada2) + "." + economiaMensalEstimada.slice(-2);

      var economiaMensalEstimada4 = parseFloat(economiaMensalEstimada3).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

      var economiaAnualEstimada = economiaMensalEstimada3*12;

      var economiaAnualEstimada2 = parseFloat(economiaAnualEstimada).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

      var toneladasEmissaoEvitadas = (e/1000)*(iv);
      
      var arvoresSalvas = (vi/12)*(toneladasEmissaoEvitadas*1000);

      $(".economia-mensal-estimada").text(economiaMensalEstimada4);
      $(".economia-anual-estimada").text(economiaAnualEstimada2);
      $(".toneladas-emissao-evitadas").text(toneladasEmissaoEvitadas.toFixed(3) + " tCO2");
      $(".arvores-salvas").text(Math.ceil(arvoresSalvas));
   }
}*/