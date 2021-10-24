//Page onload animation

function pageOnLoadAnimation() {
    document.body.animate(
        [
            { opacity: "0%" },
            { opacity: "100%" }
        ], 1500,
    )
}

document.body.addEventListener("load", pageOnLoadAnimation());

//Passwords

window.onload = function(){

const passwords = ["Tree", "Notebook", "Bottledwater", "Camera", "Mask", "Ordinary", "Beautiful", "Popsicle", "Fan", "Alcohol", "Glassheart", "Sekret", "TheOrdinary", "Starbucks", "Hsinchu", "Comb", "SprayBottle", "PencilBox", "ApplePencil", "Sponge", "Nivea", "Muji", "ShavedIce", "PaperBag", "Lipstick", "Soap", "Coffee", "PotatoChips", "USBwire"];

var userpassinput_1 = document.getElementById("project_passwordinput_1").value;
var userpassinput_2 = document.getElementById("project_passwordinput_2").value;

function checkPassword_1() {
     if (document.getElementById("project_passwordinput_1").value == passwords[22]) {
        window.location.href="project_svc.html";
    } else if (document.getElementById("project_passwordinput_1").value === ""||userpassinput_1 === null) {
        document.getElementsByClassName("project_entrance_message_empty")[0].animate(passwordInputMessageKeyframes, passwordInputMessageOptions);
    } else {
        document.getElementsByClassName("project_entrance_message_error")[0].animate(passwordInputMessageKeyframes, passwordInputMessageOptions);
    }
}

function checkPassword_2() {
    if (document.getElementById("project_passwordinput_2").value == passwords[11]) {
        window.location.href="project_sekretmeeting.html";
    } else if (document.getElementById("project_passwordinput_2").value === ""||userpassinput_2 === null) {
        document.getElementsByClassName("project_entrance_message_empty")[1].animate(passwordInputMessageKeyframes, passwordInputMessageOptions);
    } else {
        document.getElementsByClassName("project_entrance_message_error")[1].animate(passwordInputMessageKeyframes, passwordInputMessageOptions);
    }
}

var passwordInputMessageKeyframes = 
        [
            { opacity: "0%", offset: 0},
            { opacity: "100%", offset: 0.08},
            { opacity: "100%", offset: 0.85},
            { opacity: "0%", offset: 1}
        ]

var passwordInputMessageOptions = 
{
    duration: 1500,
    easing: "ease-in-out"
}

document.getElementById("project_passwordbutton_1").addEventListener('click', checkPassword_1);
document.getElementById("project_passwordbutton_2").addEventListener('click', checkPassword_2);
}
