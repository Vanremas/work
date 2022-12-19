let id = null;
async function getPosts(){
    let res  = await fetch(`https://api.blog.ru/posts`);
    let posts = await res.json();
    document.querySelector('.post-list').innerHTML = '';
    posts.forEach((post) => {
        document.querySelector('.post-list').innerHTML += ` 
            <div class="card" style="width: 18ren;">
            <div class="card-body">  
            <h5 class="card-tittle"> ${post.tittle}</h5> 
            <p class="card-text">${post.body}</p> 
            <a class="card-link" >Подробнее</a>
             <button class="card-link" onclick="delPost(${post.id})" >Del</button>
                    <button class="card-link" onclick="selPost('${post.id}', '${post.tittle}', '${post.body}')" >Edit</button>
            </div>
            </div>
`
    });
}
async function addPost(){
    const tittle = document.getElementById('tittle').value, body = document.getElementById('body').value;

    let formData = new FormData();
    formData.append('tittle', tittle);
    formData.append('body', body);

    const res = await fetch(`http://api.blog.ru/posts`, {
        method: 'POST',
        body: formData
    });
    const data = await res.json();
    if (data.status === true){
        document.getElementById('tittle').value = '';
        document.getElementById('body').value = '';
        await getPosts();
    }
}

async function delPost(id){
console.log(id)
    const res = await fetch(`http://api.blog.ru/posts/${id}`, {
        method: 'DELETE'
    });

    const data = await res.json();

    if (data.status === true){
        await getPosts();
    }
}

function selPost(ids,tittle, body){
    id=ids;
    console.log(id," ", tittle);
    document.getElementById('tittle-edit').value = tittle;
    document.getElementById('body-edit').value = body;
}
async function upPost(){
    const tittle = document.getElementById('tittle-edit').value, body = document.getElementById('body-edit').value;
    const data = {
        tittle: tittle,
        body: body
    }

    const res = await fetch(`http://api.blog.ru/posts/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data)
})

let resData = await res.json();
if (resData.status === true){
    document.getElementById('tittle-edit').value = '';
    document.getElementById('body-edit').value = '';
    await getPosts();
}
}

getPosts();