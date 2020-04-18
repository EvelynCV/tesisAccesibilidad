function puntajeTotal(tot_val_ins) {

    var nombreInstituciones = tot_val_ins.map(
        function (NombreInstitucion) {
            return NombreInstitucion.nom_ins;
        }
    );

    var valoresInstituciones = tot_val_ins.map(
        function (totalValores) {
            return totalValores.tot_val;
        }
    );

    var datos = {

        labels : nombreInstituciones,
        fontSize: 18,
        datasets : [{
            label : "Puntaje obtenido",
            backgroundColor: [
                'rgba(255,185,0,0.2)','rgba(231,72,86,0.2)','rgba(0,120,215,0.2)','rgba(0,153,188,0.2)',
                'rgba(255,140,0,0.2)','rgba(232,17,35,0.2)', 'rgba(0,99,177,0.2)','rgba(45,125,154,0.2)',
                'rgba(247,99,12,0.2)','rgba(234,0,94,0.2)','rgba(142,140,216,0.2)','rgba(0,183,195,0.2)',
                'rgba(104,118,138,0.2)','rgba(202,80,16,0.2)','rgba(195,0,82,0.2)', 'rgba(107,105,214,0.2)',
                'rgba(3,131,135,0.2)','rgba(218,59,1,0.2)','rgba(227,0,140,0.2)', 'rgba(135,100,184,0.2)',
                'rgba(0,178,148,0.2)','rgba(86,124,115,0.2)','rgba(100,124,100,0.2)', 'rgba(191,0,119,0.2)',
                'rgba(0,204,106,0.2)','rgba(132,117,69,0.2)'
            ],
            borderWidth: 2,
            borderColor: [
                'rgba(255,185,0,1)','rgba(231,72,86,1)','rgba(0,120,215,1)','rgba(0,153,188,1)',
                'rgba(255,140,0,1)','rgba(232,17,35,1)', 'rgba(0,99,177,1)','rgba(45,125,154,1)',
                'rgba(247,99,12,1)','rgba(234,0,94,1)','rgba(142,140,216,1)','rgba(0,183,195,1)',
                'rgba(104,118,138,1)','rgba(202,80,16,1)','rgba(195,0,82,1)', 'rgba(107,105,214,1)',
                'rgba(3,131,135,1)','rgba(218,59,1,1)','rgba(227,0,140,1)', 'rgba(135,100,184,1)',
                'rgba(0,178,148,1)','rgba(86,124,115,1)','rgba(100,124,100,1)', 'rgba(191,0,119,1)',
                'rgba(0,204,106,1)','rgba(132,117,69,1)'

            ],

            data : valoresInstituciones
        }
        ]
    };
    console.log(datos);
    var canvas = document.getElementById('chart1').getContext('2d');

    window.bar = new Chart(canvas, {
        type : "bar",
        data : datos,
        options : {
            legend: {
                display: false // Ocultar legendas
            },

            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    left: 50,
                    right: 50,
                    top: 0,
                    bottom: 0
                }
            },
            title : {
                display : true,
                text : "Puntaje Total obtenido por Institución",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 50
            },
            scales: {
                xAxes: [{
                    categorySpacing: 0.2,
                    barPercentage: 1,
                    ticks: {
                        display: false
                    }
                }],
                yAxes: [{
                    stacked: true,
                }]
            }
        }
    });
}
