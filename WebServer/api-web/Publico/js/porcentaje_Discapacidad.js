
function porcentaje_Discapacidad(porcentaje_dis_ins) {

    var nombreInstituciones = porcentaje_dis_ins.map(
        function (NombreInstitucion) {
            return NombreInstitucion.nom_ins;
        }
    );

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

    var datosG1 = {

        labels: idInstituciones,

        datasets: [{
            label: "Motriz",
            backgroundColor: "rgba(191,0,119,0.5)",
            data:motriz
        }],

    };
    var datosG2 = {

        labels: idInstituciones,
        datasets: [{
            label: "Visual",
            backgroundColor: "rgba(0,99,177,0.5)",
            data:visual
        }],

    };
    var datosG3 = {

        labels: idInstituciones,
        datasets: [{
            label: "Auditiva",
            backgroundColor: "rgba(0,204,106,0.5)",
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
            plugins: {
                datalabels: {
                    display: false
                }
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
            plugins: {
                datalabels: {
                    display: false
                }
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
            plugins: {
                datalabels: {
                    display: false
                }
            },


        }
    });
}
