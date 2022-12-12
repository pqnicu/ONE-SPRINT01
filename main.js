(() => {
const box = document.getElementById('main-tela');
const cripto = document.getElementById('btn1');
const descripto = document.getElementById('btn2');
const textbox = document.getElementById('textbox');
const answer = document.querySelector('[data-answer-box]')

const chars = {'a':'#', 'e':'$', 'i':'%', 'o':'@', 'u':'*'}
const chars2 = {'#':'a', '$':'e', '%':'i', '@':'o', '*':'u'}

const descriptografar = (() => {
    let mensagem = box.value
    mensagem = box.value.replace(/[#$%@*]/g, m => chars2[m])
    textbox.value = mensagem
}) 

const criptografar = (() => {
    let mensagem = box.value
    mensagem = box.value.replace(/[aeiou]/g, m => chars[m])
    textbox.value = mensagem
})

function botaoCopia() {
    const botaoCopia = document.createElement("button");
    const botaoDeCopiar = answer.querySelector('.botaoCopiar')

    botaoCopia.innerText = 'Copiar';
    botaoCopia.classList.add('botaoCopiar')
    botaoCopia.addEventListener('click', copiar)

    if(botaoDeCopiar == null) {
        answer.appendChild(botaoCopia)
    }
}

async function copiar() {
  let text = textbox.value;
  await navigator.clipboard.writeText(text);
}

cripto.addEventListener('click', () => {

    textbox.classList.add('resultadOn')
    textbox.value = box.value;
    criptografar()
    botaoCopia()
})

descripto.addEventListener('click', () => {

    textbox.classList.add('resultadOn')
    textbox.value = box.value
    descriptografar()
    botaoCopia()
})
})()