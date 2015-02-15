(function(){

  function ngCreateComputedProperty($scope, computedPropertyName,   dependentProperties, f) {
    function assignF($scope) {
      var computedVal = f($scope);
      $scope[computedPropertyName] = computedVal;
    };
      
    $scope.$watchCollection(dependentProperties, function(newVal, oldVal, $scope) {
      assignF($scope);
    });
    assignF($scope);
  };

  var app = angular.module('api', []);

  app.controller('ApiController', ['$scope', '$log', '$http', 
    function($scope, $log, $http) {
      
    $scope.apiUrl = 'https://api.imgur.com/3/';
    $scope.gallerySearchUrl = 'gallery/search/{sort}/{window}/{page}';
    $scope.sort = 'time';
    $scope.window = 'day';
    $scope.page = '0';

    ngCreateComputedProperty($scope, 'url', '[sort,window,page]', 
      function($scope) { return $scope.apiUrl + $scope.gallerySearchUrl
        .replace('{sort}', $scope.sort)
        .replace('{window}', $scope.window)
        .replace('{page}', $scope.page);
    });

    // $http.defaults.headers.common.Authorization = 'Client-ID b37988f15bb617f';

    $scope.get = function() {
      $log.log('get');
    };
  }]);

})();
