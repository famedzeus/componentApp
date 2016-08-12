(function () {

  'use strict';

  /**
   * @ngdoc component
   * @name VINDetails
   * @function
   *
   * @description
   * VIN Details component.
   */
  var controller = function ($injector) {
    this.$onInit = function () {
      this.user = "Graham Reed!";
      this.appController.requestData('test', $http.get('/test'));
      //$http.get('/test',function(){});
    }
    this.$onChanges = function(changesObj){
      console.log(changesObj);
    };
    this.$onDestroy = function(){};
    this.$doCheck = function(){};
    this.$postLink = function(){};
  };

  var componentDefinition = {
    templateUrl: 'app/components/VINDetails/VINDetails.html',
    require: {
      appController: '^application'
    },
    bindings: {},
    controller: ['$injector', controller],
    controllerAs: 'VINDetails'
  };

  var configDefinition = function ($provide, $routeProvider) {
/*    $routeProvider.when('/home', {
      template: '<home></home>',
      resolve: {
        user: function () {
          return 'Test';
        }
      }
    }); */
  };

  app.component('vinDetails', componentDefinition).config(configDefinition);

})();

// gulp patch in Angular 2 syntax --
