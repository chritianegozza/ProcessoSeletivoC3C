/*Tipos de Triângulo
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: 

Equilátero: Os três lados são iguais.
Isósceles: Dois lados iguais.
Escaleno: Todos os lados são diferentes.

Crie um código JS que receba os comprimentos dos lados de um triângulo através de inputs e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo)
*/
const l1 = document.querySelector("#lado1");
const l2 = document.querySelector("#lado2");
const l3 = document.querySelector("#lado3");

function CalcularTriangulo(lado1, lado2, lado3){
    return lado1 / (lado2 * lado3);
}

Calcular();

const typeTriangle = (a, b, c) => {
    if (a < (b + c) && b < (a + c) && c < (a + b)) {
  
      if (a == b && b == c) {
        console.log('Triângulo equilátero');
      }
      else if (a == b || a == c || c == b) {
        console.log('Triângulo isóceles');
      }
      else {
        console.log('Triângulo escaleno');
      }
    }
    else {
      console.log('Nenhuma medida foi informada!');
    }
  
  }


