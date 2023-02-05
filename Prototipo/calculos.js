
//se crea el archivo donde se van a incluir los calculos 
function ops() { //la funcion ops es para hacer las operaciones 
    let Lii= document.getElementById(Li).value;
    let ai= document.getElementById(a).value; //se relacionan las tres variables con los inputs 
    let Δti= document.getElementById(Δt).value;

    let mtv= document.createElement('p'); //se crea un parrafo
    let as= ai*Δti; //se crea una variable donde se haga primero el procedimiento de dos valores
    mtv.innerHTML = parseInt(Lii) * 1 * parseInt(as); //se hacen los dos procedimientos mayores 
    document.body.append(mtv);
}