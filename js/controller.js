let criaController = (jogo) => {
    let $entrada = $('.entrada');
    let $lacunas = $('.lacunas');

    let exibeLacunas = () => {
        $lacunas.empty();
        jogo.getLacunas().forEach( lacuna => {
            $('<li>')
                .addClass('lacuna')
                .text(lacuna)
                .appendTo($lacunas);
        });
    }
    let mudaPlaceHolder = (texto) => {
        $entrada.attr('placeholder', texto);
    }
    let guardaPalavraSecreta = () => {
        jogo.setPalavraSecreta($entrada.val());
        $entrada.val('');
        mudaPlaceHolder('chuta');
        exibeLacunas();
    }
    let inicia = () => {
        $entrada.keypress((event) => {
            if (event.which == 13) {
                switch (jogo.getEtapa()) {
                    case 1:
                        guardaPalavraSecreta();
                        break;
                    case 2:
                        alert('etapa 2');
                        break;
                }
            }
        });
    }

    return {
        inicia: inicia
    };
}

