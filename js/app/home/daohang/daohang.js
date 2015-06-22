/**
 * Created by test on 15/6/18.
 */
app.controller('caijingzixunCtrl', function($scope, $location, $anchorScroll) {
  $scope.title = 'Ionic';

$scope.scrollTo = function(id) {
    $location.hash(id);
    console.log($location.hash());
    $anchorScroll();
  };
})
;