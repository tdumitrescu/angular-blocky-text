angular.module('tdumitrescu.blocky-text', []).
  directive('tdBlockyText', function () {
    return {
      restrict: 'E',
      scope: {
        text:    '=',
        divider: '@'
      },
      replace: true,
      template:
        '<span class="td-blocky-text">' +
        '  <span class="td-blocky-text-char"' +
        '        ng-repeat="c in text track by $index"' +
        '        ng-class="{divider: isDivider(c)}">' +
        '    {{c}}' +
        '  </span>' +
        '</span>',
      link: function(scope) {
        scope.isDivider = function(c) {
          return c === scope.divider;
        }
      }
    }
  });
