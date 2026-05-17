// form ko submit karne ke liye function hai
function submitForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let course = document.getElementById("course").value;
  let city = document.getElementById("city").value;

  // yahan dekh rhy agar koi empty field hai to alert show karega
  if (!name || !email || !course || !city) {
    alert("Please fill all fields!");
    return;
  }

  // Data yahan show karne ke liye hai
  document.getElementById("output").innerHTML =
    "Name: " + name + "<br>" +
    "Email: " + email + "<br>" +
    "Course: " + course + "<br>" +
    "City: " + city;

  // Switch case hai ye course ke liye
  switch (course.toLowerCase()) {
    case "javascript":
      alert("You selected JavaScript!");
      break;
    case "python":
      alert("You selected Python!");
      break;
    default:
      alert("Course saved!");
    }
}

// reset button ke liye function
function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("course").value = "";
  document.getElementById("city").value = "";
  document.getElementById("output").innerHTML = "";
}

  function darkMode(){
    document.body.style.backgroundColor="Black";
    document.body.style.color="White";
  }