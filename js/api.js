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
    $scope.gallerySearchUrl = 'gallery/{section}/{sort}/{window}/{page}.json';
    $scope.section = 'hot';
    $scope.sort = 'time';
    $scope.window = 'day';
    $scope.page = '0';
    $scope.data = 'data';

    ngCreateComputedProperty($scope, 'url', '[sort,window,page]', 
      function($scope) { return $scope.apiUrl + $scope.gallerySearchUrl
        .replace('{section}', $scope.section)
        .replace('{sort}', $scope.sort)
        .replace('{window}', $scope.window)
        .replace('{page}', $scope.page);
    });

    $scope.get = function() {
      $log.log('get');
      $http.defaults.headers.common.Authorization = 'Client-ID b37988f15bb617f';
      $http.get($scope.url).
        success(function(data, status, headers, config) {
          $log.log('success', data);
          $scope.data = data;
        }).
        error(function(data, status, headers, config) {
          $log.log('error', data);
        });
      };
  }]);

})();
