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

    switch(inicioPrograma){
        case 1:
            const und = Number(prompt("Você escolheu banana, quantas unidades você quer?"))
            break;
        case 2:
            alert("Maça")
            break;
        case 3:
            alert("Manga")
            break;
        case 4:
            alert("Laranja")
            break;
        case 5:
            alert("Limão")
            break;
        default :
        alert("Não existe a fruta que voce gosta")
        alert("A fruta que você gosta vc chupa até o caroço???????")
        
    }