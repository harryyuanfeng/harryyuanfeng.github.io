app.controller('dengluCtrl', ['$scope', function ($scope) {
   			$scope.myVar = false;
        $scope.toggle = function() {
            $scope.myVar=!$scope.myVar;
        };
}]);