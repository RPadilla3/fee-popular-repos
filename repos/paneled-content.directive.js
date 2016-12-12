(function() {
  'use strict';

  angular.module('gh')
    .directive('panel', PanelDirective);

  function PanelDirective() {
    return {
      templateUrl: '/repos/ghDirective.template.html',
      restrict: 'A',
      scope: {
      },
      transclude: true
  };

  }


}());
