(function() {
  'use strict';

  angular
    .module('wolski')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
