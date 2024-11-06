const date = document.querySelector(".querydate").value
console.log(date)
function queryMaker(date) {
    const queryResultElement = document.querySelector(".queryResult");
    // Define o conteúdo de queryResult com as queries formatadas
    const queryResult = `
        CREATE TABLE BKP_MOV_${date} SELECT * FROM MOV;<br>
        CREATE TABLE BKP_VECLI_${date} SELECT * FROM VECLI;<br>
        CREATE TABLE BKP_TELCLI_${date} SELECT * FROM TELCLI;<br>
        CREATE TABLE BKP_HISTCLI_${date} SELECT * FROM HISTCLI;<br>
        CREATE TABLE BKP_PROGNFE_${date} SELECT * FROM PROGNFE;<br>
        CREATE TABLE BKP_CONTCUP_${date} SELECT * FROM CONTCUP;<br>
    `;
    // Exibe o resultado da query na tela
    queryResultElement.innerHTML = queryResult;
}

    // Adiciona o evento de clique no botão
    document.getElementById("queryButton").addEventListener("click", function() {
        // Captura o valor do input
        const date = document.querySelector(".querydate").value;
        // Chama a função queryMaker com o valor capturado
        queryMaker(date);
    });


    console.log(document.querySelector(".queryResult"))
