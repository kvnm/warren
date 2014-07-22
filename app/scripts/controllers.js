'use strict';
angular.module('Warren.controllers', [])

.controller('DashCtrl', function() {
})

.controller('BranchesCtrl', function($scope, Branches, LoaderService) {
  LoaderService.show();
  Branches.getCached().then(function(data) {
    LoaderService.hide();
    $scope.branches = data;
  });
})

.controller('BranchDetailCtrl', function($scope, $stateParams, Branches) {
  Branches.getCached().then(function(data) {
    $scope.branch = data[$stateParams.branchId];
  });

  $scope.launchMap = function(branch) {
    window.location = 'maps:daddr=' + branch.latitude + ',' + branch.longitude;
  };
})

.controller('SearchCtrl', function($scope) {
  $scope.launchSearch = function(query) {
    window.open('http://warrenls2.org:8080/mobile?config=ysm#section=search&term=' + query, '_blank', 'location=yes');
  };
})
;
