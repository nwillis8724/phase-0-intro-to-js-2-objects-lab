const employee ={
    
    name: `Sam`,
    
    streetAddress: `1500`,
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {...employee}
   
    newObj[key] = value
    
    return newObj
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.name = `Sam`

    employee.streetAddress = `12 Broadway`

    return employee
}

function deleteFromEmployeeByKey(employee, key, value){
    const newObj = {...employee}

    delete newObj.name

    return newObj
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    delete employee.name

    return employee
}
