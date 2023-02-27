const loadMeals = (mealName) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => showMeals(data.meals));
};

const showMeals = (meals) => {
  const parenCardContainer = document.getElementById("parent-container-div");
  parenCardContainer.innerHTML = "";
  for (const meal of meals) {
    // console.log(meal.idMeal)
    const childDiv = document.createElement("div");
    childDiv.innerHTML = `
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="${meal.strMealThumb}" alt="item"/></figure>
                <div class="card-body">
                <h2 class="card-title">${meal.strMeal}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <label for="my-meal-modal" class="btn-primary text-center text-2xl py-3 rounded-md cursor-pointer" onclick=loadMealDetail(${meal.idMeal})>Food Details</label>
                <input type="checkbox" id="my-meal-modal" class="modal-toggle" />
                <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg" id="h3"></h3>
                    <p class="p" id="p"></p>
                    
                    <div class="modal-action">
                    <label for="my-meal-modal" class="btn-primary text-center text-2xl py-3 rounded-md cursor-pointer px-5">Order Now</label>
                    </div>
                </div>
                </div>
                </div>
            </div>
        `;
    parenCardContainer.appendChild(childDiv);
  }
};

document.getElementById("search-btn").addEventListener("click", function () {
  const searchTextField = document.getElementById("search-text").value;
  loadMeals(searchTextField);
  document.getElementById("search-text").value = "";
});

const loadMealDetail = idMeal =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(response => response.json())
    .then(data => showMealData(data.meals))
}

const showMealData = dataMeals =>{
    console.log(dataMeals[0].strMealThumb)
    const h3 = document.getElementById('h3');
    h3.innerText =  dataMeals[0].strMeal
    const p = document.getElementById('p');
    p.innerHTML = `
        <h4>Catagory : ${dataMeals[0].strCategory}</h4>
        <h4>Area : ${dataMeals[0].strArea}</h4>
        <img src="${dataMeals[0].strMealThumb}" id="img" alt="">
    `
}

loadMeals("fish");
