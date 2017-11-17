(function () {
    angular
        .module('app')
        .controller('MonitorController', [
            MonitorController
        ]);

    function MonitorController() {
        var vm = this;

        // TODO: move data to the service
        vm.monitorChartData = [ 
        {
          key: "Cumulative Return",
          values: [
            { 
              "label" : "A Label" ,
              "value" : 29.765957771107,
              "color": "#00FF00"
            } , 
            { 
              "label" : "B Label" , 
              "value" : 0,
              "color": "#FF0000"
            } , 
            { 
              "label" : "C Label" , 
              "value" : 32.807804682612,
              "color": "#00FF00"
            } , 
            { 
              "label" : "D Label", 
              "value" : 196.45946739256,
              "color": "#00FF00"
            } , 
            { 
              "label" : "E Label" ,
              "value" : 0.19434030906893,
              "color": "#FF0000"
            } , 
            { 
              "label" : "F Label" , 
              "value" : 98.079782601442,
              "color": "#00FF00"
            } , 
            { 
              "label" : "G Label" , 
              "value" : 13.925743130903,
              "color": "#00FF00"
            } , 
            { 
              "label" : "H Label" , 
              "value" : 5.1387322875705,
              "color": "#00FF00"
            }
          ]
        }
      ];

        vm.chartOptions = {
            chart: {
                type: 'discreteBar',
                height: 400,
                margin: { top: 50, bottom: 50, left: 0, right: 0 },
                x: function (d) { return d.label },
                y: function (d) { return d.value },
                showLabels: true,
                showValues: true,
                staggerLabels: false,
                title: 'Over 9K',
                showYAxis: true,
                showXAxis: true//,
                //colour: function(){return '#ff0000';}
                //tooltip: { contentGenerator: function (d) { return '<span class="custom-tooltip">' + d.value + '</span>' } }
            }
        };
    }
})();
