var employees = new Array();
var idArray = new Array();
var out2 = document.getElementById("navigator");
var sBrowser,
   sUsrAg = navigator.userAgent;

function Employee(firstName, lastName, hireDate, id, department) {
   this.firstName = firstName;
   this.lastName = lastName;
   this.hireDate = hireDate;
   this.id = id;
   this.department = department;
}

//Creates employee only if they are not already in

function createEmp() {
   var output = document.getElementById("js-output");

   //creates the random unique id
   var tempId = Math.random() * 1000;
   var employeeID = tempId.toPrecision(8).replace(".", "");

   //makes sure the id is truly unique
   while (idArray.includes(employeeID)) {
      var newTempId = Math.random() * 1000;
      employeeID = newTempId.toPrecision(8).replace(".", "");
   }

   //id is stored in out id array
   idArray.push(employeeID);
   //    console.log(idArray[0]);

   //creates variables for our values
   var fname = document.getElementById("first-name");
   var lname = document.getElementById("last-name");
   var d = new Date();
   var num = employeeID;
   var dep = document.getElementById("dept");
   var counter = 0;

   for (i = 0; i < employees.length; i++) {
      var obj2 = JSON.parse(JSON.stringify(employees[i]));

      //make sure our entry does not alreay exist
      if (
         fname.value === obj2.firstName &&
         lname.value === obj2.lastName &&
         dep.value === obj2.department
      ) {
         alert("FAILURE: User already exists.");
         output.innerHTML = "<p>User already exists.</p>";
         return false;
      } else {
         counter++;
      }
   }
   //make sure the user enters something
   if (
      (fname.value === "" || lname.value === "") &&
      counter === employees.length
   ) {
      output.innerHTML = "<p>Please fill in the form completely. </p>";
      return false;
   }
   //creates the employee json object and sends it to our page
   else if (counter === employees.length) {
      var newEmp = Employee(fname, lname, d, num, dep);

      var obj = {
         //this is the json object i made the "firstName" attribute== to the input
         firstName: fname.value,
         lastName: lname.value,
         hireDate: d,
         employeeId: num,
         department: dep.value
      };

      console.log("Our current JSON Object:");
      console.log(obj);
      employees.push(obj);
      console.log("Our list of employees ==> " + JSON.stringify(employees));

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

      showBrowser();

      //sending the data into the server
      //code would cause error

      // $.ajax({
      //    type: "POST",
      //    dataType: "json",
      //    url: "employees.php",
      //    data: { myData: obj },
      //    contentType: "application/json; charset=utf-8",
      //    success: function(data) {
      //       alert("Items added");
      //    },
      //    error: function(e) {
      //       console.log(e.message);
      //       alert("FAILURE");
      //    }
      // });

      return false;
   }
   //    console.log("Counter -> " + counter);
   //    console.log("Employees array -> " + employees.length);
}
console.log(employees);
var myForm = document.getElementById("my-form");

// The order matters here, and this may report false positives for unlisted browsers.

function showBrowser() {
   if (sUsrAg.indexOf("Firefox") > -1) {
      sBrowser = "Mozilla Firefox";
      // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
   } else if (sUsrAg.indexOf("SamsungBrowser") > -1) {
      sBrowser = "Samsung Internet";
      // "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G955F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.4 Chrome/67.0.3396.87 Mobile Safari/537.36
   } else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
      sBrowser = "Opera";
      // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
   } else if (sUsrAg.indexOf("Trident") > -1) {
      sBrowser = "Microsoft Internet Explorer";
      // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
   } else if (sUsrAg.indexOf("Edge") > -1) {
      sBrowser = "Microsoft Edge";
      // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
   } else if (sUsrAg.indexOf("Chrome") > -1) {
      sBrowser = "Google Chrome or Chromium";
      // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
   } else if (sUsrAg.indexOf("Safari") > -1) {
      sBrowser = "Apple Safari";
      // "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
   } else {
      sBrowser = "unknown";
   }

   out2.innerHTML = "<p>Using: " + sBrowser + "</p>";
}

function init() {
   "use strict";
   document.getElementById("my-form").onsubmit = createEmp;
}

window.onload = init;
