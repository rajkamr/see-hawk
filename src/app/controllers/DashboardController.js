(function () {
    angular
        .module('app')
        .controller('DashboardController', [
            DashboardController
        ]);

    function DashboardController() {
        var vm = this;
        var groupIconList = ["chart1.png", "chart2.png"];
        vm.groupList = [
            {
                "id": 1,
                "name": "Group 1",
                "last_exec_time": "17/01/2017 09:00 AM",
                "image": groupIconList[Math.floor(Math.random() * groupIconList.length)],
                "allClear": true
            },
            {
                "id": 2,
                "name": "Group 2",
                "last_exec_time": "17/01/2017 10:00 AM",
                "image": groupIconList[Math.floor(Math.random() * groupIconList.length)],
                "allClear": false
            },
            {
                "id": 3,
                "name": "Group 3",
                "last_exec_time": "17/01/2017 10:30 AM",
                "image": groupIconList[Math.floor(Math.random() * groupIconList.length)],
                "allClear": true
            }
        ];

        vm.ran
    }
})();
