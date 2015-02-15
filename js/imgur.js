
(function(){
  var app = angular.module('imgur', []);

  app.controller('ApiController', function() {
    this.apiUrl = 'https://api.imgur.com/3/';
    this.gallerySearchUrl = 'gallery/search/{sort}/{window}/{page}';
    this.url = this.apiUrl + this.gallerySearchUrl;
    this.authHeader = {'Authorization': 'Client-ID b37988f15bb617f'};
  });
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