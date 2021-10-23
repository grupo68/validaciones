function ww(){ //busca una palabra en un campo de texto
    var x = RegExp(/sol/i);
    var y = document.getElementById('palabra');

    if(x.test(y.value)){
        alert('si esta');
    }else{
        alert('no esta');
    }
}

function ww2(){//busca una letra entre un campo determinado en el texto 
    var x = RegExp(/[a-e]/i);
    var y = document.getElementById('letra');

    if(x.test(y.value)){
        alert('si esta');
    }else{
        alert('no esta');
    }

}

function ww3(){
    var x = RegExp(/[xz]/i);
    var y = document.getElementById('l_establecidas');

    if(x.test(y.value)){
        alert('si esta');
    }else{
        alert('no esta');
    }
}

function correo(){
    var x = RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[com|co|org|es]+$/);
    var y = document.getElementById('correo');

    if(x.test(y.value)){
        alert('si esta');
    }else{
        alert('no esta');
    }
}

function contraseña(){
    var x = RegExp(/[A-Z]+\w{5,}/)
    var y = document.getElementById('contraseña');

    if(x.test(y.value)){
        alert('si cumple');
    }else{
        alert('no cumple');
    }
}