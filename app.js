(function () {

  'use strict';

  /**
   * @ngdoc component
   * @name application
   * @function
   *
   * @description
   * Application root component.
   * Exposes semantic application level services API to child components
   * Defaults routing to /app for invalid urls
   */
  var controller = function ($injector) {
    this.$onInit = function () {
      // Application Level Semantic Services interface DI
      this.cache = $injector.get('$cacheFactory')(this.appName);
      this.requestData = $injector.get('serviceCallManager');

    };
    this.$onChanges = function(changesObj){
      console.log(changesObj);
    };
    this.$onDestroy = function(){};
    this.$doCheck = function(){};
    this.$postLink = function(){};

    this.isNarrowScreen = function() {
      return screen.width < 630;
    };
    this.screenType = function() {
      return screen.width < 630 ? 'narrow' : 'desktop';
    };

  };

  var componentDefinition = {
    templateUrl: 'app/components/app/app.html',
    bindings: {
      appName:'@'
    },
    controller: ['$injector', controller]
  };

  var configDefinition = function ($provide, $routeProvider) {

    $routeProvider
      .when('/', {redirectTo: '/app'})
      .when('/app',{template:'<application app-name="Nissan"></application>'})
      .otherwise({redirectTo:'/app'});
  };

  app.decorator('$exceptionHandler',function($delegate){
    return $delegate;
  });

  app.component('application', componentDefinition).config(configDefinition);

})();

// gulp task needed to patch in Angular 2 syntax --


/*
app.decorator('$httpBackend', function($delegate) {
  var proxy = function(method, url, data, callback, headers) {
    var interceptor = function() {
      var _this = this,
        _arguments = arguments;
      setTimeout(function() {
        callback.apply(_this, _arguments);
      }, 700);
    };
    return $delegate.call(this, method, url, data, interceptor, headers);
  };
  for(var key in $delegate) {
    proxy[key] = $delegate[key];
  }
  return proxy;
});
*/
