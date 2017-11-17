(function () {
    angular
        .module('app')
        .controller('DashboardController', [
            'backEndService',
            DashboardController
        ]);

    function DashboardController(backEndService) {
        var vm = this;
        vm.groupList = backEndService.groupList;
    }
})();
