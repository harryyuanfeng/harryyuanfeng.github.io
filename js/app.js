var app = angular.module('zhanguApp', ['ui.router', 'ui.load', 'zhanguApp.filters',
    'zhanguApp.services',
    'zhanguApp.directives',
    'zhanguApp.controllers',])
    .run(
    ['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]
).config(
    ['$stateProvider', '$urlRouterProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
        function ($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
            app.controller = $controllerProvider.register;
            app.directive = $compileProvider.directive;
            app.filter = $filterProvider.register;
            app.factory = $provide.factory;
            app.service = $provide.service;
            //整个网站首先从这里开始，这句话的意思是：我看看url是什么，如果url跟下面的都不对，我就加载dashboard－v1这一个页面
            $urlRouterProvider
                .otherwise('/app/home');
            //这句是：如果url里面有app，那我就先加载zhanguApp.html这个文件，然后你打开zhanguApp.html这个页面
            $stateProvider
                .state('app', {
                    abstract: true,
                    url: '/app',
                    templateUrl: 'tpl/app.html'
                })
                //这里：就是说把dashboar－v1的html注入到app的ui－view里面
                .state('app.home', {
                    url: '/home',
                    templateUrl: 'js/app/home/home.html',
                    resolve: {
                        deps: ['uiLoad',
                            function (uiLoad) {
                                return uiLoad.load(['js/app/home/home.js']);
                            }]
                    }
                })
        }
    ]
)
    .controller('someController', function ($scope) {
        $scope.message = 'This works in IE8 and all good browsers 看到这个证明没有问题';
    });