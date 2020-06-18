function formul()
        {
            //Variables
            var form = document.getElementById("form");
            var result = document.getElementById("result");
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var phone = document.getElementById("phone").value;
            var subject = document.getElementById("subject").value;
            var comment = document.getElementById("comment").value;

            //Codes
            console.log(name);
            console.log(email);
            console.log(phone);
            console.log(subject);
            console.log(comment);
            form.style.transform = "translate(150%, -50%)";
            result.style.transform = "translateX(0)";
            $("#userpren").text(name);
            $("#mail").text(email);
            $(".name").text(name);
            $(".email").text(email);
            $(".phone").text(phone);
            $("#sujet").text(subject);
            $("#commentaires").text(comment);
        }      

function back(){
    //Variables
    var form = document.getElementById("form");
    var result = document.getElementById("result");

    //codes
    form.style.transform = "translate(-50%, -50%)";
    result.style.transform = "translateX(-100%)";
}
function finish(){
    var node = document.getElementById("printnode");
    node.style.display = "none";
    window.print();
    node.style.display = "flex";
  }