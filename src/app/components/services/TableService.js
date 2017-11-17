(function(){
  'use strict';

  angular.module('app')
        .service('tableService', [
        '$q',
      tableService
  ]);

  function tableService($q){
    var tableData = [
      {
       "apiName": "Search API",
       "last_exc_status": true,
       "last_exc_time": "11/17/2017 10:50 AM",
       "last_failure_time": "11/17/2017 09:50 AM",
       "schedule": 1,
       "notification_email": "see-hawk@trimble.com"
      },
      {
        "apiName": "Search API",
        "last_exc_status": false,
        "last_exc_time": "11/17/2017 10:50 AM",
        "last_failure_time": "11/17/2017 09:50 AM",
        "schedule": 1,
        "notification_email": "see-hawk@trimble.com"
       },
       {
         "apiName": "Search API",
         "last_exc_status": false,
         "last_exc_time": "11/17/2017 10:50 AM",
         "last_failure_time": "11/17/2017 09:50 AM",
         "schedule": 1,
         "notification_email": "see-hawk@trimble.csee-hawk@trimble.com, see-hawk@trimble.com, see-hawk@trimble.com, see-hawk@trimble.csee-hawk@trimble.com, see-hawk@trimble.com, see-hawk@trimble.com"
        }
    ];

    var API_STATUS = {
      "true": "Success",
      "false": "Failure"
    };

    function PickRandom() {
      return Object.assign({}, tableData[Math.floor(Math.random()*tableData.length)]);
    }

    return {
      API_STATUS: API_STATUS,
      loadAllItems : function() {
        return $q.when(tableData);
      },
      /**
       * Query expects that `limit`,`page`, and `order` fields be present
       */
      loadByPagination: function (query) {
        query = query || {limit:10,page:1};
         
        var list = [];
        var start = (query.page-1)*query.limit;
        var end = start + query.limit;
        for (var i = start; i < end; i++) {
          var f = PickRandom();
          f.id = i+1;
          list.push(f);
        }
        return $q.when({items:list,count:800});
      }
    };
  }
})();
