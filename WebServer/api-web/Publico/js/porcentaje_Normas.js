function porcentaje_Normas(tot_nor_ins) {

    var nombreInstituciones = tot_nor_ins.map(
        function (NombreInstitucion) {
            return NombreInstitucion.nom_ins;
        }
    );

    var porcentajeNormaA = tot_nor_ins.map(
        function (porcentajeNormas) {
            return porcentajeNormas.dis_por_a;
        }
    );
    var porcentajeNormaB = tot_nor_ins.map(
        function (porcentajeNormas) {
            return porcentajeNormas.dis_por_b;
        }
    );
    var porcentajeNormaC = tot_nor_ins.map(
        function (porcentajeNormas) {
            return porcentajeNormas.dis_por_c;
        }
    );
    var porcentajeNormaD = tot_nor_ins.map(
        function (porcentajeNormas) {
            return porcentajeNormas.dis_por_d;
        }
    );
    var porcentajeNormaE = tot_nor_ins.map(
        function (porcentajeNormas) {
            return porcentajeNormas.dis_por_e;
        }
    );
    var porcentajeNormaF = tot_nor_ins.map(
        function (porcentajeNormas) {
            return porcentajeNormas.dis_por_f;
        }
    );
    var porcentajeNormaG = tot_nor_ins.map(
        function (porcentajeNormas) {
            return porcentajeNormas.dis_por_g;
        }
    );
    var porcentajeNormaH = tot_nor_ins.map(
        function (porcentajeNormas) {
            return porcentajeNormas.dis_por_h;
        }
    );
    var porcentajeNormaI = tot_nor_ins.map(
        function (porcentajeNormas) {
            return porcentajeNormas.dis_por_i;
        }
    );
    var porcentajeNormaJ= tot_nor_ins.map(
        function (porcentajeNormas) {
            return porcentajeNormas.dis_por_j;
        }
    );
    var porcentajeNormaK = tot_nor_ins.map(
        function (porcentajeNormas) {
            return porcentajeNormas.dis_por_k;
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

    var ctx = document.getElementById("chart9").getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: nombreInstituciones,
            datasets: [{
                label: "Porcentaje A",
                backgroundColor: newColors,
                borderColor: newBorders,
                borderWidth: 1.5,
                hoverBackgroundColor: newHover,
                data: porcentajeNormaA

            },{
                label: "Porcentaje B",
                backgroundColor: newColors,
                borderColor: newBorders,
                borderWidth: 1.5,
                hoverBackgroundColor: newHover,
                data: porcentajeNormaB

            },{
                label: "Porcentaje C",
                backgroundColor: newColors,
                borderColor: newBorders,
                borderWidth: 1.5,
                hoverBackgroundColor: newHover,
                data:porcentajeNormaC

            },{
                label: "Porcentaje D",
                backgroundColor: newColors,
                borderColor: newBorders,
                borderWidth: 1.5,
                hoverBackgroundColor: newHover,
                data: porcentajeNormaD

            },{
                label: "Porcentaje E",
                backgroundColor: newColors,
                borderColor: newBorders,
                borderWidth: 1.5,
                hoverBackgroundColor: newHover,
                data: porcentajeNormaE

            },{
                label: "Porcentaje F",
                backgroundColor: newColors,
                borderColor: newBorders,
                borderWidth: 1.5,
                hoverBackgroundColor: newHover,
                data:porcentajeNormaF

            },{
                label: "Porcentaje G",
                backgroundColor: newColors,
                borderColor: newBorders,
                borderWidth: 1.5,
                hoverBackgroundColor: newHover,
                data: porcentajeNormaG

            },{
                label: "Porcentaje H",
                backgroundColor: newColors,
                borderColor: newBorders,
                borderWidth: 1.5,
                hoverBackgroundColor: newHover,
                data: porcentajeNormaH

            },{
                label: "Porcentaje I",
                backgroundColor: newColors,
                borderColor: newBorders,
                borderWidth: 1.5,
                hoverBackgroundColor: newHover,
                data: porcentajeNormaI

            },{
                label: "Porcentaje J",
                backgroundColor: newColors,
                borderColor: newBorders,
                borderWidth: 1.5,
                hoverBackgroundColor: newHover,
                data: porcentajeNormaJ

            },{
                label: "Porcentaje K",
                backgroundColor: newColors,
                borderColor: newBorders,
                borderWidth: 1.5,
                hoverBackgroundColor: newHover,
                data: porcentajeNormaK

            }]
        },
        options: {
            title: {
                display: true,
                text: 'Porcentaje Obtenido por Norma',
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
                        stacked: false,
                        mirror: true,
                    }]
                },
            legend: {
                display: false

            }
        }
    });
}
