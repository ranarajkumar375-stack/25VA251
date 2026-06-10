let employees = [];

// Add Employee
function addEmployee() {

    let name = document.getElementById("name").value;
    let empId = document.getElementById("empId").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let department = document.getElementById("department").value;

    if (name === "" || empId === "" || department === "" || isNaN(salary)) {
        alert("Please fill all fields!");
        return;
    }

    let employee = {
        name: name,
        empId: empId,
        salary: salary,
        department: department
    };

    employees.push(employee);

    alert("Employee Added Successfully");

    // Clear Inputs
    document.getElementById("name").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("department").value = "";
}


// Display All Employees
function displayEmployees() {

    let output = document.getElementById("output");

    if (employees.length === 0) {
        output.innerHTML = "<h3>No Employees Found</h3>";
        return;
    }

    let result = "<h3>All Employees</h3>";

    for (let emp of employees) {

        result += `
        <div class="employee-card">
            <p><b>Name:</b> ${emp.name}</p>
            <p><b>ID:</b> ${emp.empId}</p>
            <p><b>Salary:</b> ₹${emp.salary}</p>
            <p><b>Department:</b> ${emp.department}</p>
        </div>
        `;
    }

    output.innerHTML = result;
}


// Filter Salary > 50000
function filterEmployees() {

    let output = document.getElementById("output");

    let filtered = employees.filter(emp => emp.salary > 50000);

    if (filtered.length === 0) {
        output.innerHTML = "<h3>No Employees with Salary Greater than 50000</h3>";
        return;
    }

    let result = "<h3>Employees with Salary > 50000</h3>";

    filtered.forEach(emp => {

        result += `
        <div class="employee-card">
            <p><b>Name:</b> ${emp.name}</p>
            <p><b>Salary:</b> ₹${emp.salary}</p>
        </div>
        `;
    });

    output.innerHTML = result;
}


// Total Salary
function totalSalary() {

    let total = 0;

    for (let emp of employees) {
        total += emp.salary;
    }

    document.getElementById("output").innerHTML =
        `<h3>Total Salary Payout = ₹${total}</h3>`;
}


// Average Salary
function averageSalary() {

    if (employees.length === 0) {

        document.getElementById("output").innerHTML =
            "<h3>No Employees Available</h3>";

        return;
    }

    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);

    let avg = total / employees.length;

    document.getElementById("output").innerHTML =
        `<h3>Average Salary = ₹${avg.toFixed(2)}</h3>`;
}


// Count by Department
function countDepartment() {

    let dept = prompt("Enter Department Name");

    if (!dept) {
        return;
    }

    let count = 0;

    for (let emp of employees) {

        if (emp.department.toLowerCase() === dept.toLowerCase()) {
            count++;
        }
    }

    document.getElementById("output").innerHTML =
        `<h3>${dept} Department Employee Count = ${count}</h3>`;
}