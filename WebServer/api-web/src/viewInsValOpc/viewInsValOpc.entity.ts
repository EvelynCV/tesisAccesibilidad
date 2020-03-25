import {ViewEntity, ViewColumn, Connection} from "typeorm";

@ViewEntity({
    expression: `
        SELECT 
            institucion.id_ins, 
            institucion.nom_ins,
            contenido.idForIdFor,
            opcion.val_opc,
            opcion.id_opc
        from institucion

        INNER JOIN formulario ON institucion.id_ins =  formulario.idInsIdIns
        INNER JOIN contenido ON formulario.id_for = contenido.idForIdFor
        INNER JOIN opcpre ON contenido.idOpcpreIdOpcpre = opcpre.id_opcpre
        INNER JOIN opcion ON opcpre.idOpcIdOpc = opcion.id_opc
    
    ORDER BY institucion.id_ins ASC;
    `
})
export class ViewInsValOpcEntity {

    @ViewColumn()
    id_ins: number;

    @ViewColumn()
    nom_ins: string;

    @ViewColumn()
    idForIdFor: number;

    @ViewColumn()
    val_opc: number;

    @ViewColumn()
    id_opc: number;

}