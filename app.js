const getTxtBtn = document.getElementById('getText');
const getUsersBtn = document.getElementById('getUsers');
const output = document.getElementById('output')

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
            let outputHtml = '<h2>Users</h2>'
            data.forEach(user => {
                outputHtml +=
                    `<ul>
                        <li>ID: ${user.id}</li>
                        <li>Name: ${user.name}</li>
                        <li>E-Mail: ${user.email}</li>
                    </ul>`
            });
            output.innerHTML = outputHtml;
        })

}

getTxtBtn.addEventListener('click', getText);
getUsersBtn.addEventListener('click', getUsers);