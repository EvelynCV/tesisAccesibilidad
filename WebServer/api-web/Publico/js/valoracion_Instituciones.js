function valoracion_Instituciones(tot_val_ins) {
    var nombreInstituciones = tot_val_ins.map(
        function (NombreInstitucion) {
            return NombreInstitucion.nom_ins;
        }
    );

    var valoracionInstituciones = tot_val_ins.map(
        function (valoracionInstitucion) {
            return valoracionInstitucion.Valoración;
        }
    );
    var chartColors = [
        'rgba(255,185,0,0.5)','rgba(231,72,86,0.5)','rgba(0,120,215,0.5)','rgba(0,153,188,0.5)',
        'rgba(255,140,0,0.5)','rgba(232,17,35,0.5)', 'rgba(0,99,177,0.5)','rgba(45,125,154,0.5)',
        'rgba(247,99,12,0.5)','rgba(234,0,94,0.5)','rgba(142,140,216,0.5)','rgba(0,183,195,0.5)',
        'rgba(104,118,138,0.5)','rgba(202,80,16,0.5)','rgba(195,0,82,0.5)', 'rgba(107,105,214,0.5)',
        'rgba(3,131,135,0.5)','rgba(218,59,1,0.5)','rgba(227,0,140,0.5)', 'rgba(135,100,184,0.5)',
        'rgba(0,178,148,0.5)','rgba(86,124,115,0.5)','rgba(100,124,100,0.5)', 'rgba(191,0,119,0.5)',
        'rgba(0,204,106,0.5)','rgba(132,117,69,0.5)'
    ];
    var ctx = document.getElementById("chart6").getContext("2d");
    var myLine = new Chart(ctx, {
        type: 'line',
        data: {
            xLabels: nombreInstituciones,
            yLabels: ['Alto', 'Medio', 'Bajo', ''],
            datasets: [{
                label: "Valoración",
                data: valoracionInstituciones,
                fill: true,
                showLine: true,
                pointBackgroundColor: chartColors,
                pointHoverBackgroundColor: chartColors,
                pointRadius: 8,
                pointHoverRadius: 20,
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            legend: {
                display: false,
            },
            title : {
                display : true,
                text : "Valoración de Accesibilidad Física",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10,

            },
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    display: false,
                    scaleLabel: {
                        display: true,
                        labelString: 'Instituciones'
                    }
                }],
                yAxes: [{
                    type: 'category',
                    position: 'left',
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Valoración'
                    },
                    ticks: {
                        reverse: true,
                    },
                }]
            }
        }
    });
}