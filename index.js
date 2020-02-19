var employees = new Array();
var idArray = new Array();

function Employee(firstName, lastName, hireDate, id, department) {
   this.firstName = firstName;
   this.lastName = lastName;
   this.hireDate = hireDate;
   this.id = id;
   this.department = department;
}

function createEmp() {
   var output = document.getElementById("js-output");
   var tempId = Math.random() * 1000;
   var employeeID = tempId.toPrecision(8).replace(".", "");

   while (idArray.includes(employeeID)) {
      var newTempId = Math.random() * 1000;
      employeeID = newTempId.toPrecision(8).replace(".", "");
   }

   idArray.push(employeeID);
   //    console.log(idArray[0]);

   var fname = document.getElementById("first-name");
   var lname = document.getElementById("last-name");
   var d = new Date();
   var num = employeeID;
   var dep = document.getElementById("dept");

   var newEmp = Employee(fname, lname, d, num, dep);

   employees.push(newEmp);
   console.log(JSON.stringify(employees));

   output.innerHTML =
      "<p>Name: " +
      lname.value +
      ", " +
      fname.value +
      "<br>Department: " +
      dep.value +
      "<br>Employee ID: " +
      num +
      "<br>Hire Date: " +
      d +
      "</p>";
}
var myForm = document.getElementById("my-form");
