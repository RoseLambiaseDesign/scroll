//nomeCompleto: `${this.nome} ${this.sobrenome}`

/*Uma função JavaScript é um bloco de código projetado
 para executar uma tarefa específica.

Uma função JavaScript é executada quando “algo” a invoca (chama).
 
nomeCompleto: function() { 
  return `${this.nome} ${this.nomeDoMeio} ${this.sobrenome}`}
  // Function to compute the product of p1 and p2
function myFunction(p1, p2) {
return p1 * p2;

}*/
/*
Aluna da Academia
nome: Fulana	nome: Fulana
nome do meio: Ciclana	nome do meio: Ciclana
sobrenome: De Tal	sobrenome: De Tal
email: fulana.detal@gmail.com	email: fulana.detal@gmail.com
email da academia: fulana.detal@academia.com.br	email da academia: fulana.detal@academia.com.br
idade: 30 anos	idade: 30 anos
peso: 65.5kg	peso: 65.5kg
altura: 1.62m	altura: 1.62m
fumante: não	fumante: não
bebe: sim	bebe: sim
tempo que pratica atividades físicas: 2 anos	tempo que
 pratica atividades físicas: 2 anos
*/
const nome = "Rosangela";
const nomedomeio = "Santos";
const sobrenome = "Lambiase";
const emaildesign = "rosangela.lambiase87@gmail.com";
const emailConstruçãoCivil = "mulherestrabalhandoprojetosere@gmail.com";
let idade = "54";
let peso = "80kg";
const altura = "1,63m";
let fumante = "sim";
let bebe = "não";
let tempoquepraticaatividadesfísicas = "2 anos";
//array
const Aluna = [nome, nomedomeio, sobrenome, emaildesign,
    emailConstruçãoCivil, idade, peso, altura, fumante,
    bebe, tempoquepraticaatividadesfísicas];

Aluna.length
Aluna.push("negra")
Aluna.push("Itanhaém")
Aluna.push("filha de Obá)")
Aluna.pop()

console.log(nome);
console.log(nomedomeio);
console.log(sobrenome);
console.log(emaildesign);
console.log(emailConstruçãoCivil);
console.log(idade);
console.log(peso);
console.log(altura);
console.log(fumante);
console.log(bebe);
console.log(tempoquepraticaatividadesfísicas);
console.log(Aluna);

/*lista pretalab
Vera Felix
Deise
Patti Silva
Gabriela Alves
Débora
Ariane
Mandys
Gabriela
Renata
Bruna
Ana B
Angélica Reis
Francine Santos
Marcela Ferreira
Lena
Ana Carvalho
Milla
Manoela
Joice Santos
Tainá Andrade
Roberta
Larissa
Karine
Crisitna Rosa
Reh
Barbára
Caroline Pires
Cailane Gois
Espaço Inova
GI
Sam
Roana Góes
Eduardo Teles
Luciana Nascimento
Larissa Bispo
Naiara Nogueira
Isabele Meyce
Ayanne
Sara Chagas
~g
Mai
Rebeca Balbino
Letícia
*/
const pretalab0 = "Vera Felix";
const pretalab1 = "Deise";
const pretalab2 = "Patti Silva";
const pretalab3 = "Gabriela Alves";
const pretalab4 = "Débora";
const pretalab5 = "Ariane";
const pretalab6 = "Mandys";
const pretalab7 = "Gabriela";
const pretalab8 = "Renata";
const pretalab9 = "Bruna";
const pretalab10 = "Ana B";
const pretalab11 = "Angélica Reis";
const pretalab12 = "Francine Santos";
const pretalab13 = "Marcela Ferreira";
const pretalab14 = "Lena";
const pretalab15 = "Ana Carvalho";
const pretalab16 = "Milla";
const pretalab17 = "Manoela";
const pretalab18 = "Joice Santos";
const pretalab19 = "Tainá Andrade";
const pretalab20 = "Roberta";
const pretalab21 = "Larissa";
const pretalab22 = "Karine";
const pretalab23 = "Crisitna Rosa";
const pretalab24 = "Reh";
const pretalab25 = "Barbára";
const pretalab26 = "Caroline Pires";
const pretalab27 = "Cailane Gois";
const pretalab28 = "Espaço Inova";
const pretalab29 = "Gl";
const pretalab30 = "Sam";
const pretalab31 = "Roana Góes";
const pretalab32 = "Eduarda Teles";
const pretalab33 = "Luciana Nascimento";
const pretalab34 = "Larissa Bispo";
const pretalab35 = "Naiara Nogueira";
const pretalab36 = "Isabele Meyce";
const pretalab37 = "Ayanne";
const pretalab38 = "Sara Chagas";
const pretalab39 = "~g";
const pretalab40 = "Mai";
const pretalab41 = "Rebeca Balbino";
const pretalab42 = "Letícia";




const PRETALAB = ["pretalab0", "pretalab1", "pretalab2", "pretalab3", "pretalab4", "pretalab5",
    "pretalab6", "pretalab7", "pretalab8", "pretalab9", "pretalab10",
    "pretalab11", "pretalab12", "pretalab13", "pretalab14", "pretalab15",
    "pretalab16", "pretalab17", "pretalab18", "pretalab19", "pretalab20",
    "pretalab21", "pretalab22", "pretalab23", "pretalab24", "pretalab25",
    "pretalab26", "pretalab27", "pretalab28", "pretalab29", "pretalab30",
    "pretalab31", "pretalab32", "pretalab33", "pretalab34", "pretalab35",
    "pretalab36", "pretalab37", "pretalab38", "pretalab38", "pretalab39",
    "pretalab40", "pretalab41", "pretalab42"]

    

    for (var i = 0; i < 10 ; i++)
     {
      console.log("Repetindo for:"+ i)
      
    };

    for (var j = 0; j < 10 ; j++)
    
     {
      console.log("pipipi!","popopó!", "Beleza","Não-Beleza" + j)
      
    };

    console.log[PRETALAB];

    //modal
    // O método toggle() alterna entre hide() e show() para os elementos selecionados.
    //Este método verifica a visibilidade dos elementos selecionados. show() é executado se um elemento estiver oculto.
    // hide() é executado se um elemento estiver visível - Isso cria um efeito de alternância.
    //Nota : Os elementos ocultos não serão exibidos (não afetam mais o layout da página).
    //Dica: Este método também pode ser usado para alternar entre funções personalizadas./*

    const openModalButton = document.querySelector("#open-modal");
    const closeModalButton = document.querySelector("#close-modal");
    const modal = document.querySelector("#modal");
    const fade = document.querySelector("#fade");

    /*Documentos HTML DOM

    Objeto Documento
Quando um documento HTML é carregado em um navegador da web, 
ele se torna um objeto de documento .
O objeto de documento é o nó raiz do documento HTML.
O objeto document é uma propriedade do objeto window .
O objeto do documento é acessado com:
window.documentou apenasdocument*/
    
    
    
    [openModalButton, closeModalButton, fade].forEach((el) => {
      el.addEventListener("click", () =>   toggleModal());
    });
    const toggleModal= () => {
       [modal,fade].forEach((el)=> el.classList.toggle("hide"));
        
      };