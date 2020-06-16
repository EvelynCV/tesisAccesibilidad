function valoracion_Instituciones(tot_val_ins) {
    var nombreInstituciones = tot_val_ins.map(
        function (NombreInstitucion) {
            return NombreInstitucion.nom_ins;
        }
    );

    var valoracionInstituciones = tot_val_ins.map(
        function (valoracionInstitucion) {
            return valoracionInstitucion.Valoración;
        }
    );
    var newColors = ['#AB526B', '#BCA297', '#C5CEAE', '#D8C473',
        '#C9C2A2', '#7FEFE4', '#A6C977', '#EDA8AB',
        '#799C60', '#C6D5FF', '#539CB5', '#C2BCF4',
        '#17A3A5', '#E579A8', '#BA69C5', '#DBE88D',
        '#FCBAD2', '#636FD6', '#948E50', '#E8C96D',
        '#525FA2', '#67447B', '#70EADA', '#C7DCA1',
        '#D8CB55', '#D67B7E'];
    var colors = [pattern.draw('plus', '#AB526B'), pattern.draw('cross', '#BCA297'), pattern.draw('dash', '#C5CEAE'), pattern.draw('cross-dash', '#D8C473'),
        pattern.draw('dot', '#C9C2A2'),pattern.draw('dot-dash', '#7FEFE4'),pattern.draw('disc', '#A6C977'),pattern.draw('ring', '#EDA8AB'),
        pattern.draw('line', '#799C60'),pattern.draw('line-vertical', '#C6D5FF'),pattern.draw('weave', '#539CB5'),pattern.draw('zigzag', '#C2BCF4'),
        pattern.draw('zigzag-vertical', '#17A3A5'),pattern.draw('diagonal', '#E579A8'),pattern.draw('diagonal-right-left', '#BA69C5'),pattern.draw('square', '#DBE88D'),
        pattern.draw('box', '#FCBAD2'),pattern.draw('triangle', '#636FD6'),pattern.draw('triangle-inverted', '#948E50'),pattern.draw('diamond', '#E8C96D'),
        pattern.draw('diamond-box', '#525FA2'),pattern.draw('plus', '#67447B'),pattern.draw('cross', '#70EADA'),pattern.draw('dash', '#C7DCA1'),
        pattern.draw('cross-dash', '#D8CB55'),pattern.draw('dot', '#D67B7E')];

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

    var newHoverColors = [pattern.draw('plus', '#792F4F'), pattern.draw('cross', '#947A7C'), pattern.draw('dash', '#A3B999'), pattern.draw('cross-dash', '#C1AB55'),
        pattern.draw('dot', '#A9A88A'),pattern.draw('dot-dash', '#34E8DD'),pattern.draw('disc', '#71B258'),pattern.draw('ring', '#E28395'),
        pattern.draw('line', '#317247'),pattern.draw('line-vertical', '#A4C3FF'),pattern.draw('weave', '#2272A2'),pattern.draw('zigzag', '#9E9FF1'),
        pattern.draw('zigzag-vertical', '#097C8D'),pattern.draw('diagonal', '#D64591'),pattern.draw('diagonal-right-left', '#913CB6'),pattern.draw('square', '#C6DE6F'),
        pattern.draw('box', '#FA9DC6'),pattern.draw('triangle', '#2840CB'),pattern.draw('triangle-inverted', '#555E3B'),pattern.draw('diamond', '#DAB250'),
        pattern.draw('diamond-box', '#2A275B'),pattern.draw('plus', '#833660'),pattern.draw('cross', '#159A80'),pattern.draw('dash', '#A6CD88'),
        pattern.draw('cross-dash', '#C1B53F'),pattern.draw('dot', '#BE465D')];

    var ctx = document.getElementById("chart6").getContext("2d");
    var myLine = new Chart(ctx, {
        type: 'line',
        data: {
            xLabels: nombreInstituciones,
            yLabels: ['Alto', 'Medio', 'Bajo', ''],
            datasets: [{
                label: "Valoración",
                data: valoracionInstituciones,
                fill: true,
                showLine: true,
                pointBackgroundColor: colors,
                pointHoverBackgroundColor: newHoverColors,
                pointRadius: 10,
                pointHoverRadius: 20,
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "Valoración de Accesibilidad al medio Físico",
                fontFamily: 'Lato',
                fontColor: '#335574',
                fontSize: 18,
                padding: 10,

            },
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    display: false,
                    scaleLabel: {
                        display: true,
                        labelString: 'Instituciones'
                    }
                }],
                yAxes: [{
                    type: 'category',
                    position: 'left',
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Valoración'
                    },
                    ticks: {
                        reverse: true,
                    },
                }]
            }
        }
    });
}