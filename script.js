
const cartas = [
    {
        titulo: "Abra quando estiver triste",
        icone: "🥺",
        mensagem: `Minha vidinha,

Se você está lendo esta carta porque seu coração está triste, queria muito poder estar aí agora, segurando sua mão e te dando um abraço bem apertado.

Quero que você saiba que não precisa estar feliz o tempo todo. Existem dias difíceis, e tudo bem.

Mas nunca se esqueça do quanto você é especial para mim. Seu sorriso ilumina meus dias, e sua existência torna meu mundo muito mais bonito.

Se hoje não foi um dia bom, espero que amanhã seja mais leve.

E lembre-se: você tem alguém aqui que te ama e quer te ver bem.

Eu te amo, minha Sarah. 💜`
    },
    {
        titulo: "Abra quando sentir saudade",
        icone: "💗",
        mensagem: `Oi, meu amor!

A saudade é uma coisa engraçada, né? Às vezes, mesmo depois de passar um tempinho com você, já fico querendo estar ao seu lado novamente.

Sinto falta do seu carinho, das nossas conversas e até das pequenas coisas que fazemos juntos.

Se eu pudesse, guardaria cada abraço seu em um potinho para abrir quando a saudade apertasse.

Enquanto não estamos pertinho, quero que esta carta seja um abraço meu chegando até você.

Feche os olhos por alguns segundos e imagine que estou te abraçando bem forte.

Eu te amo, minha vidinha. 💕`
    },
    {
        titulo: "Abra quando precisar sorrir",
        icone: "🌷",
        mensagem: `Sarah, minha princesa!

Você sabia que tem um sorriso capaz de melhorar completamente o meu dia?

É verdade!

Às vezes, basta pensar em você para eu começar a sorrir sozinho.

Eu adoro seu jeitinho, suas brincadeiras e todos aqueles pequenos detalhes que fazem você ser quem é.

Se pudesse escolher um lugar para estar agora, escolheria qualquer lugar onde você estivesse.

Porque, com você, até os momentos mais simples ficam especiais.

Agora me faz um favor?

Dá aquele sorriso lindo que eu tanto amo! 💖`
    },
    {
        titulo: "Abra quando duvidar de si mesma",
        icone: "✨",
        mensagem: `Minha Sarah,

Talvez existam momentos em que você não consiga enxergar todas as qualidades que tem.

Mas eu queria te emprestar meus olhos por alguns segundos, só para você perceber a pessoa maravilhosa que eu vejo.

Você é muito mais forte do que imagina, mais especial do que acredita e mais importante para mim do que consigo explicar.

Não precisa ser perfeita. Eu amo você do jeitinho que é.

Tenha paciência consigo mesma e continue acreditando nos seus sonhos.

Eu estarei torcendo por você, comemorando suas conquistas e oferecendo meu carinho nos dias difíceis.

Tenho muito orgulho de você, minha vidinha. 💜`
    },
    {
        titulo: "Abra quando pensar em nós",
        icone: "💞",
        mensagem: `Meu amor,

Uma das coisas mais bonitas da vida é perceber como alguém pode se tornar tão importante para nós.

Você chegou e trouxe tantos sentimentos bons para o meu coração.

Gosto de imaginar nossos próximos momentos, nossas conversas, nossas risadas e todas as lembranças que ainda vamos construir.

Não sei exatamente como serão todos os nossos dias, mas sei que quero cuidar do que temos com muito carinho.

Obrigado por fazer parte da minha história.

Que a gente nunca perca a vontade de conversar, rir, aprender e demonstrar amor um pelo outro.

Você é minha pessoa especial. ❤️`
    },
    {
        titulo: "Abra quando quiser saber o quanto te amo",
        icone: "💌",
        mensagem: `Sarah, minha vidinha,

Se você abriu esta carta querendo descobrir o tamanho do meu amor, preciso te contar uma coisa...

Eu ainda não encontrei palavras suficientes para explicar.

Porque amar você está nos pequenos detalhes.

Está na vontade de saber como foi seu dia, na felicidade de receber uma mensagem sua e no desejo de ver você realizando seus sonhos.

Está nos momentos em que sinto saudade e na alegria de saber que tenho você na minha vida.

Talvez nenhuma carta consiga dizer tudo.

Mas, se existe uma coisa que quero que você nunca esqueça, é esta:

Eu amo você, Sarah.

E este site inteiro é só uma pequena forma de demonstrar isso. 💜`
    }
];

const grade = document.getElementById("grade-cartas");
const modal = document.getElementById("modal");
const modalConteudo = document.querySelector(".modal-conteudo");
const modalTitulo = document.getElementById("modal-titulo");
const modalTexto = document.getElementById("modal-texto");
const modalIcone = document.getElementById("modal-icone");
const fecharModalBotao = document.getElementById("fechar-modal");
const surpresaBotao = document.getElementById("abrir-surpresa");

let elementoAnterior = null;

function criarCartinhas() {
    cartas.forEach((carta, indice) => {
        const botao = document.createElement("button");

        botao.type = "button";
        botao.className = "cartao";
        botao.setAttribute("aria-label", carta.titulo);

        const envelope = document.createElement("div");
        envelope.className = "envelope";
        envelope.setAttribute("aria-hidden", "true");

        const titulo = document.createElement("h3");
        titulo.textContent = carta.titulo;

        const legenda = document.createElement("p");
        legenda.textContent = "Toque para abrir sua cartinha ♡";

        botao.append(envelope, titulo, legenda);

        botao.addEventListener("click", () => {
            abrirCarta(indice);
        });

        grade.appendChild(botao);
    });
}

function abrirModal(titulo, texto, icone) {
    elementoAnterior = document.activeElement;

    modalTitulo.textContent = titulo;
    modalTexto.textContent = texto;
    modalIcone.textContent = icone;

    modal.classList.add("ativo");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    modalConteudo.scrollTop = 0;
    fecharModalBotao.focus();
}

function abrirCarta(indice) {
    const carta = cartas[indice];

    if (!carta) return;

    abrirModal(carta.titulo, carta.mensagem, carta.icone);
}

function fecharModal() {
    modal.classList.remove("ativo");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (elementoAnterior) {
        elementoAnterior.focus();
    }
}

fecharModalBotao.addEventListener("click", fecharModal);

modal.addEventListener("click", (evento) => {
    if (evento.target.dataset.fechar === "true") {
        fecharModal();
    }
});

document.addEventListener("keydown", (evento) => {
    if (!modal.classList.contains("ativo")) return;

    if (evento.key === "Escape") {
        fecharModal();
    }

    if (evento.key === "Tab") {
        const elementos = [
            ...modalConteudo.querySelectorAll(
                'button:not([disabled]), a[href], [tabindex="0"]'
            )
        ];

        const primeiro = elementos[0];
        const ultimo = elementos[elementos.length - 1];

        if (evento.shiftKey && document.activeElement === primeiro) {
            evento.preventDefault();
            ultimo.focus();
        } else if (!evento.shiftKey && document.activeElement === ultimo) {
            evento.preventDefault();
            primeiro.focus();
        }
    }
});

surpresaBotao.addEventListener("click", () => {
    const mensagem = `Minha Sarah, minha vidinha... 💜

Se você chegou até aqui, significa que abriu este pequeno presente que preparei especialmente para você.

Talvez seja apenas um site, com algumas cores, cartinhas e palavras.

Mas, para mim, ele representa algo muito maior.

Cada pedacinho foi pensado com carinho, porque eu queria criar algo que fosse só seu.

Algo que você pudesse abrir quando estivesse feliz, triste, com saudade ou simplesmente quando quisesse lembrar do quanto é amada.

Você é uma pessoa muito especial na minha vida.

Eu quero continuar criando lembranças bonitas ao seu lado, aprendendo com você e encontrando novas maneiras de demonstrar meu carinho.

E, mesmo que eu não consiga transformar todo o meu amor em palavras, espero que você consiga senti-lo em cada detalhe deste presente.

Obrigado por ser você.

Eu te amo muito, Sarah, minha vidinha! ❤️

Com amor, de alguém que sorri só de pensar em você.`;

    abrirModal("Você é meu presente mais bonito", mensagem, "🎁");
    criarExplosaoCoracoes();
});

const recipienteCoracoes = document.getElementById("coracoes");

const movimentoReduzido = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);

function criarCoracao() {
    if (movimentoReduzido.matches || document.hidden) return;

    const coracao = document.createElement("span");

    const simbolos = ["💗", "💜", "💕", "♡", "🌸"];

    const simbolo = simbolos[
        Math.floor(Math.random() * simbolos.length)
    ];

    coracao.className = "coracao-flutuante";
    coracao.textContent = simbolo;

    coracao.style.left = Math.random() * 100 + "%";
    coracao.style.fontSize = 14 + Math.random() * 18 + "px";
    coracao.style.animationDuration = 6 + Math.random() * 5 + "s";

    recipienteCoracoes.appendChild(coracao);

    coracao.addEventListener("animationend", () => {
        coracao.remove();
    }, { once: true });
}

function criarExplosaoCoracoes() {
    if (movimentoReduzido.matches) return;

    for (let i = 0; i < 18; i++) {
        setTimeout(criarCoracao, i * 100);
    }
}

setInterval(criarCoracao, 850);

criarCartinhas();
