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
   var counter = 0;

   for (i = 0; i < employees.length; i++) {
      var obj2 = JSON.parse(JSON.stringify(employees[i]));
      if (
         fname.value === obj2.firstName &&
         lname.value === obj2.lastName &&
         dep.value === obj2.department
      ) {
         output.innerHTML = "<p>User already exists.</p>";
         console.log("got here");
      } else {
         counter++;
      }
   }
   if (
      (fname.value === "" || lname.value === "") &&
      counter === employees.length
   ) {
      output.innerHTML = "<p>Please fill in the form.</p>";
   } else if (counter === employees.length) {
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
   console.log("Counter -> " + counter);
   console.log("Employees array -> " + employees.length);
}
var myForm = document.getElementById("my-form");
