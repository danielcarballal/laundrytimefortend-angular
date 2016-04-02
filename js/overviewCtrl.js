

laundryTimeApp.controller('overviewCtrl', function($scope,$routeParams) {

	$scope.getResidenceName(){
		return $routeParams.res
	}

	$scope.currentResName = $scope.getResidenceName()


	$scope.getAllMachines(){
		var xmlHttp = new XMLHttpRequest()
		xmlHttp.open( "GET", "/machines/", false ) //Async set to false

		xmlHttp.send()
		return xmlHttp.responseText
	}

}