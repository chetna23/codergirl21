let person = {
    name: "Tintin",
    age: 22,
    id: 1234,
    country: "Belgium",
}
let tintin = {
    ...person,
    sex: "M"
}
person.state="MO";
console.log(person);
console.log(tintin);