function archivoJS(tot_ins_nor) {
    console.log(tot_ins_nor);
    var nombreInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.cod_nor;
        }
    );
    console.log(nombreInstituciones);

    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_1;
        }
    );
    console.log(valoresInstituciones);

    var datos = {
        labels : nombreInstituciones,
        datasets : [{
            label : "datos 1",
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            data : valoresInstituciones
        }
        ]
    };
    console.log(datos);
    var canvas = document.getElementById('chart').getContext('2d');
    window.bar = new Chart(canvas, {
        type : "polarArea",
        data : datos,
        options : {
            legend: {
                position: 'right'
            },
            elements : {
                rectangle : {
                    borderWidth : 1,
                    borderColor : "rgb(0,255,0)",
                    //borderSkipped : 'bottom'
                }
            },
            responsive : true,
            title : {
                display : true,
                text : "Prueba de grafico de barras"
            }
        }
    });
}
function archivoJS2(tot_ins_nor) {
    console.log(tot_ins_nor);
    var nombreInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.cod_nor;
        }
    );
    console.log(nombreInstituciones);

    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_2;
        }
    );
    console.log(valoresInstituciones);

    var datos = {
        labels : nombreInstituciones,
        datasets : [{
            label : "datos 1",
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            data : valoresInstituciones
        }
        ]
    };
    console.log(datos);
    var canvas = document.getElementById('chart').getContext('2d');
    window.bar = new Chart(canvas, {
        type : "bar",
        data : datos,
        options : {
            legend: {
                position: 'right'
            },
            elements : {
                rectangle : {
                    borderWidth : 1,
                    borderColor : "rgb(0,255,0)",
                   // borderSkipped : ''
                }
            },
            responsive : true,
            title : {
                display : true,
                text : "Prueba de grafico de barras"
            }
        }
    });
}

function archivoJS3(tot_ins_nor) {
    console.log(tot_ins_nor);
    var nombreInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.cod_nor;
        }
    );
    console.log(nombreInstituciones);

    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_3;
        }
    );
    console.log(valoresInstituciones);

    var datos = {
        labels : nombreInstituciones,
        datasets : [{
            label : "datos 1",
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            data : valoresInstituciones
        }
        ]
    };
    console.log(datos);
    var canvas = document.getElementById('chart').getContext('2d');
    window.bar = new Chart(canvas, {
        type : "pie",
        data : datos,
        options : {
            legend: {
                position: 'right'
            },
            elements : {
                rectangle : {
                    borderWidth : 1,
                    borderColor : "rgb(0,255,0)",
                    // borderSkipped : ''
                }
            },
            responsive : true,
            title : {
                display : true,
                text : "Prueba de grafico de barras"
            }
        }
    });
}





/*
function graficar(respuestaFuncion){
        var cosa = respuestaFuncion;
        console.log("esta es la cosa" + cosa);

        if (cosa==1)
        {
            console.log("cosa hecha");
            var datos = {
                labels : nombreInstituciones,
                datasets : [{
                    label : "datos 1",
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    data : valoresInstituciones
                }
                ]
            };
            console.log(datos);
            console.log(datos);
            var canvas = document.getElementById('chart').getContext('2d');
            window.bar = new Chart(canvas, {
                type : "polarArea",
                data : datos,
                options : {
                    legend: {
                        position: 'right'
                    },
                    elements : {
                        rectangle : {
                            borderWidth : 1,
                            borderColor : "rgb(0,255,0)",
                            borderSkipped : 'bottom'
                        }
                    },
                    responsive : true,
                    title : {
                        display : true,
                        text : "Prueba de grafico de barras"
                    }
                }
            });
        }
}
*/


