(function(){
    'use strict';
  
    angular.module('app')
          .service('backEndService', [
          '$q',
          '$firebaseObject',
          backEndService
    ]);
  
    function backEndService($q, $firebaseObject){
      var groupIconList = ["chart1.png", "chart2.png"];
      var groupList = [
        {
            "id": 1,
            "name": "VL-Unified Productivity",
            "last_exec_time": "17/01/2017 09:00 AM",
            "image": groupIconList[Math.floor(Math.random() * groupIconList.length)],
            "allClear": true
        },
        {
            "id": 2,
            "name": "VL-Unified Fleet",
            "last_exec_time": "17/01/2017 10:00 AM",
            "image": groupIconList[Math.floor(Math.random() * groupIconList.length)],
            "allClear": false
        }
    ];
      function getGroups() {
        console.log("groups");
        var ref = firebase.database().ref("groups");
        // download the data into a local object
        var dbData = $firebaseObject(ref);
        dbData.$loaded().then(function() {
            console.log(dbData)
        });
      }
  
      return {
        getGroups: getGroups,
        groupList: groupList,
        groupIconList: groupIconList
      };
    }
  })();
  