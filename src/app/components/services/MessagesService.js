(function(){
  'use strict';

  angular.module('app')
        .service('messagesService', [
        '$q',
        messagesService
  ]);

  function messagesService($q){
    var messages = [
      {
        userPhoto : '/assets/images/user.svg',
        subject: 'API failed',
        userName: 'Wilhelm Conrad Röntgen',
        date: '2017',
        text: 'This API has failed 30% of times (6 out of 20)'
      },
      {
        userPhoto : '/assets/images/user.svg',
        subject: 'API taking more time',
        userName: 'Max Planck',
        date: '2017',
        text: 'This API seems to be taking more time than earlier'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(messages);
      }
    };
  }

})();
