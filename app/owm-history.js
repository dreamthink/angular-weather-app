angular
	.module('owmHistory', [])
	//it makes use of the service below to place the list of tracked cities on its own scope
	.factory('owmHistory', function() {
	  var historyQueue = [];
	  return {
	    push: function(entry) {
	      historyQueue.push(entry);
	    },
	    list: function() {
	      return historyQueue;
	    }
	  };
	})
	.controller('HistoryCtrl', ['owmHistory', '$scope', function(owmHistory, $scope) {
	  $scope.$watchCollection(
	    function() {
	      return owmHistory.list();
	    },
	    function(oldListings, newListings) {
	      $scope.listings = newListings;
	    }
	  );
	}]);