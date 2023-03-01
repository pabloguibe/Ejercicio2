function guardar(){
   
    var _nom = document.getElementById("nombre").value;
    var _dni = document.getElementById("dni").value;
    var _correo = document.getElementById("correo").value;
    var _h1 = document.getElementById("h1").value;
    var _h2 = document.getElementById("h2").value;

    var fila="<tr><td>"+_nom+"</td><td>"+_dni+"</td><td>"+_correo+"</td><td>"+_h1+"</td></tr>"+_h2+"</td></tr>";

    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tablita").appendChild(btn);
}