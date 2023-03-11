function sendEmail() {
    var recipient = "maxpopovschii@gmail.com"
    var subject = document.getElementById("subject").value;
    var body = document.getElementById("body").value;
    var mailtoLink = "mailto:" + recipient + "?subject=" + subject + "&body=" + body;
    window.location.href = mailtoLink;
  }
  
