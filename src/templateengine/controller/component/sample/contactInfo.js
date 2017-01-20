(function (angular) {

	angular
		.module('Cerberus.TemplateEngine')
		.controller('Cerberus.TemplateEngine.Controller.Component.Sample.ContactInfo', myController);

	myController.$inject = ["$scope"];

	function myController($scope) {

		$scope.jsonData = [
			{
				"index": 0,
				"isActive": false,
				"age": 28,
				"eyeColor": "brown",
				"name": "Lucas Nieves",
				"gender": "male"
			},
			{
				"index": 1,
				"isActive": false,
				"age": 21,
				"eyeColor": "blue",
				"name": "Frye Wagner",
				"gender": "male"
			},
			{
				"index": 2,
				"isActive": false,
				"age": 37,
				"eyeColor": "brown",
				"name": "Clara Bentley",
				"gender": "female"
			},
			{
				"index": 3,
				"isActive": true,
				"age": 20,
				"eyeColor": "green",
				"name": "Randolph Mcdonald",
				"gender": "male"
			},
			{
				"index": 4,
				"isActive": true,
				"age": 23,
				"eyeColor": "blue",
				"name": "Marsha Russell",
				"gender": "female"
			},
			{
				"index": 5,
				"isActive": true,
				"age": 29,
				"eyeColor": "blue",
				"name": "Ramsey Contreras",
				"gender": "male"
			},
			{
				"index": 6,
				"isActive": true,
				"age": 20,
				"eyeColor": "brown",
				"name": "Julie Aguirre",
				"gender": "female"
			}
		];

		$scope.sideNav = function (data, event) {
			if (event) event.stopPropagation();
			if (data === 1) {
				$scope.finalData = $scope.jsonData[0];
			} else if (data === 2) {
				$scope.finalData = $scope.jsonData[1];
			}
			else if (data === 3) {
				$scope.finalData = $scope.jsonData[2];
			}
			else if (data === 4) {
				$scope.finalData = $scope.jsonData[3];
			}
			else if (data === 5) {
				$scope.finalData = $scope.jsonData[4];
			}
		}
	}
})(window.angular);