(function(){
  'use strict';

  angular.module('app')
          .service('navService', [
          '$q',
          navService
  ]);

  function navService($q){
    var menuItems = [
      {
        name: 'API Monitor',
        icon: 'dashboard',
        sref: '.dashboard'
      },
      
      {
        name: '',
        icon: '',
        sref: ''
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(menuItems);
      }
    };
  }

})();
