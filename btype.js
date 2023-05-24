function sendMail() {
    var params = {
         name: document.getElementById("name").value ,
         email: document.getElementById("email").value,
         message: document.getElementById("message").value,
    };

    const serviceID = "service_mnfht9d";
    const templateID = "template_a1l6si8"

   emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("you message send successfully");
    })
    .catch((err) => console.log(err));
}
