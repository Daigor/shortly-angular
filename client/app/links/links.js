angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  // $scope.data.links = [{title: "test", url: "/test", base_url:"www.google.com", visits: 5, code: 555 },{title: "test", url: "/test", base_url:"www.go.com", visits: 5, code: 555 }];
  
  $scope.getLinks = function () {
    Links.getLinks().then(function (data) {
      $scope.data.links = data;
      console.log(data)
    })
  }
  
  $scope.getLinks();
});
