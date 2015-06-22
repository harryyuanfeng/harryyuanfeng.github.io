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
                                return uiLoad.load(['js/app/home/home.js', 'js/app/home/home.css', //'js/app/home/home.css',
                                    'js/app/home/redian/redian.js', 'js/app/home/redian/redian.css',
                                    'js/app/home/daohang/daohang.js', 'js/app/home/daohang/daohang.css',
                                    'js/app/home/denglu/denglu.js', 'js/app/home/denglu/denglu.css',
                                    'js/app/home/gaojisousuo/gaojisousuo.js', 'js/app/home/gaojisousuo/gaojisousuo.css',
                                    'js/app/home/jingxuanyanbao/jingxuanyanbao.js', 'js/app/home/jingxuanyanbao/jingxuanyanbao.css',
                                    'js/app/home/remenhangye/remenhangye.js', 'js/app/home/remenhangye/remenhangye.css',
                                    'js/app/home/tupianlan/tupianlan.js', 'js/app/home/tupianlan/tupianlan.css',
                                    'js/app/home/weibu/weibu.js', 'js/app/home/weibu/weibu.css',
                                    'js/app/home/wenzhang/wenzhang.js', 'js/app/home/wenzhang/wenzhang.css',
                                    'js/app/home/zhuyaohangye/zhuyaohangye.js', 'js/app/home/zhuyaohangye/zhuyaohangye.css'
                                ]);
                            }]
                    }

                })
        }
    ]
);