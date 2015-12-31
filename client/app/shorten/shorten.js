angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.url= '';
  $scope.addLink = function(){
    console.log("clicke - vlaue", $scope.url)
    link = {url: $scope.url};
    Links.addLink(link)
      .then(function (data) {
        console.log(data, 'line10 response');
        // res = 201
      }, function (err) {
        // do this
      });
  }

});
  
