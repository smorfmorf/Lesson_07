function foo(allStudents, failedStudents) {
    return allStudents.filter((person) => !failedStudents.includes(person));
}

const allStudents = [
    "Иванов",
    "Петров",
    "Сидоров",
    "Кузнецов",
    "Смирнов",
    "Попов",
    "Соколов",
];
const failedStudents = ["Сидоров", "Смирнов", "Попов"];

const ace = foo(allStudents, failedStudents);
console.log("ace: ", ace);
