const criaJogo = (sprite) => {

    let palavraSecreta = '';
    lacunas = [];
    etapa = 1;

    const ganhou = () => lacunas.length ?
            !lacunas.some((lacuna) => {
                return lacuna == '';
            }) :
            false
    
    const reinicia = () => {
        etapa = 1;
        lacunas = [];
        palavraSecreta = '';
        sprite.reset();
    }
    const perdeu = () => sprite.isFinished();
    
    const ganhouOuPerdeu = () => ganhou() || perdeu();
    
    const processaChute = (chute) => {
        if (!chute.trim()) throw ('Chute inválido');

        const exp = new RegExp(chute, 'gi');

        let resultado;
        acertou = false;

        while (resultado = exp.exec(palavraSecreta)) {
            acertou = lacunas[resultado.index] = chute;

        }
        if (!acertou) sprite.nextFrame();


    };
    const setPalavraSecreta = (palavraRecebida) => {
        if (!palavraRecebida.trim()) throw Error('Palavra secreta inválida');
        palavraSecreta = palavraRecebida;
        criaLacunas();
        proximaEtapa();
    };
    const proximaEtapa = () => {
        etapa = 2;
    }

    const criaLacunas = () => {

        for (let i = 0; i < palavraSecreta.length; i++) {
            lacunas.push("");
        }
    };
    const getLacunas = () => lacunas;
    
    const getEtapa = () => etapa;
    



    return {
        setPalavraSecreta,
        getLacunas,
        getEtapa,
        processaChute,
        ganhou,
        perdeu,
        ganhouOuPerdeu,
        reinicia
    };

};