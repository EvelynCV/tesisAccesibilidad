/*definir variables para tra*/
var instituciones = document.formulario1.cosa[document.formulario1.cosa.selectedIndex].value;
// 2) crear una funcion que permita ejecutar el cambio dinamico
console.log("aquiholiii")
console.log(instituciones)

var nombreInstituciones = instituciones.map(
    function (institucion) {
        return institucion.nom_ins;

    }
)
console.log(nombreInstituciones)
var valoresInstituciones = instituciones.map(
    function (institucion) {
        return institucion.nor_tot_a;
    }
)
console.log(valoresInstituciones)

function cambia(){
    var cosa;
    //Se toma el valor de la "cosa seleccionada"
    cosa = document.formulario1.cosa[document.formulario1.cosa.selectedIndex].index;
    console.log(cosa);

    if (cosa==1)
    {
        console.log("cosa hecha")
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
        console.log(datos)
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

