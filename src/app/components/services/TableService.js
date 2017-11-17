(function(){
  'use strict';

  angular.module('app')
        .service('tableService', [
        '$q',
      tableService
  ]);
  
  function tableService($q){

    var tableData = [];
    
     var allTableData = [
      {
      "groupName": "Group 1",
       "apiName": "Search API",
       "last_exc_status": true,
       "last_exc_time": "11/17/2017 10:50 AM",
       "last_failure_time": "11/17/2017 09:50 AM",
       "schedule": "Every 5 Minute",
       "notification_email": "see-hawk@trimble.com"
      },
      {
        "groupName": "Group 2",
        "apiName": "Search API",
        "last_exc_status": false,
        "last_exc_time": "11/17/2017 10:50 AM",
        "last_failure_time": "11/17/2017 09:50 AM",
        "schedule": "Every 15 Minute",
        "notification_email": "see-hawk@trimble.com"
       },
       {
        "groupName": "Group 3",
         "apiName": "Search API",
         "last_exc_status": false,
         "last_exc_time": "11/17/2017 10:50 AM",
         "last_failure_time": "11/17/2017 09:50 AM",
         "schedule": "Every 10 Minute",
         "notification_email": "see-hawk@trimble.csee-hawk@trimble.com, see-hawk@trimble.com, see-hawk@trimble.com, see-hawk@trimble.csee-hawk@trimble.com, see-hawk@trimble.com, see-hawk@trimble.com"
        }
    ];

    var API_STATUS = {
      "true": "Pass",
      "false": "Fail"
    };

    function PickGroupData(groupName) {
      tableData = [];
      for(var i = 0; i < allTableData.length; i++) {
        if (allTableData[i].groupName === groupName) {
          tableData.push(allTableData[i]);
        }
      }
      return tableData;
    }

    return {
      API_STATUS: API_STATUS,
      allTableData: allTableData,
      loadAllItems : function() {
        return $q.when(tableData);
      },
      /**
       * Query expects that `limit`,`page`, and `order` fields be present
       */
      loadByPagination: function (query, groupName) {
        var listAll = PickGroupData(groupName);
        query = query || {limit:10,page:1};
        var list = [];
        var start = (query.page-1)*query.limit;
        var end = start + query.limit;
        list = listAll.slice(start, end);
        return $q.when({items:list,count:list.length});
      }
    };
  }
})();
