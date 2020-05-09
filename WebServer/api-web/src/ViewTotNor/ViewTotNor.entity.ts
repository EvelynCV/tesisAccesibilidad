import {ViewEntity, ViewColumn, Connection} from "typeorm";

@ViewEntity({
    expression: `
        SELECT 
            institucion.id_ins,
            institucion.nom_ins,
            norma.cod_nor,
            norma.nom_nor,
            SUM(opcion.val_opc) tot_nor
        FROM
            institucion
    
        INNER JOIN formulario ON institucion.id_ins =  formulario.idInsIdIns
        INNER JOIN contenido ON formulario.id_for = contenido.idForIdFor
        INNER JOIN opcpre ON contenido.idOpcpreIdOpcpre = opcpre.id_opcpre
        INNER JOIN opcion ON opcpre.idOpcIdOpc = opcion.id_opc
        INNER JOIN nordis ON contenido.idNordisIdNordis = nordis.idNorIdNor
        INNER JOIN norma ON nordis.idNorIdNor = norma.id_nor

        GROUP BY institucion.id_ins, norma.cod_nor

        ORDER BY institucion.id_ins;
    `
})
export class ViewTotNorEntity {

    @ViewColumn()
    id_ins: number;

    @ViewColumn()
    nom_ins: string;

    @ViewColumn()
    cod_nor: number;

    @ViewColumn()
    nom_nor: string;

    @ViewColumn()
    tot_nor: number;

}