var colors=['#D6CC98','#CDE66E','#FFD3B5','#FFAAA6',
    '#FF8C94','#E49FD1','#9ED0C6','#D8728E',
    '#A3C7C7','#83708E','#8FE6CA'];

var bordes=['#BEB67D','#AFDB51','#FFC0A2','#FF868F',
    '#FF5B78','#D476C5','#65BCB7','#C14170',
    '#6DAFB8','#3A4070','#4DDBBC'];

function archivoJS(tot_ins_nor) {

    var nombreInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.cod_nor;
        }
    );
    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_1;
        }
    );

    var datos = {
        labels : nombreInstituciones,
        datasets : [{
            label : "datos 1",
            backgroundColor: colors,
            borderColor:bordes,
            data : valoresInstituciones
        }
        ]
    };

    var canvas = document.getElementById('chart').getContext('2d');
    if (window.bar) {
        window.bar.clear();
        window.bar.destroy();
    }
    window.bar = new Chart(canvas, {
        type : "polarArea",
        data : datos,
        options : {

            legend: {
                position: 'top',
                labels: {
                    fontColor: "#335574",
                    fontFamily: 'Lato',
                    fontSize: 15,
                    padding: 10
                }
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
                text : "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },
            scale: {
                ticks: {
                    beginAtZero: true,
                },

                reverse: false,

            },

        }
    });
}
function archivoJS2(tot_ins_nor) {

    var nombreInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.cod_nor;
        }
    );

    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_2;
        }
    );


    var datos = {
        labels : nombreInstituciones,
        datasets : [{
            label : "datos 1",
            backgroundColor: colors,
            borderColor:bordes,
            data : valoresInstituciones
        }
        ]
    };

    var canvas = document.getElementById('chart').getContext('2d');
    if (window.bar) {
        window.bar.clear();
        window.bar.destroy();
    }
    window.bar = new Chart(canvas, {
        type : "polarArea",
        data : datos,
        options : {

            legend: {
                position: 'top',
                labels: {
                    fontColor: "#335574",
                    fontFamily: 'Lato',
                    fontSize: 15,
                    padding: 10
                }
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
                text : "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },
            scale: {
                ticks: {
                    beginAtZero: true,
                },

                reverse: false,

            },

        }
    });
}
