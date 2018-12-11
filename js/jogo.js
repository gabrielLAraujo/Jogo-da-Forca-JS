let criaJogo = (sprite) => {
    let palavraSecreta = '';
    lacunas = [];
    etapa = 1;

    let ganhou = () => {

        return lacunas.length ?
            !lacunas.some((lacuna) => {
                return lacuna == '';
            }) :
            false
    }
    let reinicia = () => {
        sprite.reset();
    }
    let perdeu = () => {
        return sprite.isFinished();
    }
    let ganhouOuPerdeu = () => {
        return ganhou() || perdeu();
    }
    let processaChute = (chute) => {
        let exp = new RegExp(chute, 'gi');
        let resultado;
        let acertou = false;

        while (resultado = exp.exec(palavraSecreta)) {
            acertou = lacunas[resultado.index] = chute;

        }
        if (!acertou) sprite.nextFrame();


    };
    let setPalavraSecreta = (palavraRecebida) => {
        palavraSecreta = palavraRecebida;
        criaLacunas();
        proximaEtapa();
    };
    let proximaEtapa = () => {
        etapa = 2;
    }

    let criaLacunas = () => {

        for (let i = 0; i < palavraSecreta.length; i++) {
            lacunas.push("");
        }
    };
    let getLacunas = () => {
        return lacunas;
    };
    let getEtapa = () => {
        return etapa;
    }



    return {
        setPalavraSecreta: setPalavraSecreta,
        getLacunas: getLacunas,
        getEtapa: getEtapa,
        processaChute: processaChute,
        ganhou: ganhou,
        perdeu: perdeu,
        ganhouOuPerdeu: ganhouOuPerdeu,
        reinicia: reinicia
    };

};