// Sample employee object for testing purposes
var employee = {
    name: "John Doe",
    title: "Software Engineer",
    age: 30,
  };
  
  // Function to update an employee with the given key and value (non-destructive)
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // Function to update an employee with the given key and value (destructive)
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete a key from a clone of an employee (non-destructive)
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete a key from an employee (destructive)
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Export the functions for testing purposes
  module.exports = {
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey,
  };