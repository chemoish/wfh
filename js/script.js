WFH = angular.module('WFH', []);

WFH.controller('WfhController', [
  '$scope',
  'excuseConstant',
  'imageConstant',
  function (
    $scope,
    excuseConstant,
    imageConstant
  ) {
    function getRandomItem(item) {
      if (!item.length || item.length === 0) {
        return;
      }

      return item[Math.floor(Math.random() * item.length)];
    }

    (updateCard = function () {
      $scope.excuse = getRandomItem(excuseConstant);
      $scope.image  = getRandomItem(imageConstant);
    })();

    $scope.onCycleMessageClick = function () {
      updateCard();
    };
  }
]);

WFH.constant('excuseConstant', [{
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}, {
  message: 'Nunc eleifend, eros varius eleifend posuere, tortor diam consequat magna, ac fermentum libero diam in felis.'
}]);

WFH.constant('imageConstant', [{
  title: 'Pirate',
  src:   'img/pirate.png'
}, {
  title: 'Claus',
  src:   'img/claus.png'
}]);
