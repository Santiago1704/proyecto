
var divtabla=document.getElementById('cuadro')
var i=1;
var botonenviar=document.getElementById('btnagregar')
var botoneditar=document.getElementById('btneditar')
var botonrestar=document.getElementById ('btnrestar')
botoneditar.disabled = true;

var infoForm={}; 

function procesar() { 

var producto1=document.getElementById('txtbase').value
var producto2=document.getElementById('txtaltura').value

if(producto1=="" || producto2==""){
    alert("debe ingresar la informacion en todos los campos")
}else{
    var resultado= parseFloat(producto1)+ parseFloat(producto2);
 alert(resultado)



    infoForm ["id"]= i++;
    infoForm ["producto1"]= producto1;
    infoForm ["producto2"]= producto2;
    infoForm ["resultado"]= resultado;



var tabla = document.getElementById("mitabla");
    var nuevaFila = tabla.insertRow(tabla.lenght);

    cell1 = nuevaFila.insertCell(0);
    cell1.innerHTML = infoForm.id;

    cell2 = nuevaFila.insertCell(1);
    cell2.innerHTML = infoForm.producto1;

    cell3 = nuevaFila.insertCell(2);
    cell3.innerHTML = infoForm.producto2;

    cell4 = nuevaFila.insertCell(3);
    cell4.innerHTML = infoForm.resultado;

    cell4 = nuevaFila.insertCell(4);
    cell4.innerHTML =   `<a class="btn btn-warning mx-5 " onClick="onEdit(this)">Edit</a>
    <a class= "btn btn-danger " onClick="onDelete(this)">Delete</a>`;



 
 document.getElementById("miForm").reset();
 divtabla.style.display='';

}

}


function restar () {
    var producto1=document.getElementById('txtbase').value
    var producto2=document.getElementById('txtaltura').value

    if(producto1=="" || producto2==""){
        alert("debe ingresar la informacion en todos los campos")
    }else{
        var resultado= parseFloat(producto1) - parseFloat(producto2);
     alert(resultado)
    
    
    
        infoForm ["id"]= i++;
        infoForm ["producto1"]= producto1;
        infoForm ["producto2"]= producto2;
        infoForm ["resultado"]= resultado;
    
     var tabla = document.getElementById("mitabla");
     var nuevaFila = tabla.insertRow(tabla.lenght);

     cell1 = nuevaFila.insertCell(0);
     cell1.innerHTML = infoForm.id;

     cell2 = nuevaFila.insertCell(1);
     cell2.innerHTML = infoForm.producto1;

     cell3 = nuevaFila.insertCell(2);
     cell3.innerHTML = infoForm.producto2;

     cell4 = nuevaFila.insertCell(3);
     cell4.innerHTML = infoForm.resultado;

     cell4 = nuevaFila.insertCell(4);
     cell4.innerHTML =   `<a class="btn btn-warning mx-5 " onClick="onEdit(this)">Edit</a>
     <a class= "btn btn-danger " onClick="onDelete(this)">Delete</a>`;



 
   document.getElementById("miForm").reset();
   divtabla.style.display='';

    
    }
}

function multiplicar () {

    var producto1=document.getElementById('txtbase').value
    var producto2=document.getElementById('txtaltura').value

    if(producto1=="" || producto2==""){
        alert("debe ingresar la informacion en todos los campos")
    }else{
        var resultado= parseFloat(producto1) * parseFloat(producto2);
     alert(resultado)
    
    
    
        infoForm ["id"]= i++;
        infoForm ["producto1"]= producto1;
        infoForm ["producto2"]= producto2;
        infoForm ["resultado"]= resultado;
    
     var tabla = document.getElementById("mitabla");
     var nuevaFila = tabla.insertRow(tabla.lenght);

     cell1 = nuevaFila.insertCell(0);
     cell1.innerHTML = infoForm.id;

     cell2 = nuevaFila.insertCell(1);
     cell2.innerHTML = infoForm.producto1;

     cell3 = nuevaFila.insertCell(2);
     cell3.innerHTML = infoForm.producto2;

     cell4 = nuevaFila.insertCell(3);
     cell4.innerHTML = infoForm.resultado;

     cell4 = nuevaFila.insertCell(4);
     cell4.innerHTML =   `<a class="btn btn-warning mx-5 " onClick="onEdit(this)">Edit</a>
     <a class= "btn btn-danger " onClick="onDelete(this)">Delete</a>`;



 
   document.getElementById("miForm").reset();
   divtabla.style.display='';

    
    }
}

function dividir() {

    var producto1=document.getElementById('txtbase').value
    var producto2=document.getElementById('txtaltura').value

    if(producto1=="" || producto2==""){
        alert("debe ingresar la informacion en todos los campos")
    }else{
        var resultado= parseFloat(producto1) / parseFloat(producto2);
     alert(resultado)
    
    
    
        infoForm ["id"]= i++;
        infoForm ["producto1"]= producto1;
        infoForm ["producto2"]= producto2;
        infoForm ["resultado"]= resultado;
    
     var tabla = document.getElementById("mitabla");
     var nuevaFila = tabla.insertRow(tabla.lenght);

     cell1 = nuevaFila.insertCell(0);
     cell1.innerHTML = infoForm.id;

     cell2 = nuevaFila.insertCell(1);
     cell2.innerHTML = infoForm.producto1;

     cell3 = nuevaFila.insertCell(2);
     cell3.innerHTML = infoForm.producto2;

     cell4 = nuevaFila.insertCell(3);
     cell4.innerHTML = infoForm.resultado;

     cell4 = nuevaFila.insertCell(4);
     cell4.innerHTML =   `<a class="btn btn-warning mx-5 " onClick="onEdit(this)">Edit</a>
     <a class= "btn btn-danger " onClick="onDelete(this)">Delete</a>`;



 
   document.getElementById("miForm").reset();
   divtabla.style.display='';

    
    }


}



function onEdit(td){
    
    botoneditar.disabled = false;
    botonenviar.disabled = true;
    selectedRow = td.parentElement.parentElement;
    document.getElementById("txtbase").value = selectedRow.cells[1].innerHTML;
    document.getElementById("txtaltura").value = selectedRow.cells[2].innerHTML;
    

}





function actualizarfila() {
    producto1=document.getElementById('txtbase').value
    producto2=document.getElementById('txtaltura').value

    if(producto1=="" || producto2==""){
        alert("debe ingresar la informacion en todos los campos")
    }else{
        resultado= parseFloat(producto1)+ parseFloat(producto2);
    
        infoForm ["producto1"]= producto1;
        infoForm ["producto2"]= producto2;
        infoForm ["resultado"]= resultado;
        
       
        selectedRow.cells[1].innerHTML = infoForm.producto1;
        selectedRow.cells[2].innerHTML = infoForm.producto2;
        selectedRow.cells[3].innerHTML = infoForm.resultado;
    
        
        botoneditar.disabled = true;
        botonenviar.disabled = false;
        alert("Fila editada exitosamente");
        document.getElementById("miForm").reset();
    }
     
    
    
}


function onDelete(td){

    if (confirm('Estas seguro de esto? si lo borras perderas la informacion')){
        
        row = td.parentElement.parentElement;
        document.getElementById("mitabla").deleteRow(row.rowIndex);
        
        
        var num = document.getElementById('mitabla').rows.length;
       
        if(num==1){
            divtabla.style.display='none';
        }
    }



}