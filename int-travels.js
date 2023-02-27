const showData = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => loadData(data))
};

const loadData = datas => {
    const parentDiv = document.getElementById('parent-div');
    for (const data of datas) {
        // console.log(data.cca2)
        const childDiv = document.createElement('div');
        childDiv.classList.add('child-div')
        childDiv.innerHTML = `
            <h3>Country: ${data.name.common}</h3>
            <h4>${data.capital ? data.capital : 'no capital'}<h4>
            <button onclick='showDetails("${data.cca2}")'>Details</button>
        `;
        parentDiv.appendChild(childDiv)
    }
}


const showDetails = (code) =>{
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(response => response.json())
    .then(data => loadDetails(data))
}

const loadDetails = countryCode =>{
    console.log(countryCode[0].flags.png)
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
        <h3>Country Name: ${countryCode[0].name.common}</h3>
        <img src="${countryCode[0].flags.png}" alt="">
    `
}