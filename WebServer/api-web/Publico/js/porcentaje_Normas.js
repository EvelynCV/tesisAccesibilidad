function porcentaje_Normas(tot_nor_ins) {

    var nombreInstituciones = tot_nor_ins.map(
        function (NombreInstitucion) {
            return NombreInstitucion.nom_ins;
        }
    );

    var porcentajeNormaA = tot_nor_ins.map(
        function (porcentajeNormas) {
            return porcentajeNormas.dis_por_a;
        }
    );
    var porcentajeNormaB = tot_nor_ins.map(
        function (porcentajeNormas) {
            return porcentajeNormas.dis_por_b;
        }
    );
    var porcentajeNormaC = tot_nor_ins.map(
        function (porcentajeNormas) {
            return porcentajeNormas.dis_por_c;
        }
    );
    var porcentajeNormaD = tot_nor_ins.map(
        function (porcentajeNormas) {
            return porcentajeNormas.dis_por_d;
        }
    );
    var porcentajeNormaE = tot_nor_ins.map(
        function (porcentajeNormas) {
            return porcentajeNormas.dis_por_e;
        }
    );
    var porcentajeNormaF = tot_nor_ins.map(
        function (porcentajeNormas) {
            return porcentajeNormas.dis_por_f;
        }
    );
    var porcentajeNormaG = tot_nor_ins.map(
        function (porcentajeNormas) {
            return porcentajeNormas.dis_por_g;
        }
    );
    var porcentajeNormaH = tot_nor_ins.map(
        function (porcentajeNormas) {
            return porcentajeNormas.dis_por_h;
        }
    );
    var porcentajeNormaI = tot_nor_ins.map(
        function (porcentajeNormas) {
            return porcentajeNormas.dis_por_i;
        }
    );
    var porcentajeNormaJ= tot_nor_ins.map(
        function (porcentajeNormas) {
            return porcentajeNormas.dis_por_j;
        }
    );
    var porcentajeNormaK = tot_nor_ins.map(
        function (porcentajeNormas) {
            return porcentajeNormas.dis_por_k;
        }
    );

    var chartColors = [
        'rgba(255,185,0,0.5)','rgba(231,72,86,0.5)','rgba(0,120,215,0.5)','rgba(0,153,188,0.5)',
        'rgba(255,140,0,0.5)','rgba(232,17,35,0.5)', 'rgba(0,99,177,0.5)','rgba(45,125,154,0.5)',
        'rgba(247,99,12,0.5)','rgba(234,0,94,0.5)','rgba(142,140,216,0.5)','rgba(0,183,195,0.5)',
        'rgba(104,118,138,0.5)','rgba(202,80,16,0.5)','rgba(195,0,82,0.5)', 'rgba(107,105,214,0.5)',
        'rgba(3,131,135,0.5)','rgba(218,59,1,0.5)','rgba(227,0,140,0.5)', 'rgba(135,100,184,0.5)',
        'rgba(0,178,148,0.5)','rgba(86,124,115,0.5)','rgba(100,124,100,0.5)', 'rgba(191,0,119,0.5)',
        'rgba(0,204,106,0.5)','rgba(132,117,69,0.5)'];
    var colorBorder=[ 'rgba(255,185,0,1)','rgba(231,72,86,1)','rgba(0,120,215,1)','rgba(0,153,188,1)',
        'rgba(255,140,0,1)','rgba(232,17,35,1)', 'rgba(0,99,177,1)','rgba(45,125,154,1)',
        'rgba(247,99,12,1)','rgba(234,0,94,1)','rgba(142,140,216,1)','rgba(0,183,195,1)',
        'rgba(104,118,138,1)','rgba(202,80,16,1)','rgba(195,0,82,1)', 'rgba(107,105,214,1)',
        'rgba(3,131,135,1)','rgba(218,59,1,1)','rgba(227,0,140,1)', 'rgba(135,100,184,1)',
        'rgba(0,178,148,1)','rgba(86,124,115,1)','rgba(100,124,100,1)', 'rgba(191,0,119,1)',
        'rgba(0,204,106,1)','rgba(132,117,69,1)'];
    var hover=[ 'rgba(255,185,0,0.7)','rgba(231,72,86,0.7)','rgba(0,120,215,0.7)','rgba(0,153,188,0.7)',
        'rgba(255,140,0,0.7)','rgba(232,17,35,0.7)', 'rgba(0,99,177,0.7)','rgba(45,125,154,0.7)',
        'rgba(247,99,12,0.7)','rgba(234,0,94,0.7)','rgba(142,140,216,0.7)','rgba(0,183,195,0.7)',
        'rgba(104,118,138,0.7)','rgba(202,80,16,0.7)','rgba(195,0,82,0.7)', 'rgba(107,105,214,0.7)',
        'rgba(3,131,135,0.7)','rgba(218,59,1,0.7)','rgba(227,0,140,0.7)', 'rgba(135,100,184,0.7)',
        'rgba(0,178,148,0.7)','rgba(86,124,115,0.7)','rgba(100,124,100,0.7)', 'rgba(191,0,119,0.7)',
        'rgba(0,204,106,0.7)','rgba(132,117,69,0.7)'];


    var datosG1 = {

        labels: nombreInstituciones,

        datasets: [{
            label: 'Norma A',
            data: porcentajeNormaA,
            backgroundColor: chartColors,
            borderColor: colorBorder,
            borderWidth: 1
        },{
            label: 'Norma B',
            data: porcentajeNormaB,
            backgroundColor: chartColors,
            borderColor: colorBorder,
            borderWidth: 1
        },{
            label: 'Norma C',
            data: porcentajeNormaC,
            backgroundColor: chartColors,
            borderColor: colorBorder,
            borderWidth: 1
        }],
    };
    var datosG2 = {

        labels: nombreInstituciones,

        datasets: [{
            label: 'Norma D',
            data: porcentajeNormaD,
            backgroundColor: chartColors,
            borderColor: colorBorder,
            borderWidth: 1
        },{
            label: 'Norma E',
            data: porcentajeNormaE,
            backgroundColor: chartColors,
            borderColor: colorBorder,
            borderWidth: 1
        },{
            label: 'Norma F',
            data: porcentajeNormaF,
            backgroundColor: chartColors,
            borderColor: colorBorder,
            borderWidth: 1
        }],
    };
    var datosG3 = {

        labels: nombreInstituciones,

        datasets: [{
            label: 'Norma G',
            data: porcentajeNormaG,
            backgroundColor: chartColors,
            borderColor: colorBorder,
            borderWidth: 1
        },{
            label: 'Norma H',
            data: porcentajeNormaH,
            backgroundColor: chartColors,
            borderColor: colorBorder,
            borderWidth: 1
        },{
            label: 'Norma I',
            data: porcentajeNormaI,
            backgroundColor: chartColors,
            borderColor: colorBorder,
            borderWidth: 1
        }],
    };
    var datosG4 = {

        labels: nombreInstituciones,

        datasets: [{
            label: 'Norma J',
            data: porcentajeNormaJ,
            backgroundColor: chartColors,
            borderColor: colorBorder,
            borderWidth: 1
        },{
            label: 'Norma K',
            data: porcentajeNormaK,
            backgroundColor: chartColors,
            borderColor: colorBorder,
            borderWidth: 1
        }],
    };




    var ctx = document.getElementById("chart7").getContext('2d');
    var chart1 = new Chart(ctx, {
        type: 'polarArea',
        data: datosG1,
        options: {

            title : {
                display : true,
                text: 'Puntución Obtenida',
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },

            responsive: true,
            maintainAspectRatio: false,

            legend: {
                display: false
            },
        }
    });

    var ctx = document.getElementById("chart8").getContext('2d');
    var chart1 = new Chart(ctx, {
        type: 'doughnut',
        data: datosG2,
        options: {

            title : {
                display : true,
                text: 'Puntución Obtenida',
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },

            responsive: true,
            maintainAspectRatio: false,

            legend: {
                display: false
            },
        }
    });
    var ctx = document.getElementById("chart9").getContext('2d');
    var chart1 = new Chart(ctx, {
        type: 'doughnut',
        data: datosG3,
        options: {

            title : {
                display : true,
                text: 'Puntución Obtenida',
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },

            responsive: true,
            maintainAspectRatio: false,

            legend: {
                display: false
            },
        }
    });
    var ctx = document.getElementById("chart10").getContext('2d');
    var chart1 = new Chart(ctx, {
        type: 'doughnut',
        data: datosG4,
        options: {

            title : {
                display : true,
                text: 'Puntución Obtenida',
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },

            responsive: true,
            maintainAspectRatio: false,

            legend: {
                display: false
            },
        }
    });
}