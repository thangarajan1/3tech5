function sendEmail(){
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "saaralk.t.rajan2@gmail.com",
      Password: "51D571ADE465C966FD436FA9779B142D1271",
      To: "saaralktrajan2261@gmail.com",
      From: document.getElementById("email").value,
      Subject: "New Careers Form",
      Body: "And this is the body",
    }).then((message) => alert("Message Send"));
}