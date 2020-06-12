var colors = ['#D6CC98', '#CDE66E', '#FFD3B5', '#FFAAA6',
    '#FF8C94', '#E49FD1', '#9ED0C6', '#D8728E',
    '#A3C7C7', '#83708E', '#8FE6CA'];

var colorsO = ['rgb(214, 204, 152,0.5)', 'rgb(205, 230, 110,0.5)', 'rgb(255, 211, 181,0.5)', 'rgb(255, 170, 166,0.5)',
    'rgb(255, 140, 148,0.5)', 'rgb(131, 112, 142,0.5)', 'rgb(158, 208, 198,0.5)', 'rgb(216, 114, 142,0.5)',
    'rgb(163, 199, 199,0.5)', 'rgb(131, 112, 142,0.5)', 'rgb(143, 230, 202,0.5)'];

var bordes = ['#BEB67D', '#AFDB51', '#FFC0A2', '#FF868F',
    '#FF5B78', '#D476C5', '#65BCB7', '#C14170',
    '#6DAFB8', '#3A4070', '#4DDBBC'];

function archivoJS(tot_ins_nor) {
    var codNor = tot_ins_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var nombreNorma = tot_ins_nor.map(
        function (norma) {
            return norma.nom_nor;
        }
    );
    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_1;
        }
    );

    var datos = {

        labels: nombreNorma,

        datasets: [{
            backgroundColor: colorsO,
            borderColor: bordes,
            data: valoresInstituciones
        }
        ]
    };


    document.getElementById("chartContainer").innerHTML = '<canvas id="chart"></canvas>';
    var canvas = document.getElementById('chart').getContext('2d');
    var chart = new Chart(canvas, {
        type: "polarArea",
        data: datos,
        options: {

            responsive: true,
            maintainAspectRatio: false,

            title: {
                display: true,
                text: "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 15
            },

            legend: {
                display: false
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="0-legend">');
                var ds = chart.data.datasets[0];
                text.push('<h4 style="font-family: Lato; text-align: center; margin-bottom: 15px; color: #335574">Normas Técnicas de Acesibilidad Física</h4>');
                for (var i = 0; i < ds.data.length; i++) {
                    text.push('<li>');
                    text.push('<span style="font-family: Lato; background-color:' + ds.borderColor[i] + ';">' + '</span>' + chart.data.labels[i]);
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join("");
            },
        }
    });
    var myLegendContainer = document.getElementById("legend2");
    // generate HTML legend
    myLegendContainer.innerHTML = chart.generateLegend();
}

function archivoJS2(tot_ins_nor) {

    var codNor = tot_ins_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var nombreNorma = tot_ins_nor.map(
        function (norma) {
            return norma.nom_nor;
        }
    );
    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_2;
        }
    );

    var datos = {

        labels: nombreNorma,

        datasets: [{
            backgroundColor: colorsO,
            borderColor: bordes,
            data: valoresInstituciones
        }
        ]
    };


    document.getElementById("chartContainer").innerHTML = '<canvas id="chart"></canvas>';
    var canvas = document.getElementById('chart').getContext('2d');
    var chart = new Chart(canvas, {
        type: "polarArea",
        data: datos,
        options: {

            responsive: true,
            maintainAspectRatio: false,

            title: {
                display: true,
                text: "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },
            legend: {
                display: false
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="0-legend">');
                var ds = chart.data.datasets[0];
                text.push('<h4 style="font-family: Lato; text-align: center; margin-bottom: 15px; color: #335574">Normas Técnicas de Acesibilidad Física</h4>');
                for (var i = 0; i < ds.data.length; i++) {
                    text.push('<li>');
                    text.push('<span style="font-family: Lato; background-color:' + ds.borderColor[i] + ';">' + '</span>' + chart.data.labels[i]);
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join("");
            },
        }
    });
    var myLegendContainer = document.getElementById("legend2");
    // generate HTML legend
    myLegendContainer.innerHTML = chart.generateLegend();
}

function archivoJS3(tot_ins_nor) {
    var codNor = tot_ins_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var nombreNorma = tot_ins_nor.map(
        function (norma) {
            return norma.nom_nor;
        }
    );
    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_3;
        }
    );

    var datos = {

        labels: nombreNorma,

        datasets: [{
            backgroundColor: colorsO,
            borderColor: bordes,
            data: valoresInstituciones
        }
        ]
    };


    document.getElementById("chartContainer").innerHTML = '<canvas id="chart"></canvas>';
    var canvas = document.getElementById('chart').getContext('2d');
    var chart = new Chart(canvas, {
        type: "polarArea",
        data: datos,
        options: {

            responsive: true,
            maintainAspectRatio: false,

            title: {
                display: true,
                text: "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 15
            },

            legend: {
                display: false
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="0-legend">');
                var ds = chart.data.datasets[0];
                text.push('<h4 style="font-family: Lato; text-align: center; margin-bottom: 15px; color: #335574">Normas Técnicas de Acesibilidad Física</h4>');
                for (var i = 0; i < ds.data.length; i++) {
                    text.push('<li>');
                    text.push('<span style="font-family: Lato; background-color:' + ds.borderColor[i] + ';">' + '</span>' + chart.data.labels[i]);
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join("");
            },
        }
    });
    var myLegendContainer = document.getElementById("legend2");
    // generate HTML legend
    myLegendContainer.innerHTML = chart.generateLegend();
}

function archivoJS4(tot_ins_nor) {
    var codNor = tot_ins_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var nombreNorma = tot_ins_nor.map(
        function (norma) {
            return norma.nom_nor;
        }
    );
    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_4;
        }
    );

    var datos = {

        labels: nombreNorma,

        datasets: [{
            backgroundColor: colorsO,
            borderColor: bordes,
            data: valoresInstituciones
        }
        ]
    };


    document.getElementById("chartContainer").innerHTML = '<canvas id="chart"></canvas>';
    var canvas = document.getElementById('chart').getContext('2d');
    var chart = new Chart(canvas, {
        type: "polarArea",
        data: datos,
        options: {
            responsive: true,
            maintainAspectRatio: false,

            title: {
                display: true,
                text: "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 15
            },

            legend: {
                display: false
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="0-legend">');
                var ds = chart.data.datasets[0];
                text.push('<h4 style="font-family: Lato; text-align: center; margin-bottom: 15px; color: #335574">Normas Técnicas de Acesibilidad Física</h4>');
                for (var i = 0; i < ds.data.length; i++) {
                    text.push('<li>');
                    text.push('<span style="font-family: Lato; background-color:' + ds.borderColor[i] + ';">' + '</span>' + chart.data.labels[i]);
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join("");
            },
        }
    });
    var myLegendContainer = document.getElementById("legend2");
    // generate HTML legend
    myLegendContainer.innerHTML = chart.generateLegend();
}

function archivoJS5(tot_ins_nor) {
    var codNor = tot_ins_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var nombreNorma = tot_ins_nor.map(
        function (norma) {
            return norma.nom_nor;
        }
    );
    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_5;
        }
    );

    var datos = {

        labels: nombreNorma,

        datasets: [{
            backgroundColor: colorsO,
            borderColor: bordes,
            data: valoresInstituciones
        }
        ]
    };


    document.getElementById("chartContainer").innerHTML = '<canvas id="chart"></canvas>';
    var canvas = document.getElementById('chart').getContext('2d');
    var chart = new Chart(canvas, {
        type: "polarArea",
        data: datos,
        options: {
            responsive: true,
            maintainAspectRatio: false,

            title: {
                display: true,
                text: "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 15
            },

            legend: {
                display: false
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="0-legend">');
                var ds = chart.data.datasets[0];
                text.push('<h4 style="font-family: Lato; text-align: center; margin-bottom: 15px; color: #335574">Normas Técnicas de Acesibilidad Física</h4>');
                for (var i = 0; i < ds.data.length; i++) {
                    text.push('<li>');
                    text.push('<span style="font-family: Lato; background-color:' + ds.borderColor[i] + ';">' + '</span>' + chart.data.labels[i]);
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join("");
            },
        }
    });
    var myLegendContainer = document.getElementById("legend2");
    // generate HTML legend
    myLegendContainer.innerHTML = chart.generateLegend();
}

function archivoJS6(tot_ins_nor) {

    var codNor = tot_ins_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var nombreNorma = tot_ins_nor.map(
        function (norma) {
            return norma.nom_nor;
        }
    );
    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_6;
        }
    );

    var datos = {

        labels: nombreNorma,

        datasets: [{
            backgroundColor: colorsO,
            borderColor: bordes,
            data: valoresInstituciones
        }
        ]
    };


    document.getElementById("chartContainer").innerHTML = '<canvas id="chart"></canvas>';
    var canvas = document.getElementById('chart').getContext('2d');
    var chart = new Chart(canvas, {
        type: "polarArea",
        data: datos,
        options: {
            responsive: true,
            maintainAspectRatio: false,

            title: {
                display: true,
                text: "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 15
            },

            legend: {
                display: false
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="0-legend">');
                var ds = chart.data.datasets[0];
                text.push('<h4 style="font-family: Lato; text-align: center; margin-bottom: 15px; color: #335574">Normas Técnicas de Acesibilidad Física</h4>');
                for (var i = 0; i < ds.data.length; i++) {
                    text.push('<li>');
                    text.push('<span style="font-family: Lato; background-color:' + ds.borderColor[i] + ';">' + '</span>' + chart.data.labels[i]);
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join("");
            },
        }
    });
    var myLegendContainer = document.getElementById("legend2");
    // generate HTML legend
    myLegendContainer.innerHTML = chart.generateLegend();
}

function archivoJS7(tot_ins_nor) {
    var codNor = tot_ins_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var nombreNorma = tot_ins_nor.map(
        function (norma) {
            return norma.nom_nor;
        }
    );
    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_7;
        }
    );

    var datos = {

        labels: nombreNorma,

        datasets: [{
            backgroundColor: colorsO,
            borderColor: bordes,
            data: valoresInstituciones
        }
        ]
    };


    document.getElementById("chartContainer").innerHTML = '<canvas id="chart"></canvas>';
    var canvas = document.getElementById('chart').getContext('2d');
    var chart = new Chart(canvas, {
        type: "polarArea",
        data: datos,
        options: {
            responsive: true,
            maintainAspectRatio: false,

            title: {
                display: true,
                text: "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 15
            },

            legend: {
                display: false
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="0-legend">');
                var ds = chart.data.datasets[0];
                text.push('<h4 style="font-family: Lato; text-align: center; margin-bottom: 15px; color: #335574">Normas Técnicas de Acesibilidad Física</h4>');
                for (var i = 0; i < ds.data.length; i++) {
                    text.push('<li>');
                    text.push('<span style="font-family: Lato; background-color:' + ds.borderColor[i] + ';">' + '</span>' + chart.data.labels[i]);
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join("");
            },
        }
    });
    var myLegendContainer = document.getElementById("legend2");
    // generate HTML legend
    myLegendContainer.innerHTML = chart.generateLegend();
}

function archivoJS8(tot_ins_nor) {
    var codNor = tot_ins_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var nombreNorma = tot_ins_nor.map(
        function (norma) {
            return norma.nom_nor;
        }
    );
    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_8;
        }
    );

    var datos = {

        labels: nombreNorma,

        datasets: [{
            backgroundColor: colorsO,
            borderColor: bordes,
            data: valoresInstituciones
        }
        ]
    };


    document.getElementById("chartContainer").innerHTML = '<canvas id="chart"></canvas>';
    var canvas = document.getElementById('chart').getContext('2d');
    var chart = new Chart(canvas, {
        type: "polarArea",
        data: datos,
        options: {
            responsive: true,
            maintainAspectRatio: false,

            title: {
                display: true,
                text: "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 15
            },

            legend: {
                display: false
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="0-legend">');
                var ds = chart.data.datasets[0];
                text.push('<h4 style="font-family: Lato; text-align: center; margin-bottom: 15px; color: #335574">Normas Técnicas de Acesibilidad Física</h4>');
                for (var i = 0; i < ds.data.length; i++) {
                    text.push('<li>');
                    text.push('<span style="font-family: Lato; background-color:' + ds.borderColor[i] + ';">' + '</span>' + chart.data.labels[i]);
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join("");
            },
        }
    });
    var myLegendContainer = document.getElementById("legend2");
    // generate HTML legend
    myLegendContainer.innerHTML = chart.generateLegend();
}

function archivoJS9(tot_ins_nor) {

    var codNor = tot_ins_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var nombreNorma = tot_ins_nor.map(
        function (norma) {
            return norma.nom_nor;
        }
    );
    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_9;
        }
    );

    var datos = {

        labels: nombreNorma,

        datasets: [{
            backgroundColor: colorsO,
            borderColor: bordes,
            data: valoresInstituciones
        }
        ]
    };


    document.getElementById("chartContainer").innerHTML = '<canvas id="chart"></canvas>';
    var canvas = document.getElementById('chart').getContext('2d');
    var chart = new Chart(canvas, {
        type: "polarArea",
        data: datos,
        options: {
            responsive: true,
            maintainAspectRatio: false,

            title: {
                display: true,
                text: "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 15
            },

            legend: {
                display: false
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="0-legend">');
                var ds = chart.data.datasets[0];
                text.push('<h4 style="font-family: Lato; text-align: center; margin-bottom: 15px; color: #335574">Normas Técnicas de Acesibilidad Física</h4>');
                for (var i = 0; i < ds.data.length; i++) {
                    text.push('<li>');
                    text.push('<span style="font-family: Lato; background-color:' + ds.borderColor[i] + ';">' + '</span>' + chart.data.labels[i]);
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join("");
            },
        }
    });
    var myLegendContainer = document.getElementById("legend2");
    // generate HTML legend
    myLegendContainer.innerHTML = chart.generateLegend();
}

function archivoJS10(tot_ins_nor) {
    var codNor = tot_ins_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var nombreNorma = tot_ins_nor.map(
        function (norma) {
            return norma.nom_nor;
        }
    );
    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_10;
        }
    );

    var datos = {

        labels: nombreNorma,

        datasets: [{
            backgroundColor: colorsO,
            borderColor: bordes,
            data: valoresInstituciones
        }
        ]
    };


    document.getElementById("chartContainer").innerHTML = '<canvas id="chart"></canvas>';
    var canvas = document.getElementById('chart').getContext('2d');
    var chart = new Chart(canvas, {
        type: "polarArea",
        data: datos,
        options: {
            responsive: true,
            maintainAspectRatio: false,

            title: {
                display: true,
                text: "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 15
            },

            legend: {
                display: false
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="0-legend">');
                var ds = chart.data.datasets[0];
                text.push('<h4 style="font-family: Lato; text-align: center; margin-bottom: 15px; color: #335574">Normas Técnicas de Acesibilidad Física</h4>');
                for (var i = 0; i < ds.data.length; i++) {
                    text.push('<li>');
                    text.push('<span style="font-family: Lato; background-color:' + ds.borderColor[i] + ';">' + '</span>' + chart.data.labels[i]);
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join("");
            },
        }
    });
    var myLegendContainer = document.getElementById("legend2");
    // generate HTML legend
    myLegendContainer.innerHTML = chart.generateLegend();
}

function archivoJS11(tot_ins_nor) {
    var codNor = tot_ins_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var nombreNorma = tot_ins_nor.map(
        function (norma) {
            return norma.nom_nor;
        }
    );
    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_11;
        }
    );

    var datos = {

        labels: nombreNorma,

        datasets: [{
            backgroundColor: colorsO,
            borderColor: bordes,
            data: valoresInstituciones
        }
        ]
    };


    document.getElementById("chartContainer").innerHTML = '<canvas id="chart"></canvas>';
    var canvas = document.getElementById('chart').getContext('2d');
    var chart = new Chart(canvas, {
        type: "polarArea",
        data: datos,
        options: {
            responsive: true,
            maintainAspectRatio: false,

            title: {
                display: true,
                text: "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 15
            },

            legend: {
                display: false
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="0-legend">');
                var ds = chart.data.datasets[0];
                text.push('<h4 style="font-family: Lato; text-align: center; margin-bottom: 15px; color: #335574">Normas Técnicas de Acesibilidad Física</h4>');
                for (var i = 0; i < ds.data.length; i++) {
                    text.push('<li>');
                    text.push('<span style="font-family: Lato; background-color:' + ds.borderColor[i] + ';">' + '</span>' + chart.data.labels[i]);
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join("");
            },
        }
    });
    var myLegendContainer = document.getElementById("legend2");
    // generate HTML legend
    myLegendContainer.innerHTML = chart.generateLegend();
}

function archivoJS12(tot_ins_nor) {
    var codNor = tot_ins_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var nombreNorma = tot_ins_nor.map(
        function (norma) {
            return norma.nom_nor;
        }
    );
    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_12;
        }
    );

    var datos = {

        labels: nombreNorma,

        datasets: [{
            backgroundColor: colorsO,
            borderColor: bordes,
            data: valoresInstituciones
        }
        ]
    };


    document.getElementById("chartContainer").innerHTML = '<canvas id="chart"></canvas>';
    var canvas = document.getElementById('chart').getContext('2d');
    var chart = new Chart(canvas, {
        type: "polarArea",
        data: datos,
        options: {
            responsive: true,
            maintainAspectRatio: false,

            title: {
                display: true,
                text: "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 15
            },

            legend: {
                display: false
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="0-legend">');
                var ds = chart.data.datasets[0];
                text.push('<h4 style="font-family: Lato; text-align: center; margin-bottom: 15px; color: #335574">Normas Técnicas de Acesibilidad Física</h4>');
                for (var i = 0; i < ds.data.length; i++) {
                    text.push('<li>');
                    text.push('<span style="font-family: Lato; background-color:' + ds.borderColor[i] + ';">' + '</span>' + chart.data.labels[i]);
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join("");
            },
        }
    });
    var myLegendContainer = document.getElementById("legend2");
    // generate HTML legend
    myLegendContainer.innerHTML = chart.generateLegend();
}

function archivoJS13(tot_ins_nor) {
    var codNor = tot_ins_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var nombreNorma = tot_ins_nor.map(
        function (norma) {
            return norma.nom_nor;
        }
    );
    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_13;
        }
    );

    var datos = {

        labels: nombreNorma,

        datasets: [{
            backgroundColor: colorsO,
            borderColor: bordes,
            data: valoresInstituciones
        }
        ]
    };


    document.getElementById("chartContainer").innerHTML = '<canvas id="chart"></canvas>';
    var canvas = document.getElementById('chart').getContext('2d');
    var chart = new Chart(canvas, {
        type: "polarArea",
        data: datos,
        options: {
            responsive: true,
            maintainAspectRatio: false,

            title: {
                display: true,
                text: "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 15
            },

            legend: {
                display: false
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="0-legend">');
                var ds = chart.data.datasets[0];
                text.push('<h4 style="font-family: Lato; text-align: center; margin-bottom: 15px; color: #335574">Normas Técnicas de Acesibilidad Física</h4>');
                for (var i = 0; i < ds.data.length; i++) {
                    text.push('<li>');
                    text.push('<span style="font-family: Lato; background-color:' + ds.borderColor[i] + ';">' + '</span>' + chart.data.labels[i]);
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join("");
            },
        }
    });
    var myLegendContainer = document.getElementById("legend2");
    // generate HTML legend
    myLegendContainer.innerHTML = chart.generateLegend();
}

function archivoJS14(tot_ins_nor) {
    var codNor = tot_ins_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var nombreNorma = tot_ins_nor.map(
        function (norma) {
            return norma.nom_nor;
        }
    );
    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_14;
        }
    );

    var datos = {

        labels: nombreNorma,

        datasets: [{
            backgroundColor: colorsO,
            borderColor: bordes,
            data: valoresInstituciones
        }
        ]
    };


    document.getElementById("chartContainer").innerHTML = '<canvas id="chart"></canvas>';
    var canvas = document.getElementById('chart').getContext('2d');
    var chart = new Chart(canvas, {
        type: "polarArea",
        data: datos,
        options: {
            responsive: true,
            maintainAspectRatio: false,

            title: {
                display: true,
                text: "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 15
            },

            legend: {
                display: false
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="0-legend">');
                var ds = chart.data.datasets[0];
                text.push('<h4 style="font-family: Lato; text-align: center; margin-bottom: 15px; color: #335574">Normas Técnicas de Acesibilidad Física</h4>');
                for (var i = 0; i < ds.data.length; i++) {
                    text.push('<li>');
                    text.push('<span style="font-family: Lato; background-color:' + ds.borderColor[i] + ';">' + '</span>' + chart.data.labels[i]);
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join("");
            },
        }
    });
    var myLegendContainer = document.getElementById("legend2");
    // generate HTML legend
    myLegendContainer.innerHTML = chart.generateLegend();
}

function archivoJS15(tot_ins_nor) {
    var codNor = tot_ins_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var nombreNorma = tot_ins_nor.map(
        function (norma) {
            return norma.nom_nor;
        }
    );
    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_15;
        }
    );

    var datos = {

        labels: nombreNorma,

        datasets: [{
            backgroundColor: colorsO,
            borderColor: bordes,
            data: valoresInstituciones
        }
        ]
    };


    document.getElementById("chartContainer").innerHTML = '<canvas id="chart"></canvas>';
    var canvas = document.getElementById('chart').getContext('2d');
    var chart = new Chart(canvas, {
        type: "polarArea",
        data: datos,
        options: {
            responsive: true,
            maintainAspectRatio: false,

            title: {
                display: true,
                text: "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 15
            },

            legend: {
                display: false
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="0-legend">');
                var ds = chart.data.datasets[0];
                text.push('<h4 style="font-family: Lato; text-align: center; margin-bottom: 15px; color: #335574">Normas Técnicas de Acesibilidad Física</h4>');
                for (var i = 0; i < ds.data.length; i++) {
                    text.push('<li>');
                    text.push('<span style="font-family: Lato; background-color:' + ds.borderColor[i] + ';">' + '</span>' + chart.data.labels[i]);
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join("");
            },
        }
    });
    var myLegendContainer = document.getElementById("legend2");
    // generate HTML legend
    myLegendContainer.innerHTML = chart.generateLegend();
}

function archivoJS16(tot_ins_nor) {
    var codNor = tot_ins_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var nombreNorma = tot_ins_nor.map(
        function (norma) {
            return norma.nom_nor;
        }
    );
    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_16;
        }
    );

    var datos = {

        labels: nombreNorma,

        datasets: [{
            backgroundColor: colorsO,
            borderColor: bordes,
            data: valoresInstituciones
        }
        ]
    };


    document.getElementById("chartContainer").innerHTML = '<canvas id="chart"></canvas>';
    var canvas = document.getElementById('chart').getContext('2d');
    var chart = new Chart(canvas, {
        type: "polarArea",
        data: datos,
        options: {
            responsive: true,
            maintainAspectRatio: false,

            title: {
                display: true,
                text: "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 15
            },

            legend: {
                display: false
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="0-legend">');
                var ds = chart.data.datasets[0];
                text.push('<h4 style="font-family: Lato; text-align: center; margin-bottom: 15px; color: #335574">Normas Técnicas de Acesibilidad Física</h4>');
                for (var i = 0; i < ds.data.length; i++) {
                    text.push('<li>');
                    text.push('<span style="font-family: Lato; background-color:' + ds.borderColor[i] + ';">' + '</span>' + chart.data.labels[i]);
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join("");
            },
        }
    });
    var myLegendContainer = document.getElementById("legend2");
    // generate HTML legend
    myLegendContainer.innerHTML = chart.generateLegend();
}

function archivoJS17(tot_ins_nor) {
    var codNor = tot_ins_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var nombreNorma = tot_ins_nor.map(
        function (norma) {
            return norma.nom_nor;
        }
    );
    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_17;
        }
    );

    var datos = {

        labels: nombreNorma,

        datasets: [{
            backgroundColor: colorsO,
            borderColor: bordes,
            data: valoresInstituciones
        }
        ]
    };


    document.getElementById("chartContainer").innerHTML = '<canvas id="chart"></canvas>';
    var canvas = document.getElementById('chart').getContext('2d');
    var chart = new Chart(canvas, {
        type: "polarArea",
        data: datos,
        options: {
            responsive: true,
            maintainAspectRatio: false,

            title: {
                display: true,
                text: "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 15
            },

            legend: {
                display: false
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="0-legend">');
                var ds = chart.data.datasets[0];
                text.push('<h4 style="font-family: Lato; text-align: center; margin-bottom: 15px; color: #335574">Normas Técnicas de Acesibilidad Física</h4>');
                for (var i = 0; i < ds.data.length; i++) {
                    text.push('<li>');
                    text.push('<span style="font-family: Lato; background-color:' + ds.borderColor[i] + ';">' + '</span>' + chart.data.labels[i]);
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join("");
            },
        }
    });
    var myLegendContainer = document.getElementById("legend2");
    // generate HTML legend
    myLegendContainer.innerHTML = chart.generateLegend();
}

function archivoJS18(tot_ins_nor) {
    var codNor = tot_ins_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var nombreNorma = tot_ins_nor.map(
        function (norma) {
            return norma.nom_nor;
        }
    );
    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_18;
        }
    );

    var datos = {

        labels: nombreNorma,

        datasets: [{
            backgroundColor: colorsO,
            borderColor: bordes,
            data: valoresInstituciones
        }
        ]
    };


    document.getElementById("chartContainer").innerHTML = '<canvas id="chart"></canvas>';
    var canvas = document.getElementById('chart').getContext('2d');
    var chart = new Chart(canvas, {
        type: "polarArea",
        data: datos,
        options: {
            responsive: true,
            maintainAspectRatio: false,

            title: {
                display: true,
                text: "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 15
            },

            legend: {
                display: false
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="0-legend">');
                var ds = chart.data.datasets[0];
                text.push('<h4 style="font-family: Lato; text-align: center; margin-bottom: 15px; color: #335574">Normas Técnicas de Acesibilidad Física</h4>');
                for (var i = 0; i < ds.data.length; i++) {
                    text.push('<li>');
                    text.push('<span style="font-family: Lato; background-color:' + ds.borderColor[i] + ';">' + '</span>' + chart.data.labels[i]);
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join("");
            },
        }
    });
    var myLegendContainer = document.getElementById("legend2");
    // generate HTML legend
    myLegendContainer.innerHTML = chart.generateLegend();
}

function archivoJS19(tot_ins_nor) {
    var codNor = tot_ins_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var nombreNorma = tot_ins_nor.map(
        function (norma) {
            return norma.nom_nor;
        }
    );
    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_19;
        }
    );

    var datos = {

        labels: nombreNorma,

        datasets: [{
            backgroundColor: colorsO,
            borderColor: bordes,
            data: valoresInstituciones
        }
        ]
    };


    document.getElementById("chartContainer").innerHTML = '<canvas id="chart"></canvas>';
    var canvas = document.getElementById('chart').getContext('2d');
    var chart = new Chart(canvas, {
        type: "polarArea",
        data: datos,
        options: {
            responsive: true,
            maintainAspectRatio: false,

            title: {
                display: true,
                text: "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 15
            },

            legend: {
                display: false
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="0-legend">');
                var ds = chart.data.datasets[0];
                text.push('<h4 style="font-family: Lato; text-align: center; margin-bottom: 15px; color: #335574">Normas Técnicas de Acesibilidad Física</h4>');
                for (var i = 0; i < ds.data.length; i++) {
                    text.push('<li>');
                    text.push('<span style="font-family: Lato; background-color:' + ds.borderColor[i] + ';">' + '</span>' + chart.data.labels[i]);
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join("");
            },
        }
    });
    var myLegendContainer = document.getElementById("legend2");
    // generate HTML legend
    myLegendContainer.innerHTML = chart.generateLegend();
}

function archivoJS20(tot_ins_nor) {
    var codNor = tot_ins_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var nombreNorma = tot_ins_nor.map(
        function (norma) {
            return norma.nom_nor;
        }
    );
    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_20;
        }
    );

    var datos = {

        labels: nombreNorma,

        datasets: [{
            backgroundColor: colorsO,
            borderColor: bordes,
            data: valoresInstituciones
        }
        ]
    };


    document.getElementById("chartContainer").innerHTML = '<canvas id="chart"></canvas>';
    var canvas = document.getElementById('chart').getContext('2d');
    var chart = new Chart(canvas, {
        type: "polarArea",
        data: datos,
        options: {
            responsive: true,
            maintainAspectRatio: false,

            title: {
                display: true,
                text: "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 15
            },

            legend: {
                display: false
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="0-legend">');
                var ds = chart.data.datasets[0];
                text.push('<h4 style="font-family: Lato; text-align: center; margin-bottom: 15px; color: #335574">Normas Técnicas de Acesibilidad Física</h4>');
                for (var i = 0; i < ds.data.length; i++) {
                    text.push('<li>');
                    text.push('<span style="font-family: Lato; background-color:' + ds.borderColor[i] + ';">' + '</span>' + chart.data.labels[i]);
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join("");
            },
        }
    });
    var myLegendContainer = document.getElementById("legend2");
    // generate HTML legend
    myLegendContainer.innerHTML = chart.generateLegend();
}

function archivoJS21(tot_ins_nor) {
    var codNor = tot_ins_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var nombreNorma = tot_ins_nor.map(
        function (norma) {
            return norma.nom_nor;
        }
    );
    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_21;
        }
    );

    var datos = {

        labels: nombreNorma,

        datasets: [{
            backgroundColor: colorsO,
            borderColor: bordes,
            data: valoresInstituciones
        }
        ]
    };


    document.getElementById("chartContainer").innerHTML = '<canvas id="chart"></canvas>';
    var canvas = document.getElementById('chart').getContext('2d');
    var chart = new Chart(canvas, {
        type: "polarArea",
        data: datos,
        options: {
            responsive: true,
            maintainAspectRatio: false,

            title: {
                display: true,
                text: "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 15
            },

            legend: {
                display: false
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="0-legend">');
                var ds = chart.data.datasets[0];
                text.push('<h4 style="font-family: Lato; text-align: center; margin-bottom: 15px; color: #335574">Normas Técnicas de Acesibilidad Física</h4>');
                for (var i = 0; i < ds.data.length; i++) {
                    text.push('<li>');
                    text.push('<span style="font-family: Lato; background-color:' + ds.borderColor[i] + ';">' + '</span>' + chart.data.labels[i]);
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join("");
            },
        }
    });
    var myLegendContainer = document.getElementById("legend2");
    // generate HTML legend
    myLegendContainer.innerHTML = chart.generateLegend();
}

function archivoJS22(tot_ins_nor) {
    var codNor = tot_ins_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var nombreNorma = tot_ins_nor.map(
        function (norma) {
            return norma.nom_nor;
        }
    );
    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_22;
        }
    );

    var datos = {

        labels: nombreNorma,

        datasets: [{
            backgroundColor: colorsO,
            borderColor: bordes,
            data: valoresInstituciones
        }
        ]
    };


    document.getElementById("chartContainer").innerHTML = '<canvas id="chart"></canvas>';
    var canvas = document.getElementById('chart').getContext('2d');
    var chart = new Chart(canvas, {
        type: "polarArea",
        data: datos,
        options: {
            responsive: true,
            maintainAspectRatio: false,

            title: {
                display: true,
                text: "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 15
            },

            legend: {
                display: false
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="0-legend">');
                var ds = chart.data.datasets[0];
                text.push('<h4 style="font-family: Lato; text-align: center; margin-bottom: 15px; color: #335574">Normas Técnicas de Acesibilidad Física</h4>');
                for (var i = 0; i < ds.data.length; i++) {
                    text.push('<li>');
                    text.push('<span style="font-family: Lato; background-color:' + ds.borderColor[i] + ';">' + '</span>' + chart.data.labels[i]);
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join("");
            },
        }
    });
    var myLegendContainer = document.getElementById("legend2");
    // generate HTML legend
    myLegendContainer.innerHTML = chart.generateLegend();
}

function archivoJS23(tot_ins_nor) {
    var codNor = tot_ins_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var nombreNorma = tot_ins_nor.map(
        function (norma) {
            return norma.nom_nor;
        }
    );
    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_23;
        }
    );

    var datos = {

        labels: nombreNorma,

        datasets: [{
            backgroundColor: colorsO,
            borderColor: bordes,
            data: valoresInstituciones
        }
        ]
    };


    document.getElementById("chartContainer").innerHTML = '<canvas id="chart"></canvas>';
    var canvas = document.getElementById('chart').getContext('2d');
    var chart = new Chart(canvas, {
        type: "polarArea",
        data: datos,
        options: {
            responsive: true,
            maintainAspectRatio: false,

            title: {
                display: true,
                text: "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 15
            },

            legend: {
                display: false
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="0-legend">');
                var ds = chart.data.datasets[0];
                text.push('<h4 style="font-family: Lato; text-align: center; margin-bottom: 15px; color: #335574">Normas Técnicas de Acesibilidad Física</h4>');
                for (var i = 0; i < ds.data.length; i++) {
                    text.push('<li>');
                    text.push('<span style="font-family: Lato; background-color:' + ds.borderColor[i] + ';">' + '</span>' + chart.data.labels[i]);
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join("");
            },
        }
    });
    var myLegendContainer = document.getElementById("legend2");
    // generate HTML legend
    myLegendContainer.innerHTML = chart.generateLegend();
}

function archivoJS24(tot_ins_nor) {
    var codNor = tot_ins_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var nombreNorma = tot_ins_nor.map(
        function (norma) {
            return norma.nom_nor;
        }
    );
    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_24;
        }
    );

    var datos = {

        labels: nombreNorma,

        datasets: [{
            backgroundColor: colorsO,
            borderColor: bordes,
            data: valoresInstituciones
        }
        ]
    };


    document.getElementById("chartContainer").innerHTML = '<canvas id="chart"></canvas>';
    var canvas = document.getElementById('chart').getContext('2d');
    var chart = new Chart(canvas, {
        type: "polarArea",
        data: datos,
        options: {
            responsive: true,
            maintainAspectRatio: false,

            title: {
                display: true,
                text: "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 15
            },

            legend: {
                display: false
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="0-legend">');
                var ds = chart.data.datasets[0];
                text.push('<h4 style="font-family: Lato; text-align: center; margin-bottom: 15px; color: #335574">Normas Técnicas de Acesibilidad Física</h4>');
                for (var i = 0; i < ds.data.length; i++) {
                    text.push('<li>');
                    text.push('<span style="font-family: Lato; background-color:' + ds.borderColor[i] + ';">' + '</span>' + chart.data.labels[i]);
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join("");
            },
        }
    });
    var myLegendContainer = document.getElementById("legend2");
    // generate HTML legend
    myLegendContainer.innerHTML = chart.generateLegend();
}

function archivoJS25(tot_ins_nor) {
    var codNor = tot_ins_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var nombreNorma = tot_ins_nor.map(
        function (norma) {
            return norma.nom_nor;
        }
    );
    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_25;
        }
    );

    var datos = {

        labels: nombreNorma,

        datasets: [{
            backgroundColor: colorsO,
            borderColor: bordes,
            data: valoresInstituciones
        }
        ]
    };


    document.getElementById("chartContainer").innerHTML = '<canvas id="chart"></canvas>';
    var canvas = document.getElementById('chart').getContext('2d');
    var chart = new Chart(canvas, {
        type: "polarArea",
        data: datos,
        options: {
            responsive: true,
            maintainAspectRatio: false,

            title: {
                display: true,
                text: "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 15
            },

            legend: {
                display: false
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="0-legend">');
                var ds = chart.data.datasets[0];
                text.push('<h4 style="font-family: Lato; text-align: center; margin-bottom: 15px; color: #335574">Normas Técnicas de Acesibilidad Física</h4>');
                for (var i = 0; i < ds.data.length; i++) {
                    text.push('<li>');
                    text.push('<span style="font-family: Lato; background-color:' + ds.borderColor[i] + ';">' + '</span>' + chart.data.labels[i]);
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join("");
            },
        }
    });
    var myLegendContainer = document.getElementById("legend2");
    // generate HTML legend
    myLegendContainer.innerHTML = chart.generateLegend();
}

function archivoJS26(tot_ins_nor) {
    var codNor = tot_ins_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var nombreNorma = tot_ins_nor.map(
        function (norma) {
            return norma.nom_nor;
        }
    );
    var valoresInstituciones = tot_ins_nor.map(
        function (institucion) {
            return institucion.ins_26;
        }
    );

    var datos = {

        labels: nombreNorma,

        datasets: [{
            backgroundColor: colorsO,
            borderColor: bordes,
            data: valoresInstituciones
        }
        ]
    };


    document.getElementById("chartContainer").innerHTML = '<canvas id="chart"></canvas>';
    var canvas = document.getElementById('chart').getContext('2d');
    var chart = new Chart(canvas, {
        type: "polarArea",
        data: datos,
        options: {
            responsive: true,
            maintainAspectRatio: false,

            title: {
                display: true,
                text: "Puntaje total obtenido por Norma",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 15
            },

            legend: {
                display: false
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="0-legend">');
                var ds = chart.data.datasets[0];
                text.push('<h4 style="font-family: Lato; text-align: center; margin-bottom: 15px; color: #335574">Normas Técnicas de Acesibilidad Física</h4>');
                for (var i = 0; i < ds.data.length; i++) {
                    text.push('<li>');
                    text.push('<span style="font-family: Lato; background-color:' + ds.borderColor[i] + ';">' + '</span>' + chart.data.labels[i]);
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join("");
            },
        }
    });
    var myLegendContainer = document.getElementById("legend2");
    // generate HTML legend
    myLegendContainer.innerHTML = chart.generateLegend();
}

function porcentajeNorma(porcentaje_dis_nor) {
    var codNor = porcentaje_dis_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var valoresInstituciones = porcentaje_dis_nor.map(
        function (institucion) {
            return institucion.ins_1;
        }
    );
    document.getElementById("chartContainer2").innerHTML = '<canvas id="chart9"></canvas>';
    var ctx = document.getElementById("chart9").getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: codNor,
            datasets: [{
                label: "Porcentaje",
                backgroundColor: colors,
                borderColor: bordes,
                borderWidth: 1.5,
                hoverBackgroundColor: bordes,
                data: valoresInstituciones

            }]
        },
        options: {
            title: {
                display: true,
                text: 'Porcentaje General de Discapacidad por Norma',
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },

            responsive: true,
            maintainAspectRatio: false,

            scales:
                {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        stacked: false,
                        mirror: true,
                    }]
                },
            legend: {
                display: false

            },
        }
    });
}

function porcentajeNorma1(porcentaje_dis_nor) {
    var codNor = porcentaje_dis_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var valoresInstituciones = porcentaje_dis_nor.map(
        function (institucion) {
            return institucion.ins_2;
        }
    );
    document.getElementById("chartContainer2").innerHTML = '<canvas id="chart9"></canvas>';
    var ctx = document.getElementById("chart9").getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: codNor,
            datasets: [{
                label: "Porcentaje",
                backgroundColor: colors,
                borderColor: bordes,
                borderWidth: 1.5,
                hoverBackgroundColor: bordes,
                data: valoresInstituciones

            }]
        },
        options: {
            title: {
                display: true,
                text: 'Porcentaje General de Discapacidad por Norma',
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },

            responsive: true,
            maintainAspectRatio: false,

            scales:
                {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        stacked: false,
                        mirror: true,
                    }]
                },
            legend: {
                display: false

            },
        }
    });
}

function porcentajeNorma2(porcentaje_dis_nor) {
    var codNor = porcentaje_dis_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var valoresInstituciones = porcentaje_dis_nor.map(
        function (institucion) {
            return institucion.ins_3;
        }
    );
    document.getElementById("chartContainer2").innerHTML = '<canvas id="chart9"></canvas>';
    var ctx = document.getElementById("chart9").getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: codNor,
            datasets: [{
                label: "Porcentaje",
                backgroundColor: colors,
                borderColor: bordes,
                borderWidth: 1.5,
                hoverBackgroundColor: bordes,
                data: valoresInstituciones

            }]
        },
        options: {
            title: {
                display: true,
                text: 'Porcentaje General de Discapacidad por Norma',
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },

            responsive: true,
            maintainAspectRatio: false,

            scales:
                {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        stacked: false,
                        mirror: true,
                    }]
                },
            legend: {
                display: false

            },
        }
    });
}

function porcentajeNorma3(porcentaje_dis_nor) {
    var codNor = porcentaje_dis_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var valoresInstituciones = porcentaje_dis_nor.map(
        function (institucion) {
            return institucion.ins_4;
        }
    );
    document.getElementById("chartContainer2").innerHTML = '<canvas id="chart9"></canvas>';
    var ctx = document.getElementById("chart9").getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: codNor,
            datasets: [{
                label: "Porcentaje",
                backgroundColor: colors,
                borderColor: bordes,
                borderWidth: 1.5,
                hoverBackgroundColor: bordes,
                data: valoresInstituciones

            }]
        },
        options: {
            title: {
                display: true,
                text: 'Porcentaje General de Discapacidad por Norma',
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },

            responsive: true,
            maintainAspectRatio: false,

            scales:
                {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        stacked: false,
                        mirror: true,
                    }]
                },
            legend: {
                display: false

            },
        }
    });
}

function porcentajeNorma4(porcentaje_dis_nor) {
    var codNor = porcentaje_dis_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var valoresInstituciones = porcentaje_dis_nor.map(
        function (institucion) {
            return institucion.ins_5;
        }
    );
    document.getElementById("chartContainer2").innerHTML = '<canvas id="chart9"></canvas>';
    var ctx = document.getElementById("chart9").getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: codNor,
            datasets: [{
                label: "Porcentaje",
                backgroundColor: colors,
                borderColor: bordes,
                borderWidth: 1.5,
                hoverBackgroundColor: bordes,
                data: valoresInstituciones

            }]
        },
        options: {
            title: {
                display: true,
                text: 'Porcentaje General de Discapacidad por Norma',
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },

            responsive: true,
            maintainAspectRatio: false,

            scales:
                {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        stacked: false,
                        mirror: true,
                    }]
                },
            legend: {
                display: false

            },
        }
    });
}

function porcentajeNorma5(porcentaje_dis_nor) {
    var codNor = porcentaje_dis_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var valoresInstituciones = porcentaje_dis_nor.map(
        function (institucion) {
            return institucion.ins_6;
        }
    );
    document.getElementById("chartContainer2").innerHTML = '<canvas id="chart9"></canvas>';
    var ctx = document.getElementById("chart9").getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: codNor,
            datasets: [{
                label: "Porcentaje",
                backgroundColor: colors,
                borderColor: bordes,
                borderWidth: 1.5,
                hoverBackgroundColor: bordes,
                data: valoresInstituciones

            }]
        },
        options: {
            title: {
                display: true,
                text: 'Porcentaje General de Discapacidad por Norma',
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },

            responsive: true,
            maintainAspectRatio: false,

            scales:
                {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        stacked: false,
                        mirror: true,
                    }]
                },
            legend: {
                display: false

            },
        }
    });
}

function porcentajeNorma6(porcentaje_dis_nor) {
    var codNor = porcentaje_dis_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var valoresInstituciones = porcentaje_dis_nor.map(
        function (institucion) {
            return institucion.ins_7;
        }
    );
    document.getElementById("chartContainer2").innerHTML = '<canvas id="chart9"></canvas>';
    var ctx = document.getElementById("chart9").getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: codNor,
            datasets: [{
                label: "Porcentaje",
                backgroundColor: colors,
                borderColor: bordes,
                borderWidth: 1.5,
                hoverBackgroundColor: bordes,
                data: valoresInstituciones

            }]
        },
        options: {
            title: {
                display: true,
                text: 'Porcentaje General de Discapacidad por Norma',
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },

            responsive: true,
            maintainAspectRatio: false,

            scales:
                {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        stacked: false,
                        mirror: true,
                    }]
                },
            legend: {
                display: false

            },
        }
    });
}

function porcentajeNorma7(porcentaje_dis_nor) {
    var codNor = porcentaje_dis_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var valoresInstituciones = porcentaje_dis_nor.map(
        function (institucion) {
            return institucion.ins_8;
        }
    );
    document.getElementById("chartContainer2").innerHTML = '<canvas id="chart9"></canvas>';
    var ctx = document.getElementById("chart9").getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: codNor,
            datasets: [{
                label: "Porcentaje",
                backgroundColor: colors,
                borderColor: bordes,
                borderWidth: 1.5,
                hoverBackgroundColor: bordes,
                data: valoresInstituciones

            }]
        },
        options: {
            title: {
                display: true,
                text: 'Porcentaje General de Discapacidad por Norma',
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },

            responsive: true,
            maintainAspectRatio: false,

            scales:
                {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        stacked: false,
                        mirror: true,
                    }]
                },
            legend: {
                display: false

            },
        }
    });
}

function porcentajeNorma8(porcentaje_dis_nor) {
    var codNor = porcentaje_dis_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var valoresInstituciones = porcentaje_dis_nor.map(
        function (institucion) {
            return institucion.ins_9;
        }
    );
    document.getElementById("chartContainer2").innerHTML = '<canvas id="chart9"></canvas>';
    var ctx = document.getElementById("chart9").getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: codNor,
            datasets: [{
                label: "Porcentaje",
                backgroundColor: colors,
                borderColor: bordes,
                borderWidth: 1.5,
                hoverBackgroundColor: bordes,
                data: valoresInstituciones

            }]
        },
        options: {
            title: {
                display: true,
                text: 'Porcentaje General de Discapacidad por Norma',
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },

            responsive: true,
            maintainAspectRatio: false,

            scales:
                {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        stacked: false,
                        mirror: true,
                    }]
                },
            legend: {
                display: false

            },
        }
    });
}

function porcentajeNorma9(porcentaje_dis_nor) {
    var codNor = porcentaje_dis_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var valoresInstituciones = porcentaje_dis_nor.map(
        function (institucion) {
            return institucion.ins_10;
        }
    );
    document.getElementById("chartContainer2").innerHTML = '<canvas id="chart9"></canvas>';
    var ctx = document.getElementById("chart9").getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: codNor,
            datasets: [{
                label: "Porcentaje",
                backgroundColor: colors,
                borderColor: bordes,
                borderWidth: 1.5,
                hoverBackgroundColor: bordes,
                data: valoresInstituciones

            }]
        },
        options: {
            title: {
                display: true,
                text: 'Porcentaje General de Discapacidad por Norma',
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },

            responsive: true,
            maintainAspectRatio: false,

            scales:
                {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        stacked: false,
                        mirror: true,
                    }]
                },
            legend: {
                display: false

            },
        }
    });
}

function porcentajeNorma10(porcentaje_dis_nor) {
    var codNor = porcentaje_dis_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var valoresInstituciones = porcentaje_dis_nor.map(
        function (institucion) {
            return institucion.ins_11;
        }
    );
    document.getElementById("chartContainer2").innerHTML = '<canvas id="chart9"></canvas>';
    var ctx = document.getElementById("chart9").getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: codNor,
            datasets: [{
                label: "Porcentaje",
                backgroundColor: colors,
                borderColor: bordes,
                borderWidth: 1.5,
                hoverBackgroundColor: bordes,
                data: valoresInstituciones

            }]
        },
        options: {
            title: {
                display: true,
                text: 'Porcentaje General de Discapacidad por Norma',
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },

            responsive: true,
            maintainAspectRatio: false,

            scales:
                {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        stacked: false,
                        mirror: true,
                    }]
                },
            legend: {
                display: false

            },
        }
    });
}

function porcentajeNorma11(porcentaje_dis_nor) {
    var codNor = porcentaje_dis_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var valoresInstituciones = porcentaje_dis_nor.map(
        function (institucion) {
            return institucion.ins_12;
        }
    );
    document.getElementById("chartContainer2").innerHTML = '<canvas id="chart9"></canvas>';
    var ctx = document.getElementById("chart9").getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: codNor,
            datasets: [{
                label: "Porcentaje",
                backgroundColor: colors,
                borderColor: bordes,
                borderWidth: 1.5,
                hoverBackgroundColor: bordes,
                data: valoresInstituciones

            }]
        },
        options: {
            title: {
                display: true,
                text: 'Porcentaje General de Discapacidad por Norma',
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },

            responsive: true,
            maintainAspectRatio: false,

            scales:
                {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        stacked: false,
                        mirror: true,
                    }]
                },
            legend: {
                display: false

            },
        }
    });
}

function porcentajeNorma12(porcentaje_dis_nor) {
    var codNor = porcentaje_dis_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var valoresInstituciones = porcentaje_dis_nor.map(
        function (institucion) {
            return institucion.ins_14;
        }
    );
    document.getElementById("chartContainer2").innerHTML = '<canvas id="chart9"></canvas>';
    var ctx = document.getElementById("chart9").getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: codNor,
            datasets: [{
                label: "Porcentaje",
                backgroundColor: colors,
                borderColor: bordes,
                borderWidth: 1.5,
                hoverBackgroundColor: bordes,
                data: valoresInstituciones

            }]
        },
        options: {
            title: {
                display: true,
                text: 'Porcentaje General de Discapacidad por Norma',
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },

            responsive: true,
            maintainAspectRatio: false,

            scales:
                {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        stacked: false,
                        mirror: true,
                    }]
                },
            legend: {
                display: false

            },
        }
    });
}

function porcentajeNorma13(porcentaje_dis_nor) {
    var codNor = porcentaje_dis_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var valoresInstituciones = porcentaje_dis_nor.map(
        function (institucion) {
            return institucion.ins_15;
        }
    );
    document.getElementById("chartContainer2").innerHTML = '<canvas id="chart9"></canvas>';
    var ctx = document.getElementById("chart9").getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: codNor,
            datasets: [{
                label: "Porcentaje",
                backgroundColor: colors,
                borderColor: bordes,
                borderWidth: 1.5,
                hoverBackgroundColor: bordes,
                data: valoresInstituciones

            }]
        },
        options: {
            title: {
                display: true,
                text: 'Porcentaje General de Discapacidad por Norma',
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },

            responsive: true,
            maintainAspectRatio: false,

            scales:
                {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        stacked: false,
                        mirror: true,
                    }]
                },
            legend: {
                display: false

            },
        }
    });
}

function porcentajeNorma14(porcentaje_dis_nor) {
    var codNor = porcentaje_dis_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var valoresInstituciones = porcentaje_dis_nor.map(
        function (institucion) {
            return institucion.ins_16;
        }
    );
    document.getElementById("chartContainer2").innerHTML = '<canvas id="chart9"></canvas>';
    var ctx = document.getElementById("chart9").getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: codNor,
            datasets: [{
                label: "Porcentaje",
                backgroundColor: colors,
                borderColor: bordes,
                borderWidth: 1.5,
                hoverBackgroundColor: bordes,
                data: valoresInstituciones

            }]
        },
        options: {
            title: {
                display: true,
                text: 'Porcentaje General de Discapacidad por Norma',
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },

            responsive: true,
            maintainAspectRatio: false,

            scales:
                {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        stacked: false,
                        mirror: true,
                    }]
                },
            legend: {
                display: false

            },
        }
    });
}

function porcentajeNorma15(porcentaje_dis_nor) {
    var codNor = porcentaje_dis_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var valoresInstituciones = porcentaje_dis_nor.map(
        function (institucion) {
            return institucion.ins_17;
        }
    );
    document.getElementById("chartContainer2").innerHTML = '<canvas id="chart9"></canvas>';
    var ctx = document.getElementById("chart9").getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: codNor,
            datasets: [{
                label: "Porcentaje",
                backgroundColor: colors,
                borderColor: bordes,
                borderWidth: 1.5,
                hoverBackgroundColor: bordes,
                data: valoresInstituciones

            }]
        },
        options: {
            title: {
                display: true,
                text: 'Porcentaje General de Discapacidad por Norma',
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },

            responsive: true,
            maintainAspectRatio: false,

            scales:
                {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        stacked: false,
                        mirror: true,
                    }]
                },
            legend: {
                display: false

            },
        }
    });
}

function porcentajeNorma16(porcentaje_dis_nor) {
    var codNor = porcentaje_dis_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var valoresInstituciones = porcentaje_dis_nor.map(
        function (institucion) {
            return institucion.ins_18;
        }
    );
    document.getElementById("chartContainer2").innerHTML = '<canvas id="chart9"></canvas>';
    var ctx = document.getElementById("chart9").getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: codNor,
            datasets: [{
                label: "Porcentaje",
                backgroundColor: colors,
                borderColor: bordes,
                borderWidth: 1.5,
                hoverBackgroundColor: bordes,
                data: valoresInstituciones

            }]
        },
        options: {
            title: {
                display: true,
                text: 'Porcentaje General de Discapacidad por Norma',
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },

            responsive: true,
            maintainAspectRatio: false,

            scales:
                {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        stacked: false,
                        mirror: true,
                    }]
                },
            legend: {
                display: false

            },
        }
    });
}

function porcentajeNorma17(porcentaje_dis_nor) {
    var codNor = porcentaje_dis_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var valoresInstituciones = porcentaje_dis_nor.map(
        function (institucion) {
            return institucion.ins_18;
        }
    );
    document.getElementById("chartContainer2").innerHTML = '<canvas id="chart9"></canvas>';
    var ctx = document.getElementById("chart9").getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: codNor,
            datasets: [{
                label: "Porcentaje",
                backgroundColor: colors,
                borderColor: bordes,
                borderWidth: 1.5,
                hoverBackgroundColor: bordes,
                data: valoresInstituciones

            }]
        },
        options: {
            title: {
                display: true,
                text: 'Porcentaje General de Discapacidad por Norma',
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },

            responsive: true,
            maintainAspectRatio: false,

            scales:
                {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        stacked: false,
                        mirror: true,
                    }]
                },
            legend: {
                display: false

            },
        }
    });
}

function porcentajeNorma18(porcentaje_dis_nor) {
    var codNor = porcentaje_dis_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var valoresInstituciones = porcentaje_dis_nor.map(
        function (institucion) {
            return institucion.ins_19;
        }
    );
    document.getElementById("chartContainer2").innerHTML = '<canvas id="chart9"></canvas>';
    var ctx = document.getElementById("chart9").getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: codNor,
            datasets: [{
                label: "Porcentaje",
                backgroundColor: colors,
                borderColor: bordes,
                borderWidth: 1.5,
                hoverBackgroundColor: bordes,
                data: valoresInstituciones

            }]
        },
        options: {
            title: {
                display: true,
                text: 'Porcentaje General de Discapacidad por Norma',
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },

            responsive: true,
            maintainAspectRatio: false,

            scales:
                {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        stacked: false,
                        mirror: true,
                    }]
                },
            legend: {
                display: false

            },
        }
    });
}

function porcentajeNorma19(porcentaje_dis_nor) {
    var codNor = porcentaje_dis_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var valoresInstituciones = porcentaje_dis_nor.map(
        function (institucion) {
            return institucion.ins_20;
        }
    );
    document.getElementById("chartContainer2").innerHTML = '<canvas id="chart9"></canvas>';
    var ctx = document.getElementById("chart9").getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: codNor,
            datasets: [{
                label: "Porcentaje",
                backgroundColor: colors,
                borderColor: bordes,
                borderWidth: 1.5,
                hoverBackgroundColor: bordes,
                data: valoresInstituciones

            }]
        },
        options: {
            title: {
                display: true,
                text: 'Porcentaje de Discapacidad por Norma',
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },

            responsive: true,
            maintainAspectRatio: false,

            scales:
                {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        stacked: false,
                        mirror: true,
                    }]
                },
            legend: {
                display: false

            },
        }
    });
}

function porcentajeNorma20(porcentaje_dis_nor) {
    var codNor = porcentaje_dis_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var valoresInstituciones = porcentaje_dis_nor.map(
        function (institucion) {
            return institucion.ins_21;
        }
    );
    document.getElementById("chartContainer2").innerHTML = '<canvas id="chart9"></canvas>';
    var ctx = document.getElementById("chart9").getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: codNor,
            datasets: [{
                label: "Porcentaje",
                backgroundColor: colors,
                borderColor: bordes,
                borderWidth: 1.5,
                hoverBackgroundColor: bordes,
                data: valoresInstituciones

            }]
        },
        options: {
            title: {
                display: true,
                text: 'Porcentaje General de Discapacidad por Norma',
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },

            responsive: true,
            maintainAspectRatio: false,

            scales:
                {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        stacked: false,
                        mirror: true,
                    }]
                },
            legend: {
                display: false

            },
        }
    });
}

function porcentajeNorma21(porcentaje_dis_nor) {
    var codNor = porcentaje_dis_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var valoresInstituciones = porcentaje_dis_nor.map(
        function (institucion) {
            return institucion.ins_22;
        }
    );
    document.getElementById("chartContainer2").innerHTML = '<canvas id="chart9"></canvas>';
    var ctx = document.getElementById("chart9").getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: codNor,
            datasets: [{
                label: "Porcentaje",
                backgroundColor: colors,
                borderColor: bordes,
                borderWidth: 1.5,
                hoverBackgroundColor: bordes,
                data: valoresInstituciones

            }]
        },
        options: {
            title: {
                display: true,
                text: 'Porcentaje General de Discapacidad por Norma',
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },

            responsive: true,
            maintainAspectRatio: false,

            scales:
                {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        stacked: false,
                        mirror: true,
                    }]
                },
            legend: {
                display: false

            },
        }
    });
}

function porcentajeNorma22(porcentaje_dis_nor) {
    var codNor = porcentaje_dis_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var valoresInstituciones = porcentaje_dis_nor.map(
        function (institucion) {
            return institucion.ins_23;
        }
    );
    document.getElementById("chartContainer2").innerHTML = '<canvas id="chart9"></canvas>';
    var ctx = document.getElementById("chart9").getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: codNor,
            datasets: [{
                label: "Porcentaje",
                backgroundColor: colors,
                borderColor: bordes,
                borderWidth: 1.5,
                hoverBackgroundColor: bordes,
                data: valoresInstituciones

            }]
        },
        options: {
            title: {
                display: true,
                text: 'Porcentaje General de Discapacidad por Norma',
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },

            responsive: true,
            maintainAspectRatio: false,

            scales:
                {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        stacked: false,
                        mirror: true,
                    }]
                },
            legend: {
                display: false

            },
        }
    });
}

function porcentajeNorma23(porcentaje_dis_nor) {
    var codNor = porcentaje_dis_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var valoresInstituciones = porcentaje_dis_nor.map(
        function (institucion) {
            return institucion.ins_24;
        }
    );
    document.getElementById("chartContainer2").innerHTML = '<canvas id="chart9"></canvas>';
    var ctx = document.getElementById("chart9").getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: codNor,
            datasets: [{
                label: "Porcentaje",
                backgroundColor: colors,
                borderColor: bordes,
                borderWidth: 1.5,
                hoverBackgroundColor: bordes,
                data: valoresInstituciones

            }]
        },
        options: {
            title: {
                display: true,
                text: 'Porcentaje General de Discapacidad por Norma',
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },

            responsive: true,
            maintainAspectRatio: false,

            scales:
                {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        stacked: false,
                        mirror: true,
                    }]
                },
            legend: {
                display: false

            },
        }
    });
}

function porcentajeNorma24(porcentaje_dis_nor) {
    var codNor = porcentaje_dis_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var valoresInstituciones = porcentaje_dis_nor.map(
        function (institucion) {
            return institucion.ins_25;
        }
    );
    document.getElementById("chartContainer2").innerHTML = '<canvas id="chart9"></canvas>';
    var ctx = document.getElementById("chart9").getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: codNor,
            datasets: [{
                label: "Porcentaje",
                backgroundColor: colors,
                borderColor: bordes,
                borderWidth: 1.5,
                hoverBackgroundColor: bordes,
                data: valoresInstituciones

            }]
        },
        options: {
            title: {
                display: true,
                text: 'Porcentaje General de Discapacidad por Norma',
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },

            responsive: true,
            maintainAspectRatio: false,

            scales:
                {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        stacked: false,
                        mirror: true,
                    }]
                },
            legend: {
                display: false

            },
        }
    });
}

function porcentajeNorma25(porcentaje_dis_nor) {
    var codNor = porcentaje_dis_nor.map(
        function (norma) {
            return norma.cod_nor;
        }
    );
    var valoresInstituciones = porcentaje_dis_nor.map(
        function (institucion) {
            return institucion.ins_26;
        }
    );
    document.getElementById("chartContainer2").innerHTML = '<canvas id="chart9"></canvas>';
    var ctx = document.getElementById("chart9").getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: codNor,
            datasets: [{
                label: "Porcentaje",
                backgroundColor: colors,
                borderColor: bordes,
                borderWidth: 1.5,
                hoverBackgroundColor: bordes,
                data: valoresInstituciones

            }]
        },
        options: {
            title: {
                display: true,
                text: 'Porcentaje General de Discapacidad por Norma',
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10
            },

            responsive: true,
            maintainAspectRatio: false,

            scales:
                {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        stacked: false,
                        mirror: true,
                    }]
                },
            legend: {
                display: false

            },
        }
    });
}
