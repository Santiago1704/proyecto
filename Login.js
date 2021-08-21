mi_espacio= window.localStorage;
////////////////////////////////////////////////////////////////
function Procesar() {

  let user=document.getElementById('txtusuario').value
  let pass=document.getElementById('txtcontrasena').value
  let estado=false;

  /////////////////ejemplo 1--> lectura de un json-->
fetch('http://localhost/proyec/js/usuarios.json')
.then(response=>response.json())
.then(datos=>{
   for(i=0;i<datos.length;i++){
    if(user==datos[i].usuario&&pass==datos[i].contrasena){
      alert("Bienvenido señor "+user)
      estado=true;
      mi_espacio.setItem('user',user);
      window.location='../index.html';
      break;
    }
    else {
      estado=false;
    }
  }
  if(estado==false){
    alert("Usuario y/o contraseña incorrecto")
  }
  
  
});
  
}

function mostrar() {

var usuario = mi_espacio.getItem('user');
document.getElementById('info').innerHTML='<b>Bienvenido usuario '+usuario+ ' </b>';
}
