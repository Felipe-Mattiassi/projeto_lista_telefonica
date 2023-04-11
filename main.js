const form = document.querySelector('form')
const corpoTabela = document.querySelector('tbody')
let linhas = ''
const arrayNome = []
const arrayNumero = []


form.addEventListener('submit', function (e) {
    e.preventDefault()
    adicionaLinha()
    atualizaTabela()
    atualizaNumeroContatos()
})

function adicionaLinha() {
    const nomeInput = document.getElementById('nome-contato')
    const numeroInput = document.getElementById('numero-contato')  

    if(arrayNome.includes(nomeInput.value) || arrayNumero.includes(numeroInput.value)) {
        alert('O esse nome ou esse numero ja foram adicionados')
    } else {

        arrayNome.push(nomeInput.value)
        arrayNumero.push(numeroInput.value)
    
        let linha = `<tr>`
        linha += `<td id="local-nome">${nomeInput.value}</td>`
        linha += `<td id="local-numero">${numeroInput.value}</td>`
        linha += `</tr>`
        linhas += linha
    
        console.log(arrayNome)
        console.log(arrayNumero)
    }
}

function atualizaTabela() {
    corpoTabela.innerHTML = linhas
}

function atualizaNumeroContatos() {
    const totalContatos = document.getElementById('total-de-contatos')
    totalContatos.innerHTML = `${arrayNumero.length} contatos cadastrados`
}