basicApp.controller('resiCtrl', function($scope) {
	/* Awesome code here */
	$scope.cancelar = false; 

	$scope.go = function () {
		alert("A TOPE"); 
	}

	$scope.close = function () {
		this.cancelar = !this.cancelar; 
	}

});/* endController */