
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
   // Loop through tablinks and remove the "active-link" class
   for (var tablink of tablinks) {
       tablink.classList.remove("active-link");
   }

   // Loop through tabcontents and remove the "active-tab" class
   for (var tabcontent of tabcontents) {
       tabcontent.classList.remove("active-tab");
   }

   // Add the "active-link" class to the clicked tablink
   event.currentTarget.classList.add("active-link");

   // Show the corresponding tabcontent
   var selectedTab = document.getElementById(tabname);
   if (selectedTab) {
       selectedTab.classList.add("active-tab");
   }
}
//----------initialize mixitup
var mixer=mixitup('.portfolio-gallery',{
selectors: {
    target:'.portfolio-box'
},
animation: {
    duration: 500
}
});

function submitForm() {
    var name = document.getElementById("name").value;
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone-no").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var formData = {
        name: name,
        phone:phone,
        email: email,
        message: message
    };

    // Send form data to server using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/submit_form", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Form submitted successfully
            alert("Form submitted successfully!");
            // Optionally, you can clear the form fields after successful submission
            document.getElementById("first name").value = "";
            document.getElementById("last name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone-no").value = "";
            document.getElementById("send message").value = "";
        }
    };
    xhr.send(JSON.stringify(formData));
}
//----------------------------initialize itembox

    
