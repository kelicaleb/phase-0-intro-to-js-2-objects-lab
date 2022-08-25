const employee = {
    name: "Caleb",
    streetAdress: "11 Broadway"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {employee}
    newEmployee[key] = value;
    return newEmployee;
}
const newEmployee = updateEmployeeWithKeyAndValue(
    employee, 
    "name","Sam"
)
console.log(newEmployee.name);
console.log(employee.streetAdress);
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    const employ = employee;
    employ[key] = value;
    return employ;
}
const newName = destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
    "name", "keli"
)
const newStreetAdress = destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
    "streetAdress", "12 Broadway"
)
console.log(employee.name)
console.log(employee.streetAdress)
function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {employee};
    newEmployee[key] = delete employee.name;
    return newEmployee;
}
const deleteEmployee = deleteFromEmployeeByKey(
    employee,
    "name", "Caleb"
)
console.log(deleteEmployee.name);
function destructivelyDeleteFromEmployeeByKey(employee, key){
    const newEmploy = employee;
    newEmploy[key] = delete employee.name;
    return newEmploy
}
const deleteEmploy = destructivelyDeleteFromEmployeeByKey(
    employee
)
console.log(employee.name)
