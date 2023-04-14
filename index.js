
//Setando 2 números random
var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomNumber2 = Math.floor(Math.random() * 6)+1;

//selecionando a tag img
const image1 = document.querySelectorAll('img')[0];
const image2 = document.querySelectorAll('img')[1];

//criando o endereço da imagem
var randomAddress = '/images/dice' + randomNumber1 + '.png'; // /images/dice1.png
var randomAddress2 = '/images/dice' + randomNumber2 + '.png'; // /images/dice1.png

//randomizando o endereço das imagens
image1.setAttribute('src', randomAddress);
image2.setAttribute('src', randomAddress2);

//Declarando Empate e Vencedores
if(randomNumber1 === randomNumber2){
        document.querySelector('h1').textContent='Draw!'
    }
    else if(randomNumber1 < randomNumber2){
        document.querySelector('h1').textContent='🚩 Player 2 Wins!'
    }
    else{
        document.querySelector('h1').textContent='🚩 Player 1 Wins!'
    }






