// console.log("Hello World")

// COMENTÁRIO DE UMA LINHA
/**
 * ASDS
 * ASD\ZX\ZX
 * \X\ZX\X\ZX
 */

// VARIÁVEIS
//LET - variável que varia
let fruta = "Maçã"
fruta = "Morango"
// console.log(fruta)

//CONST - variável constante
const docePreferidoMaria = "Sorvete de Chiclete"
// docePreferidoMaria = "Nutella" - não pode redeclarar!!
// console.log(docePreferidoMaria)


// TIPOS DE DADOS
//STRING
let diaDeHoje = "27 de julho de 2022"

//NUMBER
let dia = 27

//BOOLEAN OU BOOLEANO
let serProgramadorEm2022 = true
let churrosEhRuim = false 

//ARRAY 
let listaDeCompras = ["maçã", "alface", "sorvete de chiclete"]
let listaAleatoria = [1, true, "oi", [1, 3, 4]]

//console.log(listaAleatoria[0]) //acessar o primeiro elemento do array
//console.log(listaDeCompras[2])

// console.log(listaDeCompras.length) // .length serve para verificar o comprimento do array

listaDeCompras.push("Chocolate") // adicionar elementos em um array
// console.log(listaDeCompras)


//OBJETO
/**
 * modelando um bolo
 * 
 * - sabor
 * - recheio
 * - cobertura
 */


let bolo = {
    sabor: "Chocolate",
    recheio: "Leite Ninho",
    cobertura: "Brigadeiro",
    preco: 20,
    gostoso: true
}

// console.log(bolo)
// console.log(bolo.sabor) => acessando chave específica

// bolo['nome da chave'] = valor

bolo['confeitaria'] = "Doce Muito Bom Confeitaria"

// console.log(bolo)

// OPERADORES LÓGICOS
/**
 *  === Estritamente igual => verifica se os valores são iguais e do mesmo tipo.
 */

//Ex: 
let exemploA = 10
let exemploB = "10"
let exemploC = 20
let exemploD = 10

/**
    exemploA === exemploB => false
    exemploA === exemploD => true
*/

/*
* == Igualdade => avalia se os valores são iguais, independente de tipo. 
*/

//exemploA == exemploB => true
//exemploA == exemploC => false

/**
 * !== Não Idêntico => avalia se os valores E os tipos são diferentes (inverso do estritamente igual)
 */

/*
exemploA !== exemploB => true
exemploA !== exemploD => false
*/

/**
 * != Diferente => avalia se os valores são diferentes, independente de tipo de dado
 */

 /**
  * < Menor que
  * > Maior que
  * <= Menor ou igual
  * >= Maior ou igual 
  */

 /**
  * TABELA VEDADE
  * 
  * && => E
  *     TRUE && TRUE    => TRUE
        FALSE && TRUE   => FALSE
        TRUE && FALSE   => FALSE
        FALSE && FALSE  => FALSE
    
    || => OU
        TRUE || TRUE    => TRUE
        TRUE || FALSE   => TRUE
        FALSE|| TRUE    => TRUE
        FALSE|| FALSE   => FALSE
  */

// ESTRUTURA CONDICIONAL
/**
 * se chover
 * vou ver série
 * 
 * se não chover
 * vou pra praia
 */

let chuva = false
let neve = false

if (chuva === true) {
    console.log("Vou ver B99")
} else if (neve === true) {
    console.log("Tomar um chocolate quente!")
}else {
    console.log("Vou pra praia bb")
}

/*
if (condição) {
    código a ser executado
}
*/