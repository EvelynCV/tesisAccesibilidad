
/*<?php
	$db_host="localhost";//Nombre del host
	$db_user="root";//Usuario de la base de datos
	$db_pass="";//Contraseña de usuario de base de datos
	$db_name="bdprueba";//Nombre de la base de datos
	$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);
 
	if ($conn->connect_error) {
	    die("Conexión falló: " . $conn->connect_error);
	}
?>*/
<?php
//setting header to json
header('Content-Type: application/json');

//database
define('DB_HOST', '127.0.0.1');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'norma_accesibilidad');

//get connection
$mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

if(!$mysqli){
  die("Connection failed: " . $mysqli->error);
}

//query to get data from the table
$query = sprintf("SELECT cod_norm, nom_norm FROM normas ORDER BY cod_norm");

//execute query
$result = $mysqli->query($query);

//loop through the returned data
$data = array();
foreach ($result as $row) {
  $data[] = $row;
}

//free memory associated with result
$result->close();

//close connection
$mysqli->close();

//now print the data
print json_encode($data);
