
function sendData(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let dob = document.getElementById("dob").value;
    let address = document.getElementById("address").value;

   let gender = document.querySelector("input[name='gender']:checked");
   let education = document.querySelectorAll("input[name='education']:checked");

   let subject = document.getElementById("subject").value;


    let array = [];

   for(let i = 0; i < education.length; i++){
    array.push(education[i].value);
   }


   let output = "Name: " + name +"\n" + 
   "Email: " + email +"\n" + "Password: " + password +"\n" +
   "DOB: " + dob +"\n" +
   "Gender: " + gender.value +"\n" + "Education: " + array +"\n" + "Subject: " + subject +"\n" + "Address: " + address;




    let newWindow = window.open('', '_blank');
    newWindow.document.writeln("<pre>" + output + "</pre>");
}


let myForm = document.getElementById("myForm");
myForm.addEventListener("submit", sendData);


