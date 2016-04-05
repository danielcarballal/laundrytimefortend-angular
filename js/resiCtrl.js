basicApp.controller('resiCtrl', function($scope) {
	/* Report Modal */
	$scope.reportSelector = {
		selected: 1, 
		description: "", 
		show: false 
		}; 

	$scope.reportModSelChanged = function () {
		this.reportSelector.show = (this.reportSelector.selected == 5); 
	}
	/* end Report Modal */
	
});/* endController */