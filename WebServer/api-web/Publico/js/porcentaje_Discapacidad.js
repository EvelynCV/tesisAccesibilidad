
function porcentaje_Discapacidad(porcentaje_dis_ins) {

    var idInstituciones = porcentaje_dis_ins.map(
        function (idInstitucion) {
            return idInstitucion.id_ins;
        }
    );

    var motriz = porcentaje_dis_ins.map(
        function (motriz) {
            return motriz.Porcentaje_Motriz;
        }
    );
    var visual = porcentaje_dis_ins.map(
        function (visual) {
            return visual.Porcentaje_Visual;
        }
    );
    var auditiva = porcentaje_dis_ins.map(
        function (auditiva) {
            return auditiva.Porcentaje_Auditiva;
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
    var datosG1 = {

        labels: idInstituciones,

        datasets: [{
            label: "Motriz",
            backgroundColor: "rgba(191,0,119,0.5)",
            pointRadius: 6,
            pointBorderWidth: 1,
            pointBackgroundColor: chartColors,
            pointBorderColor: colorBorder,
            pointHoverRadius: 20,
            data:motriz
        }],

    };
    var datosG2 = {

        labels: idInstituciones,
        datasets: [{
            label: "Visual",
            backgroundColor: "rgba(0,99,177,0.5)",
            pointRadius: 6,
            pointBorderWidth: 1,
            pointBackgroundColor: chartColors,
            pointBorderColor: colorBorder,
            pointHoverRadius: 20,
            data:visual
        }],

    };
    var datosG3 = {

        labels: idInstituciones,
        datasets: [{
            label: "Auditiva",
            backgroundColor: "rgba(0,204,106,0.5)",
            pointRadius: 6,
            pointBorderWidth: 1,
            pointBackgroundColor: chartColors,
            pointBorderColor: colorBorder,
            pointHoverRadius: 20,
            data:auditiva
        }],

    };

    var canvas = document.getElementById('chart2').getContext('2d');

    window.bar = new Chart(canvas, {
        type : "radar",
        data : datosG1,
        options : {

            legend: {
                display: false // Ocultar legendas
            },

            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    left: 30,
                    right: 30,
                    top: 0,
                    bottom: 0
                }
            },
            title : {
                display : true,
                text : "Porcentaje obtenido para Discapacidad Motriz",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 30
            },
            scale: {
                ticks: {
                    beginAtZero: true,
                },

                reverse: false,

            },

        }
    });

    var canvas = document.getElementById('chart3').getContext('2d');

    window.bar = new Chart(canvas, {
        type : "radar",
        data : datosG2,
        options : {
            legend: {
                display: false // Ocultar legendas
            },

            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    left: 30,
                    right: 30,
                    top: 0,
                    bottom: 0
                }
            },
            title : {
                display : true,
                text : "Porcentaje obtenido para Discapacidad Visual",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 30
            },
            scale: {
                ticks: {
                    beginAtZero: true
                },
                reverse: false
            },
        }
    });
    var canvas = document.getElementById('chart4').getContext('2d');

    window.bar = new Chart(canvas, {
        type : "radar",
        data : datosG3,
        options : {
            legend: {
                display: false // Ocultar legendas
            },

            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    left: 30,
                    right: 30,
                    top: 0,
                    bottom: 0
                }
            },
            title : {
                display : true,
                text : "Porcentaje obtenido para Discapacidad Auditiva",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 30
            },
            scale: {
                ticks: {
                    beginAtZero: true
                },
                reverse: false
            },
        }
    });
}
