angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function(){
    var link = {};
    Links.addLink(link)
      .then(function (data) {
        console.log(data, 'line10 response');
        // res = 201
      }, function (err) {
        // do this
      });
  }

});
  
