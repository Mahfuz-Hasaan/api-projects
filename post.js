function loadUserData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => displayUserData(posts))
}

function displayUserData(posts){
    const userContainer = document.getElementById('user-container');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post');
        const findPostClass = document.getElementsByClassName('post')
        console.log(findPostClass)
        // const postClass = document.querySelectorAll('.post');
        // postClass.style.backgroundColor = 'red';
        div.innerHTML = `
            <h4>User : ${post.id} </h5>
            <h5>Post title : ${post.title} </h5>
            <p>Post description : ${post.body} </p>
        `;
        userContainer.appendChild(div);
    }
    
}

// function displayUserData(posts){
//     const userContainer = document.getElementById('user-container');
//     for (const post of posts) {
//         const div = document.createElement('div');
//         div.classList.add('post');
//         div.style.backgroundColor = 'green'; // Set background color of post element
//         div.innerHTML = `
//             <h4>User : ${post.id} </h5>
//             <h5>Post title : ${post.title} </h5>
//             <p>Post description : ${post.body} </p>
//         `;
//         userContainer.appendChild(div);
//     }  
// }