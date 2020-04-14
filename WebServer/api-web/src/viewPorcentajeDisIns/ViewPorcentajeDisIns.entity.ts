import {ViewEntity, ViewColumn} from "typeorm";

@ViewEntity({
    expression: `
    SELECT 
         view_tot_val_ins_entity.id_ins,
         view_tot_val_ins_entity.nom_ins,
 
         (view_tot_val_ins_entity.tot_val - view_nor_c_entity.nor_tot_c) Motriz,
         (((view_tot_val_ins_entity.tot_val - view_nor_c_entity.nor_tot_c)*100)/164) Porcentaje_Motriz,
 
         view_tot_val_ins_entity.tot_val AS Visual,
         (((view_tot_val_ins_entity.tot_val)*100)/181) Porcentaje_Visual,
 
         (view_tot_val_ins_entity.tot_val - view_nor_c_entity.nor_tot_c - view_nor_h_entity.nor_tot_h - view_nor_i_entity.nor_tot_i) Auditiva,
         (((view_tot_val_ins_entity.tot_val - view_nor_c_entity.nor_tot_c - view_nor_h_entity.nor_tot_h - view_nor_i_entity.nor_tot_i)*100)/146) Porcentaje_Auditiva

 
    FROM view_tot_val_ins_entity

    INNER JOIN view_nor_c_entity
        ON view_tot_val_ins_entity.id_ins =  view_nor_c_entity.id_ins
                
    INNER JOIN view_nor_h_entity
        ON view_tot_val_ins_entity.id_ins =  view_nor_h_entity.id_ins
                
    INNER JOIN view_nor_i_entity
        ON view_tot_val_ins_entity.id_ins =  view_nor_i_entity.id_ins
    `
})
export class ViewPorcentajeDisInsEntity {

    @ViewColumn()
    id_ins: number;

    @ViewColumn()
    nom_ins: string;

    @ViewColumn()
    Motriz: number;
    @ViewColumn()
    Porcentaje_Motriz: number;

    @ViewColumn()
    Visual: number;
    @ViewColumn()
    Porcentaje_Visual: number;

    @ViewColumn()
    Auditiva: number;
    @ViewColumn()
    Porcentaje_Auditiva: number;

}