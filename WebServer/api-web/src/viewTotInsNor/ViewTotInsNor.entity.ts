import {ViewEntity, ViewColumn} from "typeorm";

@ViewEntity({
    expression: `
    select first.cod_nor, first.nom_nor,
        max(if(first.id_ins = "1", first.tot_nor, NULL)) as "ins_1",
        max(if(first.id_ins = "2", first.tot_nor, NULL)) as "ins_2",
        max(if(first.id_ins = "3", first.tot_nor, NULL)) as "ins_3",
        max(if(first.id_ins = "4", first.tot_nor, NULL)) as "ins_4",
        max(if(first.id_ins = "5", first.tot_nor, NULL)) as "ins_5",
        max(if(first.id_ins = "6", first.tot_nor, NULL)) as "ins_6",
        max(if(first.id_ins = "7", first.tot_nor, NULL)) as "ins_7",
        max(if(first.id_ins = "8", first.tot_nor, NULL)) as "ins_8",
        max(if(first.id_ins = "9", first.tot_nor, NULL)) as "ins_9",
        max(if(first.id_ins = "10", first.tot_nor, NULL)) as "ins_10",
        max(if(first.id_ins = "11", first.tot_nor, NULL)) as "ins_11",
        max(if(first.id_ins = "12", first.tot_nor, NULL)) as "ins_12",
        max(if(first.id_ins = "13", first.tot_nor, NULL)) as "ins_13",
        max(if(first.id_ins = "14", first.tot_nor, NULL)) as "ins_14",
        max(if(first.id_ins = "15", first.tot_nor, NULL)) as "ins_15",
        max(if(first.id_ins = "16", first.tot_nor, NULL)) as "ins_16",
        max(if(first.id_ins = "17", first.tot_nor, NULL)) as "ins_17",
        max(if(first.id_ins = "18", first.tot_nor, NULL)) as "ins_18",
        max(if(first.id_ins = "19", first.tot_nor, NULL)) as "ins_19",
        max(if(first.id_ins = "20", first.tot_nor, NULL)) as "ins_20",
        max(if(first.id_ins = "21", first.tot_nor, NULL)) as "ins_21",
        max(if(first.id_ins = "22", first.tot_nor, NULL)) as "ins_22",
        max(if(first.id_ins = "23", first.tot_nor, NULL)) as "ins_23",
        max(if(first.id_ins = "24", first.tot_nor, NULL)) as "ins_24",
        max(if(first.id_ins = "25", first.tot_nor, NULL)) as "ins_25",
        max(if(first.id_ins = "26", first.tot_nor, NULL)) as "ins_26"
    from view_tot_nor_entity as first
    join view_tot_nor_entity as second
    on first.cod_nor = second.cod_nor
    group by first.cod_nor
       
    `
})
export class ViewTotInsNorEntity {

    @ViewColumn()
    cod_nor: string;

    @ViewColumn()
    nom_nor:string;

    @ViewColumn()
    ins_1: number;

    @ViewColumn()
    ins_2: number;

    @ViewColumn()
    ins_3: number;

    @ViewColumn()
    ins_4: number;

    @ViewColumn()
    ins_5: number;

    @ViewColumn()
    ins_6: number;

    @ViewColumn()
    ins_7: number;

    @ViewColumn()
    ins_8: number;

    @ViewColumn()
    ins_9: number;

    @ViewColumn()
    ins_10: number;

    @ViewColumn()
    ins_11: number;

    @ViewColumn()
    ins_12: number;

    @ViewColumn()
    ins_13: number;

    @ViewColumn()
    ins_14: number;

    @ViewColumn()
    ins_15: number;

    @ViewColumn()
    ins_16: number;

    @ViewColumn()
    ins_17: number;

    @ViewColumn()
    ins_18: number;

    @ViewColumn()
    ins_19: number;

    @ViewColumn()
    ins_20: number;

    @ViewColumn()
    ins_21: number;

    @ViewColumn()
    ins_22: number;

    @ViewColumn()
    ins_23: number;

    @ViewColumn()
    ins_24: number;

    @ViewColumn()
    ins_25: number;

    @ViewColumn()
    ins_26: number;
}