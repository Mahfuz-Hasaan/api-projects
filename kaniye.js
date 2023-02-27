const showData = () =>{
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => loadQouteData(data))
};

const loadQouteData = qoute => {
    console.log(qoute)
    const parentContainer = document.getElementById('parent-container');
    console.log(parentContainer)
    const childContainer = document.createElement('h3');
    childContainer.innerHTML = qoute.quote;
    parentContainer.appendChild(childContainer);
}
