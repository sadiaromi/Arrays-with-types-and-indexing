//2: Define an array named employees containing employee objects
var employees = [
    { name: "Sadia", hoursWorked: 10, hourlyRate: 20, salary: 10 },
    { name: "Sara", hoursWorked: 22, hourlyRate: 12, salary: 20 },
    { name: "Sana", hoursWorked: 12, hourlyRate: 10, salary: 30 },
    { name: "Sidra", hoursWorked: 20, hourlyRate: 16, salary: 40 }
];
//3: Implement the calculateSalary function for employee based on hours worked and hourly rate
function calculateSalary(employee) {
    // Calculate basic salary
    var basicSalary = employee.hoursWorked * employee.hourlyRate;
    //4: if employee worked 20 hours  or more, apply bonus apply 10% bonus to their salary
    if (employee.hoursWorked >= 20) {
        basicSalary += basicSalary * 0.10;
        console.log("Bonus is given");
    }
    //If we  update the salary property of the employee
    employee.salary = basicSalary;
    // Return the final salary
    return basicSalary;
}
// Calculate the salary for each employee in the array
for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
    var emp = employees_1[_i];
    calculateSalary(emp);
}
// Final  results
for (var _a = 0, employees_2 = employees; _a < employees_2.length; _a++) {
    var emp = employees_2[_a];
    console.log("Employee: ".concat(emp.name, ", Salary: ").concat(emp.salary.toFixed(2)));
}
;
