document.addEventListener('DOMContentLoaded', () => {
    showPosts();
})

function showPosts() {
    fetch('http://localhost:80/api/all').then(res => {
        return res.json()
    }).then(json => {
        console.log(json)

        let postElements = '';

        let post = JSON.parse(json);// transforma o json da requisição em um objeto;

        post.forEach(index => {
            let postElement = `<div class="card text-center mt-4">
        <div class="card-header">
            <h5 class="card-title">${index.title}</h5>
        </div>
        <div class="card-body">
            <p class="card-text">${index.description}</p>
        </div>
        <div class="card-footer text-muted">
            ${index.data}
        </div>
        </div>`

        postElements += postElement;
        });
        
        document.getElementById('posts').innerHTML = postElements;

        console.log(postElements)
    })
}

let sendButton = document.getElementById('sendButton')

function newPost(){

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    let post = {title, description}

    console.log(JSON.stringify(post))

    let options = {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}), //'new' é uma outra forma de criar um objeto 
        body: JSON.stringify(post)       
    }

    fetch('http://localhost:80/api/new', options).then(res => {
        console.log(res)
        showPosts();
        document.getElementById('title').value = '';// apaga o texto na barra titulo
        document.getElementById('description').value = '';// apaga o texto na barra descrição
    })
}

sendButton.addEventListener('click', newPost)