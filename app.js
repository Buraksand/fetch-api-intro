const getTxtBtn = document.getElementById('getText');
const getUsersBtn = document.getElementById('getUsers');
const getPostsBtn = document.getElementById('getPosts');
const output = document.getElementById('output')
const addPostForm = document.getElementById('addPost')

/* function getText() {
    fetch('sample.txt')
        .then(function (res) {
            return res.text()
        })
        .then(function (data) {
            console.log(data)
        })
} */

function getText() {
    fetch('sample.txt')
        .then(res => res.text())
        .then(data => {
            output.innerHTML = data
        })
        .catch(err => console.log(err))
}

function getUsers() {
    fetch('users.json')
        .then(res => res.json())
        .then(data => {
            let outputHtml = '<h2 class="mb-4">Users</h2>'
            data.forEach(user => {
                outputHtml +=
                    `<ul class="list-group mb-4">
                        <li class="list-group-item">ID: ${user.id}</li>
                        <li class="list-group-item">Name: ${user.name}</li>
                        <li class="list-group-item">E-Mail: ${user.email}</li>
                    </ul>`
            });
            output.innerHTML = outputHtml;
        })
}
function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            let outputHtml = '<h2 class="mb-4">Posts</h2>'
            data.forEach(post => {
                outputHtml +=
                    `<div class="card card-body mb-4">
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                    </div>`
            });
            output.innerHTML = outputHtml;
        })
}

function addPost(e) {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ title: title, body: body })
    })
        .then(res => res.json())
        .then(data => console.log(data))
}


getTxtBtn.addEventListener('click', getText);
getUsersBtn.addEventListener('click', getUsers);
getPostsBtn.addEventListener('click', getPosts);
addPostForm.addEventListener('submit', addPost);

