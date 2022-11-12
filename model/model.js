module.exports = {

    posts: [],

    getAll(){
        return this.posts
    },

    newPost(title, description){
        this.posts.push({id: createId(), title, description})
    }
}

function createId(){
    return Math.random().toString(36).slice(2);
}
