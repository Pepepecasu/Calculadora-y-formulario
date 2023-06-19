
//se crea el archivo donde se van a incluir los calculos 
//function ops() { //la funcion ops es para hacer las operaciones 
    //let Lii= document.getElementById(Li).value;
    //let ai= document.getElementById(a).value; //se relacionan las tres variables con los inputs 
    //let Δti= document.getElementById(Δt).value;

    //let mtv= document.createElement('p'); //se crea un parrafo
    //let as= ai*Δti; //se crea una variable donde se haga primero el procedimiento de dos valores
    //mtv.innerHTML = parseInt(Lii) * 1 * parseInt(as); //se hacen los dos procedimientos mayores 
    //document.body.append(mtv);
//}
function ops() {
    let div = document.createElement('div');
    div.className = "alert";
    let Lii= document.getElementById(Li).value;
    let ai= document.getElementById(a).value;
    let Δti= document.getElementById(Δt).value;

    div.innerHTML = parseInt(Lii) * 1 + parseInt(ai) * parseInt(Δt) + "m";
    document.body.append(div);

    
}






function res() {  
            
    let div = document.createElement('div'); //se declara la variable del div 
div.className = "alert"; //se asigna una clase que crea un div en el html para mostrar el resultado
let k1= document.getElementById('k').value;
let x1=document.getElementById('x').value;//se relacionan las variables con los input
div.innerHTML = parseInt(k1) * parseInt(x1); //se hace la operacion 

document.body.append(div, "N/m");//muestra la operaicion en el div 
}






function ees() {  
            //operacion de electromagnetismo
    let div = document.createElement('div'); //se declara la variable del div 
div.className = "alert"; //se asigna una clase que crea un div en el html para mostrar el resultado
let b1= document.getElementById('B').value;
let s1=document.getElementById('S').value;//se relacionan las variables con los input
let cos1=document.getElementById('cos').value
div.innerHTML = parseInt(b1) * parseInt(s1) * parseInt(cos); //se hace la operacion 

document.body.append(div, "N/m");//muestra la operaicion en el div 
}
