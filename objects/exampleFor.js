let person = {
    name: "Tintin",
    age: 22,
    id: 1234,
    country: "Belgium",
    email: "tintinthereporter@gmail.com",
    hobbies: ["solving mysteries", "playing with Snowy", "meeting Captain Haddock"]
}

for (item in person) {
    console.log(item + ': ' + person[item]);
}