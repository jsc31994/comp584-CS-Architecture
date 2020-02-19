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

   if (fname.value === "" || lname.value === "") {
      output.innerHTML = "<p>Please fill in the form.</p>";
   } else {
      var newEmp = Employee(fname, lname, d, num, dep);

      var obj = {
         firstName: fname.value,
         lastName: lname.value,
         hireDate: d,
         employeeId: num,
         department: dep.value
      };

      employees.push(obj);
      console.log(JSON.stringify(employees));

      output.innerHTML =
         "<p>Name: " +
         obj.lastName +
         ", " +
         obj.firstName +
         "<br>Department: " +
         obj.department +
         "<br>Employee ID: " +
         obj.employeeId +
         "<br>Hire Date: " +
         obj.hireDate +
         "<br>Total Employees: " +
         employees.length +
         "</p>";
   }
}
var myForm = document.getElementById("my-form");
