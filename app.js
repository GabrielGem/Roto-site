var txtInp = document.getElementById('txtpes')
const placeholders = ['Galvano', 'Pré-Impressão', 'Impressão'];
let index = 0;

function trocarPlaceholder() {
  txtInp.placeholder = placeholders[index];
  index = (index + 1) % placeholders.length;
}

setInterval(trocarPlaceholder, 2000);

function pesquisa() {
    let section = document.getElementById('res-pesq')
    let resultados = ""
    let titulo = ""
    let descricao = ""
    let link = ""
    var txt = document.getElementById('txtpes').value
    if (!txt) {
        section.innerHTML += "Preencha os dados e pesquise novamente"
        return
    }
    for (let dado of processosDeImpressao) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        link = dado.link
        if (titulo.includes(txt) || descricao.includes(txt) || tags.includes(txt)) {
            resultados += `
            <div class="item-res">
                <h2>${titulo}</h2>
                <p>${descricao}</p>
                <a href="${link}" target="_blank">Quer saber o que é?</a>
            </div>
        `
        }
    }
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
    section.innerHTML = resultados
}