// const user = {
//     id : 1,
//     name : 'Mahfuz Hasan',
//     job : 'actor',

// }

// const stringyfied = JSON.stringify(user);
// console.log(stringyfied);

const shop = {
    owner : 'Alia',
    address : {
        street : 'kochukhet 4/6-a',
        city : 'dhaka',
        country : 'BD'
    },
    products : ['laptop','ac','fridge','monitor'],
    revenue : 50000,
    isOpen : true,
    isNew : false,
}

const stringyfied = JSON.stringify(shop);
console.log(stringyfied);
