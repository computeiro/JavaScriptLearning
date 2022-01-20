
//com o "use strict" esta linha dá erro
// Necessário declarar a variável com "var", "let" ou "const"
x = 10;


class Aluno{
    getNota(){
        return 5;
    }
}

//Aqui está correto, aluno foi declarado
var aluno = new Aluno();

//Aqu daria erro pois nota não está declarado na classse
aluno.nota = x;

//O tipo de atribuição acima causa esse tipo de divergência, o aluno possui "duas notas"
console.log("aluno.getNota(): " + aluno.getNota());
console.log("aluno.nota: " + aluno.nota);
