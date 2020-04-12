import {ViewEntity, ViewColumn, Connection} from "typeorm";

@ViewEntity({
    expression: `
        SELECT 
            institucion.id_ins,
            institucion.nom_ins,
            SUM(opcion.val_opc) nor_tot_e,
            SUM(((opcion.val_opc)*100)/25) dis_por_e
    
        FROM
            institucion
    
        INNER JOIN formulario ON institucion.id_ins =  formulario.idInsIdIns
        INNER JOIN contenido ON formulario.id_for = contenido.idForIdFor
        INNER JOIN opcpre ON contenido.idOpcpreIdOpcpre = opcpre.id_opcpre
        INNER JOIN opcion ON opcpre.idOpcIdOpc = opcion.id_opc
        INNER JOIN nordis ON contenido.idNordisIdNordis = nordis.idNorIdNor   
        INNER JOIN norma ON nordis.idNorIdNor = norma.id_nor

        WHERE norma.cod_nor='e'

        GROUP BY institucion.id_ins
        
        ORDER BY institucion.id_ins;
    `
})
export class ViewNorEEntity {

    @ViewColumn()
    id_ins: number;

    @ViewColumn()
    nom_ins: string;

    @ViewColumn()
    nor_tot_e: number;

    @ViewColumn()
    dis_por_e: number;

}