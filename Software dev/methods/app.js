// const person = {
//     name: "Bende",
//     age: 70,
//     favouriteColour: "black",
//     sayHello: function () {
//         console.log("Hello Methods!");
//     },
// };

// person.sayHello();

// passing arguments
const person = {
    name: "Bende",
    age: 70,
    favouriteColour: "black",
    sayHello: function (name) {
        console.log("Hello " + name + "!");
    },
};

person.sayHello("Bende");
