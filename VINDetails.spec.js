(function () {
  'use strict';

  describe('component: home', function () {
    var $componentController;

    beforeEach(module('nissan'));
    beforeEach(inject(function (_$componentController_) {
      $componentController = _$componentController_;
    }));

    it('should resolve user property', function () {
      // Here we are passing actual bindings to the component
      var bindings = {user: 'Graham Reed'};
      var ctrl = $componentController('home', null, bindings);

      expect(ctrl.user).toBeDefined();
      expect(ctrl.user).toBe('Graham Reed');
    });

    /*
     it('should call the `onDelete` binding, when deleting the hero', function() {
     var onDeleteSpy = jasmine.createSpy('onDelete');
     var bindings = {hero: {}, onDelete: onDeleteSpy};
     var ctrl = $componentController('heroDetail', null, bindings);

     ctrl.delete();
     expect(onDeleteSpy).toHaveBeenCalledWith({hero: ctrl.hero});
     });
     */

  });
})();
