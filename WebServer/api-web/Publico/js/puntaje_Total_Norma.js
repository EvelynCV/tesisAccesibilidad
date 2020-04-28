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
            title : {
                display : true,
                text : "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
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

            title : {
                display : true,
                text : "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },
        }
    });
}
function archivoJS3(tot_ins_nor) {

    var nombreInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.cod_nor;
        }
    );

    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_3;
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
    console.log(datos);
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

            title : {
                display : true,
                text : "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },
        }
    });
}
function archivoJS4(tot_ins_nor) {
    var nombreInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.cod_nor;
        }
    );

    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_4;
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

            title : {
                display : true,
                text : "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },
        }
    });
}
function archivoJS5(tot_ins_nor) {

    var nombreInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.cod_nor;
        }
    );

    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_5;
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

            title : {
                display : true,
                text : "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },
        }
    });
}
function archivoJS6(tot_ins_nor) {

    var nombreInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.cod_nor;
        }
    );

    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_6;
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

            title : {
                display : true,
                text : "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },
        }
    });
}
function archivoJS7(tot_ins_nor) {

    var nombreInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.cod_nor;
        }
    );

    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_7;
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

            title : {
                display : true,
                text : "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },
        }
    });
}
function archivoJS8(tot_ins_nor) {

    var nombreInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.cod_nor;
        }
    );

    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_8;
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

            title : {
                display : true,
                text : "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },
        }
    });
}
function archivoJS9(tot_ins_nor) {

    var nombreInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.cod_nor;
        }
    );

    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_9;
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

            title : {
                display : true,
                text : "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },
        }
    });
}
function archivoJS10(tot_ins_nor) {
    var nombreInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.cod_nor;
        }
    );

    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_10;
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

            title : {
                display : true,
                text : "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },
        }
    });
}
function archivoJS11(tot_ins_nor) {
    var nombreInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.cod_nor;
        }
    );

    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_11;
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

            title : {
                display : true,
                text : "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },
        }
    });
}
function archivoJS12(tot_ins_nor) {

    var nombreInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.cod_nor;
        }
    );

    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_12;
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

            title : {
                display : true,
                text : "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },
        }
    });
}
function archivoJS13(tot_ins_nor) {

    var nombreInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.cod_nor;
        }
    );

    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_13;
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

            title : {
                display : true,
                text : "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },
        }
    });
}
function archivoJS14(tot_ins_nor) {

    var nombreInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.cod_nor;
        }
    );

    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_14;
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

            title : {
                display : true,
                text : "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },
        }
    });
}
function archivoJS15(tot_ins_nor) {

    var nombreInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.cod_nor;
        }
    );

    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_15;
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

            title : {
                display : true,
                text : "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },
        }
    });
}
function archivoJS16(tot_ins_nor) {

    var nombreInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.cod_nor;
        }
    );

    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_16;
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

            title : {
                display : true,
                text : "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },
        }
    });
}
function archivoJS17(tot_ins_nor) {

    var nombreInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.cod_nor;
        }
    );

    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_17;
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

            title : {
                display : true,
                text : "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },
        }
    });
}
function archivoJS18(tot_ins_nor) {

    var nombreInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.cod_nor;
        }
    );

    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_18;
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

            title : {
                display : true,
                text : "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },
        }
    });
}
function archivoJS19(tot_ins_nor) {
    var nombreInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.cod_nor;
        }
    );

    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_19;
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

            title : {
                display : true,
                text : "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },
        }
    });
}
function archivoJS20(tot_ins_nor) {

    var nombreInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.cod_nor;
        }
    );

    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_20;
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

            title : {
                display : true,
                text : "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },
        }
    });
}
function archivoJS21(tot_ins_nor) {

    var nombreInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.cod_nor;
        }
    );

    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_21;
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

            title : {
                display : true,
                text : "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },
        }
    });
}
function archivoJS22(tot_ins_nor) {

    var nombreInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.cod_nor;
        }
    );

    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_22;
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

            title : {
                display : true,
                text : "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },
        }
    });
}
function archivoJS23(tot_ins_nor) {
    var nombreInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.cod_nor;
        }
    );

    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_23;
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

            title : {
                display : true,
                text : "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },
        }
    });
}
function archivoJS24(tot_ins_nor) {

    var nombreInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.cod_nor;
        }
    );

    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_24;
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

            title : {
                display : true,
                text : "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },
        }
    });
}
function archivoJS25(tot_ins_nor) {

    var nombreInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.cod_nor;
        }
    );

    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_25;
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

            title : {
                display : true,
                text : "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },
        }
    });
}
function archivoJS26(tot_ins_nor) {

    var nombreInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.cod_nor;
        }
    );

    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_26;
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

            title : {
                display : true,
                text : "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },
        }
    });
}
