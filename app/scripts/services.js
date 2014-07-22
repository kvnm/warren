'use strict';
angular.module('Warren.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Branches', function ($http, $q, $cacheFactory) {
  var branchesCache = $cacheFactory("allBranches");

  return {
    getCached: function () {
      var cache = branchesCache.get("allBranches");
      var deferred = $q.defer();

      if (cache) {
        // Get from cache
        deferred.resolve(cache);
      } else {
        $http.jsonp('//wcl.groupish.com/api/branches?callback=JSON_CALLBACK', { cache: true })
          .success(function (data) {
            // Store to cache
            branchesCache.put("allBranches", data);
            deferred.resolve(data);
          });
      }

      return deferred.promise;
    }
  }
});
