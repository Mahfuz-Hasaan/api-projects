function usersData(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => displayData(data))
}

function displayData(data){
    console.log(data)
    const ul = document.getElementById('users-list');
    for (const user of data) {
        li = document.createElement('li');
        li.innerText = user.address.geo.lng;
        ul.appendChild(li);
    }
}