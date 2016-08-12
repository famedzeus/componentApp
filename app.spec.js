describe('application component',function(){

  var $componentController,ctrl;

  beforeEach(module('nissan'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
    ctrl = $componentController('application', null, {});
    ctrl.$onInit();
  }));

  it('exposes semantic services API to child components',function() {
    expect(ctrl.requestData).toBeDefined();
  });

  describe('default application configuration',function(){

    it('sets the application name',function() {
    });
    it('sets REST server properties',function() {
    });
    it('invokes header token security interceptor',function() {
    });
    it('invokes cache factory and prepares for use',function(){
    });

  });

});
