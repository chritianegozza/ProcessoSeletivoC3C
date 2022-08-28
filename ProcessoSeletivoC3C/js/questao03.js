/*
 Questão 03 - Sistema de Notas
Construa um código JS que receba uma valor através de um input para um sistema de notas de uma instituição que possui a seguinte política de classificação: 

* Todo aluno recebe uma nota de 0 a 100. 
* Alunos com nota abaixo de 40 são reprovados. 
* As notas possuem a seguinte regra de arredondamento: 
	* Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5. 
	* Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno. 

Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno. 
No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado.
*/



//Colocando os input para o js

const nota1 = document.querySelector("#nota1");
const nota2 = document.querySelector("#nota2");
const resultado = document.querySelector("#resultado");
const btn = document.querySelector("#calcularMedia");
const primeiraNota = document.querySelector("#primeiraNota");
const segundaNota = document.querySelector("#segundaNota");


//evento do cick do botão


btn.addEventListener('click', updateBtn);

function updateBtn() {
   if (btn.textContent === 'Iniciar máquina') {
       btn.textContent = 'Parar máquina';
       nota1.textContent = 'A máquina iniciou!';
   } else {
       btn.textContent = 'Iniciar máquina';
       nota2.textContent = 'A máquina está parada.';
   }
}





//Calculo da média
/*const media  = (valor1, valor2) => {
    valor1 = Number.parseFloat(valor1);
    valor2 = Number.parseFloat(valor2);
    return (valor1+valor2)/2;

}*/



media = (n1 + n2 + n3)/3 ; 

if ( media >= 60 ) {
document.write ("Aprovado");

} else {

if ( media <= 40 ) {
document.write ("Reprovado");

} else {

document.write ("Recuperação");
}}


