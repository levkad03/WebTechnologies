function validateForm(){
    var x = document.forms["MyForm"]["fname"].value;
    if(x == ""){
        alert("Имя должно быть введено");
        return false;
    }
    var v = document.querySelector('#name');
    var zapret = /^[А-ЯЁ][а-яё]*$/;
    if(!zapret.test(x)){
        alert("Введите по новой имя");
        v.focus();
        v.select();
        return false;
    }
    var email = document.forms["MyForm"]["E-mail"].value;
    if(email == ""){
        alert("Введите электронную почту");
        return false;
    }
    var v1 = document.querySelector('#email');
    var regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if(!regex.test(email)){
        alert("Неправильно введена электронная почта");
        v1.focus();
        v1.select();
        return false;
    }
    var telnumber = document.forms["MyForm"]["telephone"].value;
    var regexfornumber = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    var v2 = document.querySelector('#phone');
    if(telnumber == ""){
        alert("Введите номер телефона");
        return false;
    }
    if(!regexfornumber.test(telnumber)){
        alert("Неправильно введен номер телефона");
        v2.focus();
        v2.select();
        return false;
    }
    var text = document.forms["MyForm"]["text"].value;
    if(text == ""){
        alert("Это поле должно быть заполненным");
        return false;
    }
}
