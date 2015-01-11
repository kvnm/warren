'use strict';
angular.module('Warren.services', [])

.factory('Branches', function ($http, $q, $cacheFactory) {
  var branchesCache = $cacheFactory('allBranches');

  return {
    getCached: function () {
      var cache = branchesCache.get('allBranches');
      var deferred = $q.defer();

      if (cache) {
        // Get from cache
        deferred.resolve(cache);
      } else {
        $http.get('http://warrenlib.com/api/branches', { cache: true })
          .success(function (data) {
            // Store to cache
            branchesCache.put('allBranches', data);
            deferred.resolve(data);
          });
      }

      return deferred.promise;
    }
  };
})

.factory('Events', function ($http, $q, $cacheFactory) {
  var eventsCache = $cacheFactory('allEvents');

  return {
    getCached: function () {
      var cache = eventsCache.get('allEvents');
      var deferred = $q.defer();

      if (cache) {
        // Get from cache
        deferred.resolve(cache);
      } else {
        $http.get('http://warrenlib.com/api/events', { cache: true })
          .success(function (data) {
            // Store to cache
            eventsCache.put('allEvents', data);
            deferred.resolve(data);
          });
      }

      return deferred.promise;
    }
  };
})

.factory('Resources', function ($http, $q, $cacheFactory) {
  var resourcesCache = $cacheFactory('allResources');

  return {
    getCached: function () {
      var cache = resourcesCache.get('allResources');
      var deferred = $q.defer();

      if (cache) {
        // Get from cache
        deferred.resolve(cache);
      } else {
        $http.get('http://warrenlib.com/api/resources', { cache: true })
          .success(function (data) {
            // Store to cache
            resourcesCache.put('allResources', data);
            deferred.resolve(data);
          });
      }

      return deferred.promise;
    }
  };
})

.factory('LoaderService', function($rootScope, $ionicLoading) {
  // Trigger the loading indicator
  return {
    show : function() { //code from the ionic framework doc
      // Show the loading overlay and text
      $rootScope.loading = $ionicLoading.show({
        // The text to display in the loading indicator
        content: 'Loading...',
        // The animation to use
        animation: 'fade-in',
        // Will a dark overlay or backdrop cover the entire view
        showBackdrop: true,
        // The maximum width of the loading indicator
        // Text will be wrapped if longer than maxWidth
        maxWidth: 200,
        // The delay in showing the indicator
        showDelay: 500
      });
    },
    hide : function(){
      $rootScope.loading.hide();
    }
  };
})
;
