
<?php
	$db_host="localhost";//Nombre del host
	$db_user="root";//Usuario de la base de datos
	$db_pass="";//Contraseña de usuario de base de datos
	$db_name="bdprueba";//Nombre de la base de datos
	$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);
 
	if ($conn->connect_error) {
	    die("Conexión falló: " . $conn->connect_error);
	}
?>
