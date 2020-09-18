//Array Containing 5 objects
let employees = [
    {
        name: "Ram",
        age: 24,
        city: "Mumbai",
        salary: 25000,
    },
    {
        name: "Shyam",
        age: 25,
        city: "Pune",
        salary: 35000,
    },
    {
        name: "Seeta",
        age: 26,
        city: "Delhi",
        salary: 20000,
    },
    {
        name: "Geetika",
        age: 24,
        city: "Bangalore",
        salary: 30000,
    },
    {
        name: "Saurabh",
        age: 25,
        city: "Mumbai",
        salary: 40000,
    },
];

//Function to display all the objects in a Table
function displayEmployee(emp)
{
    let tdata = "";
    emp.forEach(function(employee, index){
        let currentdata = `<tr>
                            <td>${index+1}</td>
                            <td>${employee.name}</td>
                            <td>${employee.age}</td>
                            <td>${employee.city}</td>
                            <td>${employee.salary}</td>
                            <td><button onclick="deleteEmployee(${index})">Delete</button></td>
                           </tr>`
        tdata +=currentdata;
    });
    document.getElementsByClassName("tdata")[0].innerHTML = tdata;
}

displayEmployee(employees);

function deleteEmployee(index)
{
    employees.splice(index, 1);
    displayEmployee(employees);
}

function searchByName()
{
    let nameValue = document.getElementById('searchName').value;
    let nameData = employees.filter(function(emp){
      return emp.name.toLowerCase().indexOf(nameValue.toLowerCase()) != -1;
    });
   displayEmployee(nameData);
}
function searchByCity()
{
    let cityValue = document.getElementById('searchCity').value;
    let cityData = employees.filter(function(employee){
      return employee.city.toLowerCase().indexOf(cityValue.toLowerCase()) != -1;
    });
   displayEmployee(cityData);
}
