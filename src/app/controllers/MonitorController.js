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
              "value" : 29.765957771107
            } , 
            { 
              "label" : "B Label" , 
              "value" : 0
            } , 
            { 
              "label" : "C Label" , 
              "value" : 32.807804682612
            } , 
            { 
              "label" : "D Label" , 
              "value" : 196.45946739256
            } , 
            { 
              "label" : "E Label" ,
              "value" : 0.19434030906893
            } , 
            { 
              "label" : "F Label" , 
              "value" : 98.079782601442
            } , 
            { 
              "label" : "G Label" , 
              "value" : 13.925743130903
            } , 
            { 
              "label" : "H Label" , 
              "value" : 5.1387322875705
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
                //tooltip: { contentGenerator: function (d) { return '<span class="custom-tooltip">' + d.value + '</span>' } }
            }
        };
    }
})();
