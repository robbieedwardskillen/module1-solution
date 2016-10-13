(function () {
'use strict';

	angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope){
		$scope.tooMuch = false;
		$scope.lunchList = "";
		$scope.message = "";
		
		$scope.checkAmount = function(){
			var lunchArray = $scope.lunchList.split(",");
			if (lunchArray.length > 3){
				$scope.message = "too much";
			}
			else if($scope.lunchList.length <= 0){
				$scope.message = "Please enter data first";
			}
			else{
				$scope.message = "Enjoy!";
			}
			console.log(lunchArray.length);
		}
	}
	
})();
