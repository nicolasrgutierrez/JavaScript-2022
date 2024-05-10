// JavaScript Object
let employee = {
    firstName: "David",
    lastName: "Tucker",
    birthDate: new Date("January 1, 1982"),
    numYearsEmployment: 7,
    department: "Engineering",
    title: "CTO",
    isActive: true,
    salay: 100000
};

// Convert to JSON String
let jsonValue = JSON.stringify(employee);
console.log(jsonValue);
jsonValue = JSON.stringify(employee, null, 2);
console.log(jsonValue);

// Convert Value Back to Object

let newEmployee = JSON.parse(jsonValue);
console.log(newEmployee);

// Writing JSON directly
let jsonString = `{
    "firstName": "Elizabeth",
    "lastName": "Jones" 
}`;
let obj = JSON.parse(jsonString);
console.log(obj);

// Improperly formatted JSON
let notJSON = "hello!";
let newObj = JSON.parse(notJSON);
