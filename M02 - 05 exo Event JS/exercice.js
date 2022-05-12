function pasteInputText(input) {
    let texte = input.value;
    let p1 = document.getElementById("p1");
    p1.innerHTML = texte;
}

function checkPassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let span = document.getElementById("message");
    let inputInscrire = document.getElementById("inputInscrire");

    if(password == confirmPassword){
        span.innerHTML = "Les mot de passe sont égaux";
        span.style.color = "green";
        inputInscrire.disabled = false;
    } else {
        span.innerHTML = "Les mot de passe ne sont pas égaux";
        span.style.color = "red";
        inputInscrire.disabled = true;
    }
}

function show(image, idInput) {
    image.setAttribute("src", "eye-open.jpg");
    let input = document.getElementById(idInput);
    input.setAttribute("type","text");
}

function hide(image, idInput) {
    image.setAttribute("src", "eye-closed.jpg");
    let input = document.getElementById(idInput);
    input.setAttribute("type","password");
}