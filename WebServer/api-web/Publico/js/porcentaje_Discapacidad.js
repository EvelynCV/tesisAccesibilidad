/*jhfjhfjh*/
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
    var newColors = ['#AB526B','#BCA297','#C5CEAE','#D8C473',
        '#C9C2A2','#7FEFE4','#A6C977','#EDA8AB',
        '#799C60','#C6D5FF','#539CB5','#C2BCF4',
        '#17A3A5','#E579A8','#BA69C5','#DBE88D',
        '#FCBAD2','#636FD6','#948E50','#E8C96D',
        '#525FA2','#67447B','#70EADA','#C7DCA1',
        '#D8CB55','#D67B7E'];

    var newBorders=['#792F4F','#947A7C','#A3B999','#C1AB55',
        '#A9A88A','#34E8DD','#71B258','#E28395',
        '#317247','#A4C3FF','#2272A2','#9E9FF1',
        '#097C8D','#D64591','#913CB6','#C6DE6F',
        '#FA9DC6','#2840CB','#555E3B','#DAB250',
        '#2A275B','#833660','#159A80','#A6CD88',
        '#C1B53F','#BE465D'];

    var newHover=['#792F4F','#947A7C','#A3B999','#C1AB55',
        '#A9A88A','#34E8DD','#71B258','#E28395',
        '#317247','#A4C3FF','#2272A2','#9E9FF1',
        '#097C8D','#D64591','#913CB6','#C6DE6F',
        '#FA9DC6','#2840CB','#555E3B','#DAB250',
        '#2A275B','#833660','#159A80','#A6CD88',
        '#C1B53F','#BE465D'];

    var dato1 = {
        labels : idInstituciones,
        datasets : [{
            label: "Motriz",
            backgroundColor: "rgba(191,0,119,0.5)",
            pointRadius: 6,
            pointBorderWidth: 1,
            pointBackgroundColor: newColors,
            pointBorderColor: newBorders,
            pointHoverRadius: 20,
            data : motriz
        }
        ]
    };
    var canvas = document.getElementById('chart2').getContext('2d');
    window.bar = new Chart(canvas, {
        type : "radar",
        data : dato1,
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

    var dato2 = {
        labels : idInstituciones,
        datasets : [{
            label: "Visual",
            backgroundColor: "rgba(0,99,177,0.5)",
            pointRadius: 6,
            pointBorderWidth: 1,
            pointBackgroundColor: newColors,
            pointBorderColor: newBorders,
            pointHoverRadius: 20,
            data : visual
        }
        ]
    };
    var canvas2 = document.getElementById('chart3').getContext('2d');
    window.bar = new Chart(canvas2, {
        type : "radar",
        data : dato2,
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
                    beginAtZero: true,
                },

                reverse: false,

            },

        }
    });

    var dato3 = {
        labels : idInstituciones,
        datasets : [{
            label: "Auditiva",
            backgroundColor: "rgba(0,204,106,0.5)",
            pointRadius: 6,
            pointBorderWidth: 1,
            pointBackgroundColor: newColors,
            pointBorderColor: newBorders,
            pointHoverRadius: 20,
            data : auditiva
        }
        ]
    };
    var canvas3 = document.getElementById('chart4').getContext('2d');
    window.bar = new Chart(canvas3, {
        type : "radar",
        data : dato3,
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
                    beginAtZero: true,
                },

                reverse: false,

            },

        }
    });
/*
    var datosG1 = {

        labels: idInstituciones,

        datasets: [{
            label: "Motriz",
            backgroundColor: "rgba(191,0,119,0.5)",
            pointRadius: 6,
            pointBorderWidth: 1,
            pointBackgroundColor: newColors,
            pointBorderColor: newBorders,
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
            pointBackgroundColor: newColors,
            pointBorderColor: newBorders,
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
            pointBackgroundColor: newColors,
            pointBorderColor: newBorders,
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
    });*/
}
