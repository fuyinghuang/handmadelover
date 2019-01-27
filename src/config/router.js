function Router($urlRouterProvider, $stateProvider) {
  $stateProvider
    .state('home', {
      templateUrl: './views/home.html',
      url: '/home',
      controller: function($scope) {
        $scope.name = 'WDI 37!!';
        $scope.age = '3 weeks';
      }
    });
}
export default Router;
