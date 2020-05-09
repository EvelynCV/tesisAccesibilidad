function puntaje_Total(tot_val_ins) {

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

    var ctx = document.getElementById("chart1").getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: nombreInstituciones,
            datasets: [{
                label: "Puntaje",
                backgroundColor: newColors,
                borderColor: newBorders,
                borderWidth: 1.5,
                hoverBackgroundColor: newHover,
                data: valoresInstituciones
            }]
        },
        options: {
            title : {
                display : true,
                text: 'Puntución Obtenida',
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
                        display: false
                    }],
                    yAxes: [{
                        stacked: true,
                        mirror: true,
                    }]
                },
            legend: {
                display: false
            },
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul class="0-legend">');
                var ds = chart.data.datasets[0];
                text.push('<h3>Instituciones</h3>');
                for (var i = 0; i < ds.data.length; i++) {
                    text.push('<li>');
                    text.push('<span style="background-color:' + ds.backgroundColor[i] + '; border-color:' + ds.borderColor[i] +'">' + '</span>' + chart.data.labels[i]);
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join("");
            },

           /* plugins: {

                afterDatasetsDraw: function (context, easing) {
                    var ctx = context.chart.ctx;
                    context.data.datasets.forEach(function (dataset) {
                        for (var i = 0; i < dataset.data.length; i++) {
                            if (dataset.data[i] != 0) {
                                var model = dataset.object.keys(dataset)[0].data[i];
                                var textY = model.y + (dataset.type == "line" ? -3 : 15);

                                ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, 'normal', Chart.defaults.global.defaultFontFamily);
                                ctx.textAlign = 'start';
                                ctx.textBaseline = 'middle';
                                ctx.fillStyle = dataset.type == "line" ? "black" : "black";
                                ctx.save();
                                ctx.translate(model.x, textY-15);
                                ctx.rotate(4.7);
                                ctx.fillText(dataset.data[i], 0, 0);
                                ctx.restore();
                            }
                        }
                    });
                },
            }*/
        }
    });

    var myLegendContainer = document.getElementById("legend");
    // generate HTML legend
    myLegendContainer.innerHTML = chart.generateLegend();
}