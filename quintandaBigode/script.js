const inicioPrograma = Number(prompt(`
     ========= Bem-Vindo =========
          O que deseja comprar?
     ============================
        Selecione uma opcção  
    _____________________________
    [1] - Banana
    [2] - Maça
    [3] - Manga
    [4] - Laranja
    [5] - Limão
    `))

function comprarBanana() {
    var resultado = 0
    alert(`Preço da Banana: R$ 1,30 a unidade,
     apartir de 12 unidades o preço é R$ 1,00`)
    var qtdBanana = Number(prompt(`Quantas bananas deseja comprar?`))


    if (qtdBanana >= 12) {
        resultado = qtdBanana * 1
        alert(`Você comprou ${qtdBanana} bananas e 
        saiu por ${resultado.toLocaleString('pt-br',
            {
                style: 'currency'
                , currency: 'BRL',
            })}`)
    }
    else {
        resultado = qtdBanana * 1.30
        alert(`Você comprou ${qtdBanana} bananas e 
        saiu por ${resultado.toLocaleString('pt-br',
            {
                style: 'currency',
                currency: 'BRL',
            })}
        `)
    }
}

function comprarMaça() {
    var resultado = 0
    alert(`O KG da maçã é de: R$ 8,55,
     apartir de 2 KG o preço é R$ 6,99`)
    var kgMaca = Number(prompt(`Quantos KG de maçã deseja comprar?`))

    if (kgMaca >= 2) {
        resultado = kgMaca * 6.99
        alert(`Você comprou ${kgMaca} KG de maçã e saiu por ${resultado}`)
    }
    else { resultado = kgMaca * 8.55 }
    alert(`Você comprou ${kgMaca} KG de maçã e saiu por ${resultado}`)

}

function comprarManga() {


    var resultado = 0
    var carluc = Number (prompt(`O KG da manga Palmer é de: R$ 5,49
        O KG da manga Rosa é de: R$ 10,00 
        O KG da manga Tommy é de: R$ 2,99
        __________________________________
        Qual você deseja comprar? 
        __________________________________
        [1] Palmer 
        [2] Rosa  
        [3] Tommy`))
    var kilo = (prompt(`Quantos KG você deseja comprar ?`))
    switch (carluc) {
        case 1:
            resultado = kilo * 5.49
            alert(` O valor é de ${resultado.toLocaleString('pt-br',
                {
                    style: 'currency',
                    currency: 'BRL',
                })}`)
            break;
        case 2:
            resultado = kilo * 10.00
            alert(` O valor é de ${resultado.toLocaleString('pt-br',
                {
                    style: 'currency',
                    currency: 'BRL',
                })}`)
            break;
        case 3:
            resultado = kilo * 2.99
            alert(` O valor é de ${resultado.toLocaleString('pt-br',
                {
                    style: 'currency',
                    currency: 'BRL',
                })}`)
            break;

    }


}


switch (inicioPrograma) {
    case 1:
        comprarBanana()
        break;

    case 2:
        comprarMaça()
        break;
    case 3:
        comprarManga()
        break;
    case 4:
        alert("Laranja")
        break;
    case 5:
        alert("Limão")
        break;
    default:
        alert("Não existe a fruta que voce gosta")
        alert("A fruta que você gosta vc chupa até o caroço???????")

}