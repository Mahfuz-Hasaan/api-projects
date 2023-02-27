function showCommnet(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => getCommnets(data))
}

function getCommnets(comments){
    const parrentDiv = document.getElementById('parentId');
    for (const item of comments) {
        chilDiv = document.createElement('div');
        chilDiv.innerHTML = `
            <h2>ID : ${item.id}</h2>
            <h3>Name : ${item.name}</h3>
            <h3>Email : ${item.email}</h3>
        `;
        parrentDiv.appendChild(chilDiv);
    }
}