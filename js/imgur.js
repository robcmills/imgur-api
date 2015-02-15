
(function(){

  function ngCreateComputedProperty($scope, computedPropertyName, dependentProperties, f) {
    function assignF($scope) {
      var computedVal = f($scope);
      $scope[computedPropertyName] = computedVal;
    };
      
    $scope.$watchCollection(dependentProperties, function(newVal, oldVal, $scope) {
      assignF($scope);
    });
    assignF($scope);
  };

  var app = angular.module('imgur', []);

  app.controller('ApiController', ['$scope', '$log', function($scope, $log) {
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

    // this.url = this.apiUrl + this.gallerySearchUrl
    //   .replace('{sort}',this.sort)
    //   .replace('{window}',this.window)
    //   .replace('{page}',this.page);

    // $http.defaults.headers.common.Authorization = 'Client-ID b37988f15bb617f';

    $scope.get = function() {
      $log.log('get');
    };
  }]);

})();

// function imgurController($scope, $http) {
//   // $http.get("http://www.w3schools.com/website/Customers_JSON.php")
//   //   .success(function(response) {$scope.names = response;});
// }



// var storage_str = '[';
// gen_str = function() {
//   comments.forEach(function(comment) {
//     storage_str = storage_str.concat(JSON.stringify(comment));
//     storage_str = storage_str.concat(',');
//   });
//   storage_str = storage_str.concat(']');
// };

// var 
//   apiUrl = 'https://api.imgur.com/3/',
//   gallerySearchUrl = 'gallery/search/{sort}/{window}/{page}',
//   authHeader = {'Authorization': 'Client-ID b37988f15bb617f'};

// local_response = {},
// images = [],
// comments = [];

// $(document).ready(function(){
  
// window.jqxhr = $.ajax({
//   url: gallerySearchUrl
//       .replace('{sort}','time')
//       .replace('{window}','day')
//       .replace('{page}','0'),
//     headers: authHeader
//   })
//   .success(function(gallery_response) { 
//     console.log("success", gallery_response);
//     images = gallery_response.data;
//   })
//   .fail(function() {
//     console.log("error getting gallery");
//   })
//   .then(function() {
//     console.log('then')
//     // images.forEach(function(img) {
//     // });
//   });

// });