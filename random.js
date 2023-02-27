const showData = () => {
    fetch('https://randomuser.me/api/?gender=femal')
    .then(response => response.json())
    .then(data => loadData(data))
};

const loadData = data => {

    console.log(data.results[0].location);
    const parentDiv = document.getElementById('parent-container'); 
    const childDiv = document.createElement('div');
    childDiv.innerHTML = `
        <h3>Gender : ${data.results[0].gender}</h3>
        <h3>Name :${data.results[0].name.title + ' ' + data.results[0].name.first  +' '+  data.results[0].name.last} </h3>
        <h4>Location :</h4>
        <p>Country : ${data.results[0].location.country}</p>
        <p>City : ${data.results[0].location.city}</p>
        <p>Postcode : ${data.results[0].location.postcode}</p>
        <p>Stree Name : ${data.results[0].location.street.name}</p>
        
    `
    parentDiv.appendChild(childDiv);
}

