const image = document.querySelector('img');
const input = document.querySelector('input');
const button = document.querySelector('button');

const pontuacaoContainer = document.querySelector('.pontuacao-container');
const pontuacao = document.querySelector ('#pontuacao');
const campoErro = document.getElementById('campo-erro');
console.log(campoErro)

const numeroMaximoDePersonagens = 671;
let pontos = 0;
let nomeDoPersonagem = '';

numeroAleatorio = ()=> {
    return Math.floor (Math.random() * numeroMaximoDePersonagens);
}

pegarPersonagem = () => {
    let id = numeroAleatorio ();

    return fetch (`https://rickandmortyapi.com/api/character/${id}`,{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
        }).then((response) => response.json()).then((data) => {
        image.src = data.image;
        image.alt = data.name;
        nomeDoPersonagem = data.name;
        });
}

    jogar = () => {
        this.pegarPersonagem()

        pontuacaoContainer.style.display = 'flex'
        button.innerHTML = 'Jogar'
        input.style.opacity = 1;
        nomeDoPersonagem = nomeDoPersonagem.toLowerCase();
        let nomeDigitado = input.value.toLowerCase();
            if(nomeDigitado == nomeDoPersonagem && nomeDigitado != '' && nomeDoPersonagem != '') {
            pontos = pontos +1;
            console.log (pontos)
        }else {
            campoErro.innerHTML = `Você errou. O nome era ${nomeDoPersonagem}`;
        }
        console.log(pontuacao)
        pontuacao.innerHTML = pontos;
        
        }

        button.onclick = jogar;
