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
    $scope.branch.phoneNumber = $scope.branch.phone.replace(/[^A-Z0-9]/ig, '');
  });

  $scope.launchMap = function(branch) {
    window.location = 'geo:' + branch.latitude + ',' + branch.longitude;
  };

  $scope.launchPhone = function(number) {
    window.open('tel:' + number, '_system');
  };
})

.controller('EventsCtrl', function($scope, Events, LoaderService) {
  LoaderService.show();
  Events.getCached().then(function(data) {
    LoaderService.hide();
    $scope.events = data;
  });

  $scope.openEvent = function(eid) {
    window.open('http://warrenlib.evanced.info/signup/EventDetails.aspx?EventId=' + eid, '_blank', 'location=yes');
  };
})

.controller('ResourcesCtrl', function($scope, Resources, LoaderService) {
  LoaderService.show();
  Resources.getCached().then(function(data) {
    LoaderService.hide();
    $scope.resources = data;
  });

  $scope.openResource = function(link) {
    window.open(link, '_blank', 'location=yes');
  };
})

.controller('SearchCtrl', function($scope) {
  $scope.launchSearch = function(query) {
    query = encodeURI(query);
    window.open('http://warrenls2.org:8080/mobile?config=ysm#section=search&term=' + query, '_blank', 'location=yes');
  };
})
;
