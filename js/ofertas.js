function guardar(){
   
    var _nombre = document.getElementById("nombreEmpresa").value;
    var _telefono = document.getElementById("telefono").value;
    var _localizacion = document.getElementById("localizacion").value;
    var _sueldo = document.getElementById("sueldo").value;
 

    var fila="<tr><td>"+_nombre+"</td><td>"+_telefono+"</td><td>"+_localizacion+"</td><td>"+_sueldo+"</td></tr>";

    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tablita").appendChild(btn);
}