<?php
 $destino="porteiroperez@gmail.com";
 $nombre=$_POST["nombre"];
 $correo=$_POST["correo"];
 $telefono=$_POST["telefono"];
 $mensaje=$_POST["mensaje"];
 $contenido="Nombre: ".$nombre."\nTelefono: ".$correo."\nCorreo: ".$correo."\nMensaje: ".$mensaje;
 mail($destino,"Formulario web", $contenido);
 header("Location: index.html");
?>
