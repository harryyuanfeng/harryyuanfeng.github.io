/**
 * Created by test on 15/6/15.
 */
app.controller('homeCtrl', ['$scope', '$state',
    function ($scope, $state) {
        AV.initialize("jymdrxd1quxfv1o6tsp65m0tu07nrw1bra3lwgywb54zq41n", "6nqx1z6vr6w8z5hsddit0ykuz2d9bb2na4n2uq2a9tt35ugh");
        var currentUser = AV.User.current();
        if (currentUser) {
            $scope.username = currentUser;
            // do stuff with the user
        } else {
            // show the signup or login page
        }
        var btnClassq = AV.Object.extend("btnClasss");
        var query = new AV.Query(btnClassq);
        query.find({
            success: function (_btnClasss) {
                $scope.btnName = _btnClasss;
                $scope.$apply();
            },
            error: function (object, error) {
                debugger
                // The object was not retrieved successfully.
                // error is a AV.Error with an error code and description.
            }
        });
        $scope.clickType = function (z) {

            var relation = z.relation("articlelists");
            relation.query().find({
                success: function (list) {
                    $scope.articlelists = list;
                    $scope.$apply();
                }, error: function (result, err) {
                    debugger
                }
            });
        };
//
        $scope.clickArticle = function (z) {
            $scope.wenzhang = z;
            $scope.articleTitle = z.attributes.articleTitle;
            $scope.author = z.attributes.author;
            $scope.hymc = z.attributes.hymc;
            $scope.time = z.attributes.time;
            $scope.type = z.attributes.type;
            $scope.ybcc = z.attributes.ybcc;
            $scope.number = z.attributes.number;
            $scope.ybys = z.attributes.ybys;
            $scope.tjpj = z.attributes.tjpj;
            $scope.wzzy = z.attributes.wzzy;
        };
        var analysts = AV.Object.extend("analysts");
        var query = new AV.Query(analysts);
        query.equalTo("userID", AV.User.current());
        query.first({
            success: function (object) {
                $scope.user = object;
            },
            error: function (error) {
                alert("Error: " + error.code + " " + error.message);
            }
        });
        $scope.shoucang = function (z) {
            if (AV.User.current() == null) {
                $state.go('app.userLgn');
            }
            ;

            var relation = $scope.user.relation("collectionArticle");
            relation.add($scope.wenzhang);
            $scope.user.save(null, {
                error: function (object, error) {
                    console.log('Failed to create new object, with error code: ' + error.message);

                }
            });
        };

        $scope.wodeshoucang = function () {
            if (AV.User.current() == null) {
                $state.go('app.userLgn');
            } else {
                $state.go('app.collecte');
            }
        };
    }]);