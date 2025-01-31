// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//variables de lista vacío
let amigos = [];
//Creamos la función que nos permite detectar que sean letras las que reconozca
function agregarAmigo() {
  //Identificamos el lugar donde se escribirán los nombres
  let inputAmigo = document.getElementById("amigo").value;
  //Primera condición que no debe aceptar el listado
  if(inputAmigo === '' || amigos.includes(inputAmigo)){
      alert('Favor ingrese nombre valido');
    }else{    
        //Volvemos a iterar la verificar que no se ingresen numero  
        if(isNaN(inputAmigo)){
            amigos.push(inputAmigo);

        }else{
          alert('Ingresaste un número, ingresa un nombre valido');
      
        }
    }
  //Función para actualizar la lista cuando ingresamos un amigo
  actListaAmigos();
  return;
  //Funcion Para Limpiar Caja
  limpiarcaja();
  return;

}

//Limpiamos la caja luego de ingresar el nombre de un amigo
function limpiarcaja(){

document.getElementById("amigo").value ='';
return
}
//Función para actualizar y mostrar la lista de amigo según el nombre ingresado
function actListaAmigos(){
  let listaHTML = document.getElementById("listaAmigos");
  listaHTML.innerHTML = "";
  for(let i = 0 ; i < amigos.length; i++){
      let list1 = document.createElement('li');
        list1.textContent= amigos[i];
        listaHTML.appendChild(list1);
  }
return
}
//Con la lista de amigos, se realiza el sorteo según la longitud de la lista
  function sortearAmigo(){
    //Comprobaciones previas de que la lista no este vacía y que tenga mas de un nombre
  if(amigos.length === 0){
    alert("La lista está vacio");
  }
  else{
      if(amigos.length === 1){
          alert("Debes de ingresar al menos dos nombres de amigos para sortear");
      }
      else{
        //Pasamos al sorteo como tan con math.floor & math.random
        let Naleatorio = Math.floor(Math.random()*amigos.length);
          let Ganadorsorteo = document.getElementById('resultado');
          let AmigoGanador = document.getElementById('parrafoSorteado');
          Ganadorsorteo.innerHTML = amigos[Naleatorio];
          amigos.splice(Naleatorio, 1);
          actListaAmigos();
      }
  }
}
