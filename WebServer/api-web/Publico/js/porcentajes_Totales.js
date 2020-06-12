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

    var newColors = ['#AB526B', '#BCA297', '#C5CEAE', '#D8C473',
        '#C9C2A2', '#7FEFE4', '#A6C977', '#EDA8AB',
        '#799C60', '#C6D5FF', '#539CB5', '#C2BCF4',
        '#17A3A5', '#E579A8', '#BA69C5', '#DBE88D',
        '#FCBAD2', '#636FD6', '#948E50', '#E8C96D',
        '#525FA2', '#67447B', '#70EADA', '#C7DCA1',
        '#D8CB55', '#D67B7E'];

    var newBorders = ['#792F4F', '#947A7C', '#A3B999', '#C1AB55',
        '#A9A88A', '#34E8DD', '#71B258', '#E28395',
        '#317247', '#A4C3FF', '#2272A2', '#9E9FF1',
        '#097C8D', '#D64591', '#913CB6', '#C6DE6F',
        '#FA9DC6', '#2840CB', '#555E3B', '#DAB250',
        '#2A275B', '#833660', '#159A80', '#A6CD88',
        '#C1B53F', '#BE465D'];

    var newHover = ['#792F4F', '#947A7C', '#A3B999', '#C1AB55',
        '#A9A88A', '#34E8DD', '#71B258', '#E28395',
        '#317247', '#A4C3FF', '#2272A2', '#9E9FF1',
        '#097C8D', '#D64591', '#913CB6', '#C6DE6F',
        '#FA9DC6', '#2840CB', '#555E3B', '#DAB250',
        '#2A275B', '#833660', '#159A80', '#A6CD88',
        '#C1B53F', '#BE465D'];

    var chart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: nombreInstituciones,
            datasets: [{
                label: "Porcentaje",
                backgroundColor: newColors,
                borderColor: newBorders,
                borderWidth: 1.5,
                hoverBackgroundColor: newHover,
                data: porcentajeInstituciones
            }]
        },
        options: {
            title: {
                display: true,
                text: "Porcentajes de Accesibilidad Física",
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
            scales:
                {
                    xAxes: [{
                        display: true,
                    }],
                    yAxes: [{
                        display: false,
                        stacked: true,
                        mirror: true,
                    }]
                },
            responsive: true,
            maintainAspectRatio: false,

            legend: {
                display: false // Ocultar legendas
            },
        }
    });
}
