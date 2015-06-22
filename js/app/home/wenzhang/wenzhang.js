app.controller('wenzhangCtrl', ['$scope', function ($scope) {
   			$scope.myVar = false;
        $scope.toggle = function() {
            $scope.myVar=!$scope.myVar;
        };
}])
// .controller('caijingzixunCtrl', function($scope, $location, $anchorScroll) {
  // $scope.title = 'Ionic';
// 
// $scope.scrollTo = function(id) {
    // $location.hash(id);
    // console.log($location.hash());
    // $anchorScroll();
  // };
// })
;