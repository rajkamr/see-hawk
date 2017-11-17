(function () {

  angular
    .module('app')
    .controller('ProfileController', [
      'navService', '$mdSidenav', '$mdBottomSheet', '$log', '$q', '$state', '$mdToast', 'backEndService', 'tableService',
      ProfileController
    ]);

  function ProfileController(navService, $mdSidenav, $mdBottomSheet, $log, $q, $state, $mdToast, backEndService, tableService) {
    var vm = this;
    vm.reqestTypeSelcted = reqestTypeSelcted;
    vm.minuteTypeSelcted = minuteTypeSelcted;
    vm.scheduleTypeSelcted = scheduleTypeSelcted;
    vm.saveAPIValue = saveAPIValue;

    function reqestTypeSelcted(reqestType) {
      console.log("requestType", requestType);
      vm.addApi.requestType = requestType;
    }

    function minuteTypeSelcted(minuteType) {
      console.log("minuteType", minuteType);
      vm.addApi.minuteType = minuteType;
    }

    function scheduleTypeSelcted(scheduleType) {
      console.log("scheduleType", scheduleType);
      vm.addApi.scheduleType = scheduleType;
    }

    function saveAPIValue() {
      console.log("saveAPIValue--------");

      var isGroupFound = false;
      for (var i = 0; i < backEndService.groupList.length; i++) {
        if (backEndService.groupList[i].name === vm.addApi.groupName) {
          isGroupFound = true;
        }
      }
      var groupList = [];
      groupList = backEndService.groupList;

      if (!isGroupFound) {
        var group = {
          "id": 10001,
          "name": vm.addApi.groupName,
          "last_exec_time": "17/01/2017 09:00 AM",
          "image": backEndService.groupIconList[Math.floor(Math.random() * backEndService.groupIconList.length)],
          "allClear": true
        };
        groupList.push(group);
      }

      backEndService.groupList = groupList;

      var api = {
        "apiName": vm.addApi.monitorName,
        "groupName":vm.addApi.groupName,
        "last_exc_status": true,
        "last_exc_time": "11/17/2017 10:50 AM",
        "last_failure_time": "11/17/2017 09:50 AM",
        "schedule": vm.addApi.scheduleType,
        "notification_email": vm.addApi.clientEmail
      }

      tableService.allTableData.push(api);
      $state.go('home.dashboard');
    }

    vm.addApi = {
      title: 'Admin',
      monitorName: "",
      clientEmail: 'sample@seehawk.com',
      groupName: '',
      request: ["POST", "GET"],
      requestType: "POST",
      minuteType: "Every 5 Minute",
      schedule: ["Minute"],
      scheduleType: "Minute",
      url: "https://postman-echo.com/time/unit?timestamp=2016-10-10&unit=day",
      minute: ["Every 5 Minute", "Every 10 Minute", "Every 20 Minute"],
      biography: 'We are young and ambitious full service design and technology company. ' +
        'Our focus is JavaScript development and User Interface design.',
      postalCode: '220007'
    };
  }

})();