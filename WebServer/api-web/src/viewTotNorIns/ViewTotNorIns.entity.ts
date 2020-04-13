import {ViewEntity, ViewColumn, Connection} from "typeorm";

@ViewEntity({
    expression: `
        SELECT 
            view_nor_a_entity.id_ins,
            view_nor_a_entity.nom_ins,
            view_nor_a_entity.nor_tot_a, view_nor_a_entity.dis_por_a,
            view_nor_b_entity.nor_tot_b, view_nor_b_entity.dis_por_b,
            view_nor_c_entity.nor_tot_c, view_nor_c_entity.dis_por_c,
            view_nor_d_entity.nor_tot_d, view_nor_d_entity.dis_por_d,
            view_nor_e_entity.nor_tot_e, view_nor_e_entity.dis_por_e,
            view_nor_f_entity.nor_tot_f, view_nor_f_entity.dis_por_f,
            view_nor_g_entity.nor_tot_g, view_nor_g_entity.dis_por_g,
            view_nor_h_entity.nor_tot_h, view_nor_h_entity.dis_por_h,
            view_nor_i_entity.nor_tot_i, view_nor_i_entity.dis_por_i,
            view_nor_j_entity.nor_tot_j, view_nor_j_entity.dis_por_j,
            view_nor_k_entity.nor_tot_k, view_nor_k_entity.dis_por_k
    
        FROM institucion
        
        INNER JOIN view_nor_a_entity ON view_nor_a_entity.id_ins = view_nor_a_entity.id_ins
        INNER JOIN view_nor_b_entity ON view_nor_b_entity.id_ins = view_nor_a_entity.id_ins
        INNER JOIN view_nor_c_entity ON view_nor_c_entity.id_ins = view_nor_a_entity.id_ins
        INNER JOIN view_nor_d_entity ON view_nor_d_entity.id_ins = view_nor_a_entity.id_ins
        INNER JOIN view_nor_e_entity ON view_nor_e_entity.id_ins = view_nor_a_entity.id_ins
        INNER JOIN view_nor_f_entity ON view_nor_f_entity.id_ins = view_nor_a_entity.id_ins
        INNER JOIN view_nor_g_entity ON view_nor_g_entity.id_ins = view_nor_a_entity.id_ins
        INNER JOIN view_nor_h_entity ON view_nor_h_entity.id_ins = view_nor_a_entity.id_ins
        INNER JOIN view_nor_i_entity ON view_nor_i_entity.id_ins = view_nor_a_entity.id_ins
        INNER JOIN view_nor_j_entity ON view_nor_j_entity.id_ins = view_nor_a_entity.id_ins
        INNER JOIN view_nor_k_entity ON view_nor_k_entity.id_ins = view_nor_a_entity.id_ins
         
        GROUP BY view_nor_a_entity.id_ins;
    `
})
export class ViewTotNorInsEntity {

    @ViewColumn()
    id_ins: number;

    @ViewColumn()
    nom_ins: string;

    @ViewColumn()
    nor_tot_a: number;
    @ViewColumn()
    dis_por_a: number;

    @ViewColumn()
    nor_tot_b: number;
    @ViewColumn()
    dis_por_b: number;

    @ViewColumn()
    nor_tot_c: number;
    @ViewColumn()
    dis_por_c: number;

    @ViewColumn()
    nor_tot_d: number;
    @ViewColumn()
    dis_por_d: number;

    @ViewColumn()
    nor_tot_e: number;
    @ViewColumn()
    dis_por_e: number;

    @ViewColumn()
    nor_tot_f: number;
    @ViewColumn()
    dis_por_f: number;

    @ViewColumn()
    nor_tot_g: number;
    @ViewColumn()
    dis_por_g: number;

    @ViewColumn()
    nor_tot_h: number;
    @ViewColumn()
    dis_por_h: number;

    @ViewColumn()
    nor_tot_i: number;
    @ViewColumn()
    dis_por_i: number;

    @ViewColumn()
    nor_tot_j: number;
    @ViewColumn()
    dis_por_j: number;

    @ViewColumn()
    nor_tot_k: number;
    @ViewColumn()
    dis_por_k: number;

}