import {ViewEntity, ViewColumn, Connection} from "typeorm";

@ViewEntity({
    expression: `
        SELECT 
            institucion.id_ins,
            institucion.nom_ins,
            SUM(opcion.val_opc=1) tot_val,
            SUM(((opcion.val_opc)*100)/181) por_ins,
            
            CASE WHEN (SUM(((opcion.val_opc)*100)/181))< 31 THEN 'Bajo'
                 WHEN (SUM(((opcion.val_opc)*100)/181)) BETWEEN 31 AND 70 THEN 'Medio'
            ELSE 'Alto'
            END AS Valoración

        FROM
            institucion

        INNER JOIN formulario ON institucion.id_ins =  formulario.idInsIdIns
        INNER JOIN contenido ON formulario.id_for = contenido.idForIdFor
        INNER JOIN opcpre ON contenido.idOpcpreIdOpcpre = opcpre.id_opcpre
        INNER JOIN opcion ON opcpre.idOpcIdOpc = opcion.id_opc
        
        GROUP BY institucion.id_ins;
    `
})
export class ViewTotValInsEntity {

    @ViewColumn()
    id_ins: number;

    @ViewColumn()
    nom_ins: string;

    @ViewColumn()
    tot_val: number;

    @ViewColumn()
    por_ins: number;

    @ViewColumn()
    Valoración: number;
}