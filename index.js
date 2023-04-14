
//Setando um número random
var randomNumber1 = Math.floor(Math.random() * 6)+1;
//console.log(randomNumber1);

var randomNumber2 = Math.floor(Math.random() * 6)+1;
//console.log(randomNumber2);
//Selecionando as tags de imagem
const image1 = document.querySelectorAll('img')[0];
const image2 = document.querySelectorAll('img')[1];

randomNumers();
titleChange();

//dado 1
function randomNumers(){
if(randomNumber1===1){
image1.setAttribute('src', '/images/dice1.png');
}
else if(randomNumber1===2){
    image1.setAttribute('src', '/images/dice2.png');
}

else if(randomNumber1===3){
    image1.setAttribute('src', '/images/dice3.png');
}

else if(randomNumber1===4){
    image1.setAttribute('src', '/images/dice4.png');
}

else if(randomNumber1===5){
    image1.setAttribute('src', '/images/dice5.png');
}

else{
    image1.setAttribute('src', '/images/dice6.png');
}

//dado 2
if(randomNumber2===1){
    image2.setAttribute('src', '/images/dice1.png');

}

else if(randomNumber2===2){
    image2.setAttribute('src', '/images/dice2.png');
}

else if(randomNumber2===3){
    image2.setAttribute('src', '/images/dice3.png');
}
else if(randomNumber2===4){
    image2.setAttribute('src', '/images/dice4.png');
}
else if(randomNumber2===5){
    image2.setAttribute('src', '/images/dice5.png');
}
else{
    image2.setAttribute('src', '/images/dice6.png');
}
}

function titleChange(){
    if(randomNumber1 === randomNumber2){
        document.querySelector('h1').textContent='Draw!'
    }
    else if(randomNumber1 < randomNumber2){
        document.querySelector('h1').textContent='🚩 Player 2 Wins!'
    }
    else{
        document.querySelector('h1').textContent='🚩 Player 1 Wins!'
    }
}
