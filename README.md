# Mural de avisos 

A ideia é criar um mural de avisos. Uma requisição com o titulo e descrição do aviso é enviada para o backend que pega essa requisição monta um elemento HTML e devolve isso para o frontend. 

Este projeto possui 5 diretorios: notice_wall, client, model, routes e node_modules.

**notice_wall** - Diretorio principal em que se enconrtram todos os arquivos do projeto. O arquivo script.js esta diretamente dentro desta pasta:

     script.js é onde esta o servidor, a rota '/api' (que conhece todas as outras rotas menos a raiz) e a rota com a pagina HTML.

**routes** - diretorio em que se encontra o arquivo api.js:

     api.js possui duas requisições com rotas diferentes. uma requisiçao GET na rota '/all' e uma POST na rota '/new'.

     A rota '/all' está progamada para fazer uma requisição, pegar a resposta dessa requisição em formato json e converter em string.

     A rota '/new' esta programada para enviar uma requisição com um titulo e uma descrição (texto) e inseri-los no metodo newPost(titulo, descrição). a requisição encerra com res.send('Enviado com secesso!');

    No final do arquivo ele preparado para ser exportado.

**modulo** - diretorio em que se encontra o arquivo Model.js:

     mododule.exports recebe um objeto com os metodos responsaveis por manipular o mural de avisos, ja preparando para exportar o arquivo.

     O objeto do arquivo model.js possui dois metodos e um array 'posts:[]'.

     No array 'posts' sao salvos os posts enviados pela rota '/all', ex: posts:[{title: Titulo, description: Texto, id: *******}]

     getAll() e newPost(title, description) são os metodos do objeto. getAll() retorna o array 'posts'. newPost(title, description) recebe title e description da rota '/new' e os insere (push) no array 'posts'.

**scripts** - possui o arquivo index.html e o diretorio scripts com o arquivo index.js

     O arquivo index.html foi feito com bootstrap 5.2 e possui 3 áreas principais: campo para inserir titulo, campo para inserir texto e a àrea de visualização do mural.

     O arquivo index.js no diretorio scripts possui duas duas funçoes principais, que são mostrar os avisos no mural e inserir novos avisos. 

     index.js começa com um 'addEventListener' preparado para setar a função 'showPosts()' assim que a pagina carregar. A função 'showPosts()' faz uma requisição atraves de um fetch() para o endereço 'http://localhost:80/api/all' (rota api/all), ou seja, rota /all. Essa rota possui apenas uma requisição do tipo GET que captura os avisos em formato json. O fetch() retorna esse json e imprime. Posteriormente esse json é convertido em objto para ser possivel inserir as informações necessarias em um codigo HTML que será concatenado com os demais avisos.

     A outra função é newPost(). Ela pega os valores dos campos de titulo e texto, converte isso em um objeto nomeado 'post', ex: {title: Titulo, description: Texto}, e transforma esse objeto em um arquivo json. Logo apos cria um objeto nomeado 'options' que é o responsavel por enviar o novo post para o backend atraves da linha 'body: JSON.stringify(post):'

     let options = {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json'
        }),  
        body: JSON.stringify(post)       
    }

     O objeto 'options' é responsavel por informar o tipo da requisição, criar um header com o tipo do dado a ser tratado e recebe o objeto 'post' em formato json. Por ultimo, é realizada uma requisição pelo 'fetch('http://localhost:80/api/new', options)' para o endereço 'http://localhost:80/api/new', é importante destacar que o objeto optoins é passado para essa rota e ele contem o novo post. A rota '/new' por sua vez possui apenas uma requisição do tipo POST que esta preparada para criar um objeto 'post' com titulo e descrição. Por ultimo, a função 'fetch('http://localhost:80/api/new', options)' dispara a função showPost() afim de atualizar a visualização o mural de avisos.
    









