/**,
 * Questão 02 - Bhaskara
Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore um método em JS cujo objetivo é resolver a fórmula de Bhaskara. 

Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. 

Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais.

Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”.
 */


var ax2 = prompt("Informe o valor de A:");
		var bx = prompt("Informe o valor de B:");
		var c = prompt("Informe o valor de C:");
		var coeficiente1;
		var coeficiente2;

		var delta = (bx * bx) - 4 * ax2 * c;

		document.write("Valor de Delta => " + delta + "<br/><br/>");

		if(delta < 0){
		  document.write("Delta é negativo. <br/>");  
		} else{
		  
		  document.write("Para Delta positivo, raízes diferentes: <br/>");  
		  
		  coeficiente1 = (-bx+ Math.sqrt(delta)) / (2 * ax2);
		  coeficiente2 = (-bx - Math.sqrt(delta)) / (2 * ax2);
		  
		  document.write("x' = " + coeficiente1 + "<br/>");
		  document.write("x'' = " + coeficiente2 + "<br/>");
		}
