import { Injectable } from '@nestjs/common';
import {Formulario} from './Formulario/formulario';
import {Institucion} from './Institucion/institucion';

@Injectable()
export class AppService {
  getHello(): string {
    const mysql = require('mysql');
    const sqlFormulario = 'SELECT * FROM formulario';
    const sqlInstitucion = 'SELECT * FROM institucion';

    const con = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database : 'bd_formulario',
    });

    con.connect(function(err) {
      if (err) { throw err; }
      console.log('Connected!');
      con.query(sqlFormulario, function(err, result) {
        if (err) { throw err; }
        console.log('Result: ' + result);
      });
    });

    return 'Hello World!';

  }

  consultaBD(): string {
    const mysql = require('mysql');
    const sqlFormulario = 'SELECT * FROM formulario';
    const sqlInstitucion = 'SELECT * FROM institucion';
    let myJSON, myJSON2;
// Conexion de la BD
    const con = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database : 'bd_formulario',
    });
// consulta a la tabla Formulario

    con.connect(function(err) {
      if (err) { throw err; }
      console.log('Connected!');
      con.query(sqlFormulario, function(err, result) {
        if (err) { throw err; }
        myJSON = JSON.stringify(result);
        console.log('Result: ' + myJSON);
      });
      con.query(sqlInstitucion, function(err, result2) {
          if (err) { throw err; }
          myJSON2 = JSON.stringify(result2);
          console.log('Result: ' + myJSON2);

      });
    });

    return myJSON;
// return myJSON2;

  }
}
