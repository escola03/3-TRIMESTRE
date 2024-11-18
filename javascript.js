// Função que exibe uma mensagem sobre o modelo de moto clicado
function exibirDetalhes(modelo) {
    let detalhes = "";

    switch(modelo) {
        case 'sport':
            detalhes = "A moto Sport é ideal para quem busca velocidade e desempenho. Com um design aerodinâmico e motor potente, ela é perfeita para pistas e viagens curtas.";
            break;
        case 'cruiser':
            detalhes = "A moto Cruiser oferece conforto e estilo para longas viagens. Com um design robusto e posição de pilotagem confortável, é perfeita para rodar por horas.";
            break;
        case 'touring':
            detalhes = "A moto Touring é equipada com recursos avançados para viagens longas. Conforto, potência e tecnologia fazem dela uma opção ideal para quem busca aventura.";
            break;
        default:
            detalhes = "Selecione um modelo para ver mais detalhes.";
    }

    alert(detalhes);
}
