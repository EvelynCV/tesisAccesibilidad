function valores_porcentajes_Totales(tot_val_ins) {

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

    var porcentajeInstituciones = tot_val_ins.map(
        function (porcentajeInstituciones) {
            return porcentajeInstituciones.por_ins;
        }
    );


    var ctx = document.getElementById("chart5").getContext('2d');

    var gradientStroke = ctx.createLinearGradient(140, 0, 270, 0);
    gradientStroke.addColorStop(0, '#f49080');

    var colorbg=[ '#ffbf8b','#ffaa66','#ff7f00','rgb(0,204,106)',
        '#f27500','#ff953e','#ff9f31','#ff9424',
        '#f27500','#f27500','#f27500','#f27500',
        '#f27500','#f27500','#f27500','#f27500',
        '#f27500','#f27500','#ff8916','#ff8916',
        '#ff8916','#ff8916','#ff8916','#ff8916',
        '#ff8916','#ff8916']


    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: nombreInstituciones,
            datasets: [{
                borderColor: gradientStroke,
                backgroundColor: colorbg,
                pointBorderColor: colorbg,
                pointHoverBackgroundColor: colorbg,
                pointHoverBorderColor: colorbg,
                pointBorderWidth: 12,
                pointHoverRadius: 10,
                pointHoverBorderWidth: 1,
                pointRadius: 3,
                borderWidth: 4,
                fill: false,
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
            legendCallback: function (chart2) {
                var text = [];
                text.push('<ul class="0-legend">');
                var ds = chart2.data.datasets[0];

                for (var i = 0; i < ds.data.length; i++) {
                    text.push('<li>');
                    text.push('<span style="background-color:' + ds.backgroundColor[i] + '">' + '</span>' + chart2.data.labels[i] + ' (' + ds.data[i] + '%)');
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join("");
            },
            scales:
                {
                    xAxes: [{
                        display: false
                    }],
                    yAxes: [{
                        stacked: true,
                        mirror: true,
                    }]
                },
            plugins: {
                datalabels: {
                    display: false
                }
            },
        }
    });
    var legendContainer = document.getElementById("legend2");
// generate HTML legend
   legendContainer.innerHTML = chart.generateLegend();
}
