import {ViewEntity, ViewColumn} from "typeorm";

@ViewEntity({
    expression: `
    select 
        "a" as cod_nor,
        max(if(first.id_ins = "1", first.dis_por_a, NULL)) as "ins_1",
        max(if(first.id_ins = "2", first.dis_por_a, NULL)) as "ins_2",
        max(if(first.id_ins = "3", first.dis_por_a, NULL)) as "ins_3",
        max(if(first.id_ins = "4", first.dis_por_a, NULL)) as "ins_4",
        max(if(first.id_ins = "5", first.dis_por_a, NULL)) as "ins_5",
        max(if(first.id_ins = "6", first.dis_por_a, NULL)) as "ins_6",
        max(if(first.id_ins = "7", first.dis_por_a, NULL)) as "ins_7",
        max(if(first.id_ins = "8", first.dis_por_a, NULL)) as "ins_8",
        max(if(first.id_ins = "9", first.dis_por_a, NULL)) as "ins_9",
        max(if(first.id_ins = "10", first.dis_por_a, NULL)) as "ins_10",
        max(if(first.id_ins = "11", first.dis_por_a, NULL)) as "ins_11",
        max(if(first.id_ins = "12", first.dis_por_a, NULL)) as "ins_12",
        max(if(first.id_ins = "13", first.dis_por_a, NULL)) as "ins_13",
        max(if(first.id_ins = "14", first.dis_por_a, NULL)) as "ins_14",
        max(if(first.id_ins = "15", first.dis_por_a, NULL)) as "ins_15",
        max(if(first.id_ins = "16", first.dis_por_a, NULL)) as "ins_16",
        max(if(first.id_ins = "17", first.dis_por_a, NULL)) as "ins_17",
        max(if(first.id_ins = "18", first.dis_por_a, NULL)) as "ins_18",
        max(if(first.id_ins = "19", first.dis_por_a, NULL)) as "ins_19",
        max(if(first.id_ins = "20", first.dis_por_a, NULL)) as "ins_20",
        max(if(first.id_ins = "21", first.dis_por_a, NULL)) as "ins_21",
        max(if(first.id_ins = "22", first.dis_por_a, NULL)) as "ins_22",
        max(if(first.id_ins = "23", first.dis_por_a, NULL)) as "ins_23",
        max(if(first.id_ins = "24", first.dis_por_a, NULL)) as "ins_24",
        max(if(first.id_ins = "25", first.dis_por_a, NULL)) as "ins_25",
        max(if(first.id_ins = "26", first.dis_por_a, NULL)) as "ins_26" 
        from view_tot_nor_ins_entity as first
        
        UNION
        
        select 
        "b" as cod_nor,
        max(if(first.id_ins = "1", first.dis_por_b, NULL)) as "ins_1",
        max(if(first.id_ins = "2", first.dis_por_b, NULL)) as "ins_2",
        max(if(first.id_ins = "3", first.dis_por_b, NULL)) as "ins_3",
        max(if(first.id_ins = "4", first.dis_por_b, NULL)) as "ins_4",
        max(if(first.id_ins = "5", first.dis_por_b, NULL)) as "ins_5",
        max(if(first.id_ins = "6", first.dis_por_b, NULL)) as "ins_6",
        max(if(first.id_ins = "7", first.dis_por_b, NULL)) as "ins_7",
        max(if(first.id_ins = "8", first.dis_por_b, NULL)) as "ins_8",
        max(if(first.id_ins = "9", first.dis_por_b, NULL)) as "ins_9",
        max(if(first.id_ins = "10", first.dis_por_b, NULL)) as "ins_10",
        max(if(first.id_ins = "11", first.dis_por_b, NULL)) as "ins_11",
        max(if(first.id_ins = "12", first.dis_por_b, NULL)) as "ins_12",
        max(if(first.id_ins = "13", first.dis_por_b, NULL)) as "ins_13",
        max(if(first.id_ins = "14", first.dis_por_b, NULL)) as "ins_14",
        max(if(first.id_ins = "15", first.dis_por_b, NULL)) as "ins_15",
        max(if(first.id_ins = "16", first.dis_por_b, NULL)) as "ins_16",
        max(if(first.id_ins = "17", first.dis_por_b, NULL)) as "ins_17",
        max(if(first.id_ins = "18", first.dis_por_b, NULL)) as "ins_18",
        max(if(first.id_ins = "19", first.dis_por_b, NULL)) as "ins_19",
        max(if(first.id_ins = "20", first.dis_por_b, NULL)) as "ins_20",
        max(if(first.id_ins = "21", first.dis_por_b, NULL)) as "ins_21",
        max(if(first.id_ins = "22", first.dis_por_b, NULL)) as "ins_22",
        max(if(first.id_ins = "23", first.dis_por_b, NULL)) as "ins_23",
        max(if(first.id_ins = "24", first.dis_por_b, NULL)) as "ins_24",
        max(if(first.id_ins = "25", first.dis_por_b, NULL)) as "ins_25",
        max(if(first.id_ins = "26", first.dis_por_b, NULL)) as "ins_26"
        from view_tot_nor_ins_entity as first
        
        UNION
        
        select 
        "c" as cod_nor,
        max(if(first.id_ins = "1", first.dis_por_c, NULL)) as "ins_1",
        max(if(first.id_ins = "2", first.dis_por_c, NULL)) as "ins_2",
        max(if(first.id_ins = "3", first.dis_por_c, NULL)) as "ins_3",
        max(if(first.id_ins = "4", first.dis_por_c, NULL)) as "ins_4",
        max(if(first.id_ins = "5", first.dis_por_c, NULL)) as "ins_5",
        max(if(first.id_ins = "6", first.dis_por_c, NULL)) as "ins_6",
        max(if(first.id_ins = "7", first.dis_por_c, NULL)) as "ins_7",
        max(if(first.id_ins = "8", first.dis_por_c, NULL)) as "ins_8",
        max(if(first.id_ins = "9", first.dis_por_c, NULL)) as "ins_9",
        max(if(first.id_ins = "10", first.dis_por_c, NULL)) as "ins_10",
        max(if(first.id_ins = "11", first.dis_por_c, NULL)) as "ins_11",
        max(if(first.id_ins = "12", first.dis_por_c, NULL)) as "ins_12",
        max(if(first.id_ins = "13", first.dis_por_c, NULL)) as "ins_13",
        max(if(first.id_ins = "14", first.dis_por_c, NULL)) as "ins_14",
        max(if(first.id_ins = "15", first.dis_por_c, NULL)) as "ins_15",
        max(if(first.id_ins = "16", first.dis_por_c, NULL)) as "ins_16",
        max(if(first.id_ins = "17", first.dis_por_c, NULL)) as "ins_17",
        max(if(first.id_ins = "18", first.dis_por_c, NULL)) as "ins_18",
        max(if(first.id_ins = "19", first.dis_por_c, NULL)) as "ins_19",
        max(if(first.id_ins = "20", first.dis_por_c, NULL)) as "ins_20",
        max(if(first.id_ins = "21", first.dis_por_c, NULL)) as "ins_21",
        max(if(first.id_ins = "22", first.dis_por_c, NULL)) as "ins_22",
        max(if(first.id_ins = "23", first.dis_por_c, NULL)) as "ins_23",
        max(if(first.id_ins = "24", first.dis_por_c, NULL)) as "ins_24",
        max(if(first.id_ins = "25", first.dis_por_c, NULL)) as "ins_25",
        max(if(first.id_ins = "26", first.dis_por_c, NULL)) as "ins_26"
        from view_tot_nor_ins_entity as first
        UNION
        
        select 
        "d" as cod_nor,
        max(if(first.id_ins = "1", first.dis_por_d, NULL)) as "ins_1",
        max(if(first.id_ins = "2", first.dis_por_d, NULL)) as "ins_2",
        max(if(first.id_ins = "3", first.dis_por_d, NULL)) as "ins_3",
        max(if(first.id_ins = "4", first.dis_por_d, NULL)) as "ins_4",
        max(if(first.id_ins = "5", first.dis_por_d, NULL)) as "ins_5",
        max(if(first.id_ins = "6", first.dis_por_d, NULL)) as "ins_6",
        max(if(first.id_ins = "7", first.dis_por_d, NULL)) as "ins_7",
        max(if(first.id_ins = "8", first.dis_por_d, NULL)) as "ins_8",
        max(if(first.id_ins = "9", first.dis_por_d, NULL)) as "ins_9",
        max(if(first.id_ins = "10", first.dis_por_d, NULL)) as "ins_10",
        max(if(first.id_ins = "11", first.dis_por_d, NULL)) as "ins_11",
        max(if(first.id_ins = "12", first.dis_por_d, NULL)) as "ins_12",
        max(if(first.id_ins = "13", first.dis_por_a, NULL)) as "ins_13",
        max(if(first.id_ins = "14", first.dis_por_d, NULL)) as "ins_14",
        max(if(first.id_ins = "15", first.dis_por_d, NULL)) as "ins_15",
        max(if(first.id_ins = "16", first.dis_por_d, NULL)) as "ins_16",
        max(if(first.id_ins = "17", first.dis_por_d, NULL)) as "ins_17",
        max(if(first.id_ins = "18", first.dis_por_d, NULL)) as "ins_18",
        max(if(first.id_ins = "19", first.dis_por_d, NULL)) as "ins_19",
        max(if(first.id_ins = "20", first.dis_por_d, NULL)) as "ins_20",
        max(if(first.id_ins = "21", first.dis_por_d, NULL)) as "ins_21",
        max(if(first.id_ins = "22", first.dis_por_d, NULL)) as "ins_22",
        max(if(first.id_ins = "23", first.dis_por_d, NULL)) as "ins_23",
        max(if(first.id_ins = "24", first.dis_por_d, NULL)) as "ins_24",
        max(if(first.id_ins = "25", first.dis_por_d, NULL)) as "ins_25",
        max(if(first.id_ins = "26", first.dis_por_d, NULL)) as "ins_26"
        from view_tot_nor_ins_entity as first
        
        UNION
        
        select 
        "e" as cod_nor,
        max(if(first.id_ins = "1", first.dis_por_e, NULL)) as "ins_1",
        max(if(first.id_ins = "2", first.dis_por_e, NULL)) as "ins_2",
        max(if(first.id_ins = "3", first.dis_por_e, NULL)) as "ins_3",
        max(if(first.id_ins = "4", first.dis_por_e, NULL)) as "ins_4",
        max(if(first.id_ins = "5", first.dis_por_e, NULL)) as "ins_5",
        max(if(first.id_ins = "6", first.dis_por_e, NULL)) as "ins_6",
        max(if(first.id_ins = "7", first.dis_por_e, NULL)) as "ins_7",
        max(if(first.id_ins = "8", first.dis_por_e, NULL)) as "ins_8",
        max(if(first.id_ins = "9", first.dis_por_e, NULL)) as "ins_9",
        max(if(first.id_ins = "10", first.dis_por_e, NULL)) as "ins_10",
        max(if(first.id_ins = "11", first.dis_por_e, NULL)) as "ins_11",
        max(if(first.id_ins = "12", first.dis_por_e, NULL)) as "ins_12",
        max(if(first.id_ins = "13", first.dis_por_e, NULL)) as "ins_13",
        max(if(first.id_ins = "14", first.dis_por_e, NULL)) as "ins_14",
        max(if(first.id_ins = "15", first.dis_por_e, NULL)) as "ins_15",
        max(if(first.id_ins = "16", first.dis_por_e, NULL)) as "ins_16",
        max(if(first.id_ins = "17", first.dis_por_e, NULL)) as "ins_17",
        max(if(first.id_ins = "18", first.dis_por_e, NULL)) as "ins_18",
        max(if(first.id_ins = "19", first.dis_por_e, NULL)) as "ins_19",
        max(if(first.id_ins = "20", first.dis_por_e, NULL)) as "ins_20",
        max(if(first.id_ins = "21", first.dis_por_e, NULL)) as "ins_21",
        max(if(first.id_ins = "22", first.dis_por_e, NULL)) as "ins_22",
        max(if(first.id_ins = "23", first.dis_por_e, NULL)) as "ins_23",
        max(if(first.id_ins = "24", first.dis_por_e, NULL)) as "ins_24",
        max(if(first.id_ins = "25", first.dis_por_e, NULL)) as "ins_25",
        max(if(first.id_ins = "26", first.dis_por_e, NULL)) as "ins_26"
        from view_tot_nor_ins_entity as first
        
        UNION
        select 
        "f" as cod_nor,
        max(if(first.id_ins = "1", first.dis_por_f, NULL)) as "ins_1",
        max(if(first.id_ins = "2", first.dis_por_f, NULL)) as "ins_2",
        max(if(first.id_ins = "3", first.dis_por_f, NULL)) as "ins_3",
        max(if(first.id_ins = "4", first.dis_por_f, NULL)) as "ins_4",
        max(if(first.id_ins = "5", first.dis_por_f, NULL)) as "ins_5",
        max(if(first.id_ins = "6", first.dis_por_f, NULL)) as "ins_6",
        max(if(first.id_ins = "7", first.dis_por_f, NULL)) as "ins_7",
        max(if(first.id_ins = "8", first.dis_por_f, NULL)) as "ins_8",
        max(if(first.id_ins = "9", first.dis_por_f, NULL)) as "ins_9",
        max(if(first.id_ins = "10", first.dis_por_f, NULL)) as "ins_10",
        max(if(first.id_ins = "11", first.dis_por_f, NULL)) as "ins_11",
        max(if(first.id_ins = "12", first.dis_por_f, NULL)) as "ins_12",
        max(if(first.id_ins = "13", first.dis_por_f, NULL)) as "ins_13",
        max(if(first.id_ins = "14", first.dis_por_f, NULL)) as "ins_14",
        max(if(first.id_ins = "15", first.dis_por_f, NULL)) as "ins_15",
        max(if(first.id_ins = "16", first.dis_por_f, NULL)) as "ins_16",
        max(if(first.id_ins = "17", first.dis_por_f, NULL)) as "ins_17",
        max(if(first.id_ins = "18", first.dis_por_f, NULL)) as "ins_18",
        max(if(first.id_ins = "19", first.dis_por_f, NULL)) as "ins_19",
        max(if(first.id_ins = "20", first.dis_por_f, NULL)) as "ins_20",
        max(if(first.id_ins = "21", first.dis_por_f, NULL)) as "ins_21",
        max(if(first.id_ins = "22", first.dis_por_f, NULL)) as "ins_22",
        max(if(first.id_ins = "23", first.dis_por_f, NULL)) as "ins_23",
        max(if(first.id_ins = "24", first.dis_por_f, NULL)) as "ins_24",
        max(if(first.id_ins = "25", first.dis_por_f, NULL)) as "ins_25",
        max(if(first.id_ins = "26", first.dis_por_f, NULL)) as "ins_26"
        from view_tot_nor_ins_entity as first 
        UNION
         select 
         "g" as cod_nor,
        max(if(first.id_ins = "1", first.dis_por_g, NULL)) as "ins_1",
        max(if(first.id_ins = "2", first.dis_por_g, NULL)) as "ins_2",
        max(if(first.id_ins = "3", first.dis_por_g, NULL)) as "ins_3",
        max(if(first.id_ins = "4", first.dis_por_g, NULL)) as "ins_4",
        max(if(first.id_ins = "5", first.dis_por_g, NULL)) as "ins_5",
        max(if(first.id_ins = "6", first.dis_por_g, NULL)) as "ins_6",
        max(if(first.id_ins = "7", first.dis_por_g, NULL)) as "ins_7",
        max(if(first.id_ins = "8", first.dis_por_g, NULL)) as "ins_8",
        max(if(first.id_ins = "9", first.dis_por_g, NULL)) as "ins_9",
        max(if(first.id_ins = "10", first.dis_por_g, NULL)) as "ins_10",
        max(if(first.id_ins = "11", first.dis_por_g, NULL)) as "ins_11",
        max(if(first.id_ins = "12", first.dis_por_g, NULL)) as "ins_12",
        max(if(first.id_ins = "13", first.dis_por_g, NULL)) as "ins_13",
        max(if(first.id_ins = "14", first.dis_por_g, NULL)) as "ins_14",
        max(if(first.id_ins = "15", first.dis_por_g, NULL)) as "ins_15",
        max(if(first.id_ins = "16", first.dis_por_g, NULL)) as "ins_16",
        max(if(first.id_ins = "17", first.dis_por_g, NULL)) as "ins_17",
        max(if(first.id_ins = "18", first.dis_por_g, NULL)) as "ins_18",
        max(if(first.id_ins = "19", first.dis_por_g, NULL)) as "ins_19",
        max(if(first.id_ins = "20", first.dis_por_g, NULL)) as "ins_20",
        max(if(first.id_ins = "21", first.dis_por_g, NULL)) as "ins_21",
        max(if(first.id_ins = "22", first.dis_por_g, NULL)) as "ins_22",
        max(if(first.id_ins = "23", first.dis_por_g, NULL)) as "ins_23",
        max(if(first.id_ins = "24", first.dis_por_g, NULL)) as "ins_24",
        max(if(first.id_ins = "25", first.dis_por_g, NULL)) as "ins_25",
        max(if(first.id_ins = "26", first.dis_por_g, NULL)) as "ins_26"
        from view_tot_nor_ins_entity as first
        
        UNION
        
        select 
        "h" as cod_nor,
        max(if(first.id_ins = "1", first.dis_por_h, NULL)) as "ins_1",
        max(if(first.id_ins = "2", first.dis_por_h, NULL)) as "ins_2",
        max(if(first.id_ins = "3", first.dis_por_h, NULL)) as "ins_3",
        max(if(first.id_ins = "4", first.dis_por_h, NULL)) as "ins_4",
        max(if(first.id_ins = "5", first.dis_por_h, NULL)) as "ins_5",
        max(if(first.id_ins = "6", first.dis_por_h, NULL)) as "ins_6",
        max(if(first.id_ins = "7", first.dis_por_h, NULL)) as "ins_7",
        max(if(first.id_ins = "8", first.dis_por_h, NULL)) as "ins_8",
        max(if(first.id_ins = "9", first.dis_por_h, NULL)) as "ins_9",
        max(if(first.id_ins = "10", first.dis_por_h, NULL)) as "ins_10",
        max(if(first.id_ins = "11", first.dis_por_h, NULL)) as "ins_11",
        max(if(first.id_ins = "12", first.dis_por_h, NULL)) as "ins_12",
        max(if(first.id_ins = "13", first.dis_por_h, NULL)) as "ins_13",
        max(if(first.id_ins = "14", first.dis_por_h, NULL)) as "ins_14",
        max(if(first.id_ins = "15", first.dis_por_h, NULL)) as "ins_15",
        max(if(first.id_ins = "16", first.dis_por_h, NULL)) as "ins_16",
        max(if(first.id_ins = "17", first.dis_por_h, NULL)) as "ins_17",
        max(if(first.id_ins = "18", first.dis_por_h, NULL)) as "ins_18",
        max(if(first.id_ins = "19", first.dis_por_h, NULL)) as "ins_19",
        max(if(first.id_ins = "20", first.dis_por_h, NULL)) as "ins_20",
        max(if(first.id_ins = "21", first.dis_por_h, NULL)) as "ins_21",
        max(if(first.id_ins = "22", first.dis_por_h, NULL)) as "ins_22",
        max(if(first.id_ins = "23", first.dis_por_h, NULL)) as "ins_23",
        max(if(first.id_ins = "24", first.dis_por_h, NULL)) as "ins_24",
        max(if(first.id_ins = "25", first.dis_por_h, NULL)) as "ins_25",
        max(if(first.id_ins = "26", first.dis_por_h, NULL)) as "ins_26"
        from view_tot_nor_ins_entity as first
        
        UNION
        select
        "i" as cod_nor,
        max(if(first.id_ins = "1", first.dis_por_i, NULL)) as "ins_1",
        max(if(first.id_ins = "2", first.dis_por_i, NULL)) as "ins_2",
        max(if(first.id_ins = "3", first.dis_por_i, NULL)) as "ins_3",
        max(if(first.id_ins = "4", first.dis_por_i, NULL)) as "ins_4",
        max(if(first.id_ins = "5", first.dis_por_i, NULL)) as "ins_5",
        max(if(first.id_ins = "6", first.dis_por_i, NULL)) as "ins_6",
        max(if(first.id_ins = "7", first.dis_por_i, NULL)) as "ins_7",
        max(if(first.id_ins = "8", first.dis_por_i, NULL)) as "ins_8",
        max(if(first.id_ins = "9", first.dis_por_i, NULL)) as "ins_9",
        max(if(first.id_ins = "10", first.dis_por_i, NULL)) as "ins_10",
        max(if(first.id_ins = "11", first.dis_por_i, NULL)) as "ins_11",
        max(if(first.id_ins = "12", first.dis_por_i, NULL)) as "ins_12",
        max(if(first.id_ins = "13", first.dis_por_i, NULL)) as "ins_13",
        max(if(first.id_ins = "14", first.dis_por_i, NULL)) as "ins_14",
        max(if(first.id_ins = "15", first.dis_por_i, NULL)) as "ins_15",
        max(if(first.id_ins = "16", first.dis_por_i, NULL)) as "ins_16",
        max(if(first.id_ins = "17", first.dis_por_i, NULL)) as "ins_17",
        max(if(first.id_ins = "18", first.dis_por_i, NULL)) as "ins_18",
        max(if(first.id_ins = "19", first.dis_por_i, NULL)) as "ins_19",
        max(if(first.id_ins = "20", first.dis_por_i, NULL)) as "ins_20",
        max(if(first.id_ins = "21", first.dis_por_i, NULL)) as "ins_21",
        max(if(first.id_ins = "22", first.dis_por_i, NULL)) as "ins_22",
        max(if(first.id_ins = "23", first.dis_por_i, NULL)) as "ins_23",
        max(if(first.id_ins = "24", first.dis_por_i, NULL)) as "ins_24",
        max(if(first.id_ins = "25", first.dis_por_i, NULL)) as "ins_25",
        max(if(first.id_ins = "26", first.dis_por_i, NULL)) as "ins_26"
        from view_tot_nor_ins_entity as first 
        UNION
         select 
         "j" as cod_nor,
        max(if(first.id_ins = "1", first.dis_por_j, NULL)) as "ins_1",
        max(if(first.id_ins = "2", first.dis_por_j, NULL)) as "ins_2",
        max(if(first.id_ins = "3", first.dis_por_j, NULL)) as "ins_3",
        max(if(first.id_ins = "4", first.dis_por_j, NULL)) as "ins_4",
        max(if(first.id_ins = "5", first.dis_por_j, NULL)) as "ins_5",
        max(if(first.id_ins = "6", first.dis_por_j, NULL)) as "ins_6",
        max(if(first.id_ins = "7", first.dis_por_j, NULL)) as "ins_7",
        max(if(first.id_ins = "8", first.dis_por_j, NULL)) as "ins_8",
        max(if(first.id_ins = "9", first.dis_por_j, NULL)) as "ins_9",
        max(if(first.id_ins = "10", first.dis_por_j, NULL)) as "ins_10",
        max(if(first.id_ins = "11", first.dis_por_j, NULL)) as "ins_11",
        max(if(first.id_ins = "12", first.dis_por_j, NULL)) as "ins_12",
        max(if(first.id_ins = "13", first.dis_por_j, NULL)) as "ins_13",
        max(if(first.id_ins = "14", first.dis_por_j, NULL)) as "ins_14",
        max(if(first.id_ins = "15", first.dis_por_j, NULL)) as "ins_15",
        max(if(first.id_ins = "16", first.dis_por_j, NULL)) as "ins_16",
        max(if(first.id_ins = "17", first.dis_por_j, NULL)) as "ins_17",
        max(if(first.id_ins = "18", first.dis_por_j, NULL)) as "ins_18",
        max(if(first.id_ins = "19", first.dis_por_j, NULL)) as "ins_19",
        max(if(first.id_ins = "20", first.dis_por_j, NULL)) as "ins_20",
        max(if(first.id_ins = "21", first.dis_por_j, NULL)) as "ins_21",
        max(if(first.id_ins = "22", first.dis_por_j, NULL)) as "ins_22",
        max(if(first.id_ins = "23", first.dis_por_j, NULL)) as "ins_23",
        max(if(first.id_ins = "24", first.dis_por_j, NULL)) as "ins_24",
        max(if(first.id_ins = "25", first.dis_por_j, NULL)) as "ins_25",
        max(if(first.id_ins = "26", first.dis_por_j, NULL)) as "ins_26"
        from view_tot_nor_ins_entity as first
        
        UNION
        
        select 
        "k" as cod_nor,
        max(if(first.id_ins = "1", first.dis_por_k, NULL)) as "ins_1",
        max(if(first.id_ins = "2", first.dis_por_k, NULL)) as "ins_2",
        max(if(first.id_ins = "3", first.dis_por_k, NULL)) as "ins_3",
        max(if(first.id_ins = "4", first.dis_por_k, NULL)) as "ins_4",
        max(if(first.id_ins = "5", first.dis_por_k, NULL)) as "ins_5",
        max(if(first.id_ins = "6", first.dis_por_k, NULL)) as "ins_6",
        max(if(first.id_ins = "7", first.dis_por_k, NULL)) as "ins_7",
        max(if(first.id_ins = "8", first.dis_por_k, NULL)) as "ins_8",
        max(if(first.id_ins = "9", first.dis_por_k, NULL)) as "ins_9",
        max(if(first.id_ins = "10", first.dis_por_k, NULL)) as "ins_10",
        max(if(first.id_ins = "11", first.dis_por_k, NULL)) as "ins_11",
        max(if(first.id_ins = "12", first.dis_por_k, NULL)) as "ins_12",
        max(if(first.id_ins = "13", first.dis_por_k, NULL)) as "ins_13",
        max(if(first.id_ins = "14", first.dis_por_k, NULL)) as "ins_14",
        max(if(first.id_ins = "15", first.dis_por_k, NULL)) as "ins_15",
        max(if(first.id_ins = "16", first.dis_por_k, NULL)) as "ins_16",
        max(if(first.id_ins = "17", first.dis_por_k, NULL)) as "ins_17",
        max(if(first.id_ins = "18", first.dis_por_k, NULL)) as "ins_18",
        max(if(first.id_ins = "19", first.dis_por_k, NULL)) as "ins_19",
        max(if(first.id_ins = "20", first.dis_por_k, NULL)) as "ins_20",
        max(if(first.id_ins = "21", first.dis_por_k, NULL)) as "ins_21",
        max(if(first.id_ins = "22", first.dis_por_k, NULL)) as "ins_22",
        max(if(first.id_ins = "23", first.dis_por_k, NULL)) as "ins_23",
        max(if(first.id_ins = "24", first.dis_por_k, NULL)) as "ins_24",
        max(if(first.id_ins = "25", first.dis_por_k, NULL)) as "ins_25",
        max(if(first.id_ins = "26", first.dis_por_k, NULL)) as "ins_26"
        from view_tot_nor_ins_entity as first

    `
})
export class ViewPorcentajeDisNorEntity {

    @ViewColumn()
    cod_nor: string;

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