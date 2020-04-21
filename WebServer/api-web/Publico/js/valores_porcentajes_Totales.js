function valores_porcentajes_Totales(tot_val_ins) {

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
    var porcentajeInstituciones = tot_val_ins.map(
        function (porcentajeValores) {
            return porcentajeValores.por_ins;
        }
    );

    var densityCanvas = document.getElementById("chart5");

    var densityData = {
        label: 'Density of Planet (kg/m3)',
        data: valoresInstituciones,
        backgroundColor: 'rgba(0, 99, 132, 0.6)',
        borderWidth: 0,
        yAxisID: "y-axis-density"
    };

    var gravityData = {
        label: 'Gravity of Planet (m/s2)',
        data: porcentajeInstituciones,
        backgroundColor: 'rgba(99, 132, 0, 0.6)',
        borderWidth: 0,
        yAxisID: "y-axis-gravity"
    };

    var planetData = {
        labels: nombreInstituciones,
        datasets: [densityData, gravityData]
    };

    var chartOptions = {
        scales: {
            xAxes: [{
                barPercentage: 1,
                categoryPercentage: 0.6
            }],
            yAxes: [{
                id: "y-axis-density"
            }, {
                id: "y-axis-gravity"
            }]
        },
        plugins: {
            datalabels: {
                display: false
            }
        },

    };

    var barChart = new Chart(densityCanvas, {
        type: 'horizontalBar',
        data: planetData,
        options: chartOptions
    });
}
