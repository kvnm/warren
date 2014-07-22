'use strict';
angular.module('Warren.controllers', [])

.controller('DashCtrl', function() {
})

.controller('BranchesCtrl', function($scope, Branches) {
  Branches.getCached().then(function(data) {
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
;
