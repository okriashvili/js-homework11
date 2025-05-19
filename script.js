function myFormFunc() {
    var forma = document.getElementsByName("form").value;
        var user = document.forms["form"]["text"].value;
        var pas = document.forms["form"]["password"].value;

        if(user == "") {
            var textMSG = document.getElementById("textMSG");
            var invalidMSG = document.getElementById("invalid")
            invalidMSG.textContent = "Invalid username or password. please try again"
            textMSG.textContent = "Enter your username!";
            textMSG.style.color = "red";
            textMSG.style.fontSize = "12px";
            invalidMSG.style.color = "red";
            invalidMSG.style.fontSize = "12px";
            invalidMSG.style.marginBottom = "0px"
            var bor =  document.getElementById("text");
            bor.style.borderColor = "red"
        }else if (pas == "") {
            var passMSG = document.getElementById("passMSG");
            passMSG.textContent = "Enter your password!";
            passMSG.style.color = "red";
            passMSG.style.fontSize = "12px";
            var bor =  document.getElementById("password");
            bor.style.borderColor = "red"
            var textMSG = document.getElementById("textMSG").textContent = "";


            
        }else{
            var scs = document.getElementById("scs");
            window.alert("წარმატებით გაიარეთ რეგისტრაცია");
            document.location.href = 'https://www.facebook.com';
            var passMSG = document.getElementById("passMSG").textContent = "";
        };
        return false;
}