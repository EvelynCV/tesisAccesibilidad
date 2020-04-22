function porcentajes_Totales(tot_val_ins) {

    var nombreInstituciones = tot_val_ins.map(
        function (NombreInstitucion) {
            return NombreInstitucion.nom_ins;
        }
    );

    var porcentajeInstituciones = tot_val_ins.map(
        function (porcentajeInstituciones) {
            return porcentajeInstituciones.por_ins;
        }
    );


    var ctx = document.getElementById("chart5").getContext('2d');


    var colorbg=[ 'rgba(255,185,0,0.5)','rgba(231,72,86,0.5)','rgba(0,120,215,0.5)','rgba(0,153,188,0.5)',
        'rgba(255,140,0,0.5)','rgba(232,17,35,0.5)', 'rgba(0,99,177,0.5)','rgba(45,125,154,0.5)',
        'rgba(247,99,12,0.5)','rgba(234,0,94,0.5)','rgba(142,140,216,0.5)','rgba(0,183,195,0.5)',
        'rgba(104,118,138,0.5)','rgba(202,80,16,0.5)','rgba(195,0,82,0.5)', 'rgba(107,105,214,0.5)',
        'rgba(3,131,135,0.5)','rgba(218,59,1,0.5)','rgba(227,0,140,0.5)', 'rgba(135,100,184,0.5)',
        'rgba(0,178,148,0.5)','rgba(86,124,115,0.5)','rgba(100,124,100,0.5)', 'rgba(191,0,119,0.5)',
        'rgba(0,204,106,0.5)','rgba(132,117,69,0.5)']


    var chart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: nombreInstituciones,
            datasets: [{

                backgroundColor: colorbg,
                data: porcentajeInstituciones
            }]
        },
        options: {
            title : {
                display : true,
                text : "Porcentaje General de Accesibilidad",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },
            layout: {
                padding: {
                    left: 30,
                    right: 30,
                    top: 0,
                    bottom: 0
                }
            },
            responsive: true,
            maintainAspectRatio: false,

            legend: {
                display: false // Ocultar legendas
            },

            plugins: {
                datalabels: {
                    display: false
                }
            },
        }
    });
}
