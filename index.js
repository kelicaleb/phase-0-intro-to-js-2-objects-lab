var employee = 
    {
        name: "Sam",
    }

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {...employee}
    newObj[key] = value;
    return newObj
}console.log(updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway'))
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee 
}
function deleteFromEmployeeByKey(employee, key){
    var newObj = {...employee}
    delete newObj[key]
    return newObj
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}