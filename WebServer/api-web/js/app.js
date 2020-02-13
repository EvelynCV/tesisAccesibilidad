$(document).ready(function(){
    $.ajax({
        url: "http://localhost:3000/api/bargraph.ejs",


        method: "GET",
        success: function(data) {
            console.log(data);
            var cod_norm = [];
            var nom_norm = [];

            for(var i in data) {
                cod_norm .push("Player " + data[i].cod_norm);
                nom_norm.push(data[i].nom_morma);
            }

            var chartdata = {
                labels: cod_norm,
                datasets : [
                    {
                        label: 'Codigo Norma',
                        backgroundColor: 'rgba(200, 200, 200, 0.75)',
                        borderColor: 'rgba(200, 200, 200, 0.75)',
                        hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                        hoverBorderColor: 'rgba(200, 200, 200, 1)',
                        data: nom_norm
                    }
                ]
            };

            var ctx = $("#mycanvas");

            var barGraph = new Chart(ctx, {
                type: 'bar',
                data: chartdata
            });
        },
        error: function(data) {
            console.log(data);
        }
    });
});