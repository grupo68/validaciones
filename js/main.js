
//nombre = 5;
var myarreglo = [
    {"usuario": "ana", "contraseña": "1122"},
    {"usuario": "juan", "contraseña": "1122"},
    {"usuario": "mario", "contraseña": "1122"}
];

var personas=["carlos", "javier","paula","mariana","jose"];

const j = 0;
var m = 0;


function ok(){
    var nombre ='hola'; 
    let cc = 123;
     cc = true;

    nombre = "hola \"mundo\"";    
    console.log(nombre + ' '+ cc + ' '+ j);
    
    
}

function ww(){
    var numero= prompt('dame un numero') ;

    var arreglo = ["carlos", "daniel", 12, "alejandro"];
   
    switch(parseInt(numero)){
        case 1:
            alert('el numero es: 1');
            break;
        case 2:
            alert('el numero es: 2');
            break;   
        case 3:
            alert('el numero es: 3');
            break;  
        case 4:     
            alert('el numero es: 4');
            break;  
        case 5:
            alert('el numero es: 5');
            break;       
    }
    // if(numero > 4){
    //     alert('es mayor que 4');
    // }else if(numero < 4){
    //     alert('no es mayor que 4');
    // }else{
    //     alert('es igual a 4');
    // } 

}

function bc(){
    //for(i =0; i < myarreglo.length; i++){
        for(var i =0 in myarreglo){
            console.log("for in"+i)
        //console.log("for in: "+ myarreglo[i]['usuario']);
    }

    
    for(var i of personas){

        console.log("for of: "+i)
        //m = m+1;
    }
}

