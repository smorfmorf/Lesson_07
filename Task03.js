function addPrefix(names, prefix) {
    const pref = names.map((name) => `${prefix} ${name}`);
    console.log(pref);
    return pref;
}

const names = [
    "Noah",
    "Liam",
    "Mason",
    "Jacob",
    "Robot",
    "William",
    "Ethan",
    "Michael",
    "Alexander",
];
const prefixedNames = addPrefix(names, "Mr");

console.log(prefixedNames);
