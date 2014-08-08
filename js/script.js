WFH = angular.module('WFH', [
  'ngClipboard'
]);

WFH.config([
  'ngClipProvider',
  function (
    ngClipProvider
  ) {
    ngClipProvider.setPath('bower_components/zeroclipboard/dist/ZeroClipboard.swf');
  }
]);

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

    $scope.onCopyMessageClick = function () {
      return $scope.excuse.message;
    };

    $scope.onCycleMessageClick = function () {
      updateCard();
    };
  }
]);

WFH.constant('excuseConstant', [{
  author: 'Byron',
  message: "WFH Stubbed my toe on my bed today"
}, {
  author: 'Lucas',
  message: "wfh, plumber comin by"
}, {
  author: 'Lucas',
  message: "I think i'm going to work from home today. Worried about that Obama traffic and my commute"
}, {
  author: 'Lucas',
  message: "Wfh. Studio day"
}, {
  author: 'Lucas',
  message: "wfh, huge headache"
}, {
  author: 'Lucas',
  message: "brb running an errand, gonna try and avoid traffic and finish wfh"
}, {
  author: 'Lucas',
  message: "Wfh. Getting sofa delivered"
}, {
  author: 'Lucas',
  message: "wfh. cleaning the house after a long weekend"
}, {
  author: 'Lucas',
  message: "Wfh gonna deal with some of these tickets"
}, {
  author: 'Lucas',
  message: "wfh today, getting AC repaired"
}, {
  author: 'Lucas',
  message: "Wfh today, feeling slightly under the weather"
}, {
  author: 'Lucas',
  message: "WFH today. Studio tonight"
}, {
  author: 'Lucas',
  message: "Wfh. Getting AC installed today"
}, {
  author: 'Lucas',
  message: "wfh in the AM to figure out some bugs"
}, {
  author: 'Lucas',
  message: "cool. i’m WFH today cause my ceramics class is on tuesday"
}, {
  author: 'Lucas',
  message: "WFH today so I can make it to my ceramics class, hope you all had a good weekend"
}, {
  author: 'Lucas',
  message: "WFH today. I have a class tonight."
}, {
  author: 'Lucas',
  message: "just as an fyi, i’m going to start wfh on tuesdays for a little while. I’m taking a ceramics class downtown at 7pm and wouldn’t’ make it in time if i left from here."
}, {
  author: 'Lucas',
  message: "Wfh today. Feeling slightly ill and congested"
}, {
  author: 'Lucas',
  message: "wfh in the AM, then off to a wedding in the afternoon"
}, {
  author: 'Lucas',
  message: "Hey went on a hike in the rain yesterday in Oregon haha. Feeling slightly uber the weather. Wfh"
}, {
  author: 'Lucas',
  message: "hey guys, we got a little sick over the weekend at my house. wfh today if that’s ok"
}, {
  author: 'Lucas',
  message: "Wfh in the morning. I have a painter coming by the house"
}, {
  author: 'Lucas',
  message: "Gonna have to wfh today while I figure car stuff out but I will be on wifi"
}, {
  author: 'Lucas',
  message: "working from home today. have to go to the mechanic in the morning for a bit"
}]);

WFH.constant('imageConstant', [{
  src:   'img/claus.png',
  title: 'Claus'
}, {
  src:   'img/horse.png',
  title: 'Horse'
}, {
  src:   'img/kite.png',
  title: 'Kite'
}, {
  src:   'img/pirate.png',
  title: 'Pirate'
}, {
  src:   'img/skydiving.png',
  title: 'Skydiving'
}, {
  src:   'img/work.png',
  title: 'Work'
}]);
