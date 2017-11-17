(function(){
    'use strict';
  
    angular.module('app')
          .service('backEndService', [
          '$q',
          '$firebaseObject',
          backEndService
    ]);
  
    function backEndService($q, $firebaseObject){
  
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
        getGroups: getGroups
      };
    }
  })();
  