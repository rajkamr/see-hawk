(function () {
    angular
        .module('app')
        .controller('DashboardController', [
            DashboardController
        ]);

    function DashboardController() {
        var vm = this;
        var groupIconList = ["receipt", "view_stream", "group_work", "view_array", "bug_report"];
        vm.groupList = [
            {
                "id": 1,
                "name": "Group 1",
                "last_exec_time": "17/01/2017 09:00 AM",
                "icon": groupIconList[Math.floor(Math.random() * groupIconList.length)],
                "allClear": true
            },
            {
                "id": 2,
                "name": "Group 2",
                "last_exec_time": "17/01/2017 10:00 AM",
                "icon": groupIconList[Math.floor(Math.random() * groupIconList.length)],
                "allClear": false
            },
            {
                "id": 3,
                "name": "Group 3",
                "last_exec_time": "17/01/2017 10:30 AM",
                "icon": groupIconList[Math.floor(Math.random() * groupIconList.length)],
                "allClear": true
            }
        ];

        vm.ran
    }
})();
