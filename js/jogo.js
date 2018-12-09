let criaJogo = (sprite) => {
    let palavraSecreta = '';
    lacunas = [];
    etapa = 1;

    let preencheLacunas = () => {

    }
    let processaChute = (chute) => {
        let exp = new RegExp(chute, 'gi');
        let resultado;
        let acertou = false;

        while (resultado = exp.exec(palavraSecreta)) {
            acertou = lacunas[resultado.index] = chute;

        }
        if (!acertou) {
            sprite.nextFrame();
        }
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
    let getlacunas = () => {
        return lacunas;
    };
    let getEtapa = () => {
        return etapa;
    }



    return {
        setPalavraSecreta: setPalavraSecreta,
        getlacunas: getlacunas,
        getEtapa: getEtapa,
        processaChute: processaChute

    };

};