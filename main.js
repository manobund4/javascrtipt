function criarCartao(categoria, pergunta, respostaS){
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
    
    cartao.innerHTML =`
    <div class="cartao_conteudo">
    <h3> categoria</h3>
    <div class="cartao_pergunta">
    <p> pergunta </p>
    <div class="cartao_resposta">
    <p> resposta </p>
    </div>
    </div>
    `
    }