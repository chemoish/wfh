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
  author: 'Abdel',
  message: "Wfh today, cable guy is coming over to hook up the interwebs"
}, {
  author: 'Adrian',
  message: "need to head home really quick, will be wfh for the rest of the day"
}, {
  author: 'Adrian',
  message: "dentist appointment, wfh"
}, {
  author: 'Adrian',
  message: "WFH because of construction at my apartment"
}, {
  author: 'Aiman',
  message: "WFH in the morning, avoiding traffic."
}, {
  author: 'Aiman',
  message: "Team, I need to go to the court and have to take care of a traffic ticket, would come in or WFH depending on what time I get free."
}, {
  author: 'Andy',
  message: "My wife's car wouldn't start this morning, so im taking calls from home before coming in"
}, {
  author: 'Byron',
  message: "disease-ridden, but lucid. WFH"
}, {
  author: 'Byron',
  message: "WFH Stubbed my toe on my bed today"
}, {
  author: 'Carey',
  message: "I will be working from home though because I have a wedding to go to in the after noon."
}, {
  author: 'Carlos',
  message: "wfh today, feeling worse"
}, {
  author: 'Carlos',
  message: "WFH today, have some unexpected errands to run."
}, {
  author: 'Caroline',
  message: "My nanny is sick , leaving at 1Pm and WFH"
}, {
  author: 'Chris',
  message: "wfh today, still sick"
}, {
  author: 'Chris',
  message: "Just a heads up I am out sick today but am working from home"
}, {
  author: 'Chris',
  message: "still sick, working from home today."
}, {
  author: 'Christian',
  message: "FYI, ill be working from home tomorrow. my last deep cleaning dentist appointment. *much rejoicing*"
}, {
  author: 'Daniel',
  message: "I am going to yield to peer-pressure and WFH"
}, {
  author: 'Eddie',
  message: "Wfh in the am. Having trouble getting ready due to back problems"
}, {
  author: 'Eddie',
  message: "Tessa got out of the yard. I had to retrieve her and patch up the hole"
}, {
  author: 'Eric',
  message: "Got a pretty bad cold this weekend. In the interest of not spreading it around the office I'm gonna be working from home today."
}, {
  author: 'Ilya',
  message: "Good morning guys, I'm working from home today while the 405 is closed until tomorrow morning."
}, {
  author: 'Ilya',
  message: "WFH today | thanks Obama"
}, {
  author: 'James',
  message: "a/c repair company coming to the apartment today, so working from home."
}, {
  author: 'James',
  message: "good morning. pretty sick so working from home today."
}, {
  author: 'Jeff',
  message: "Working from home until or if my car gets out o’ the shop today."
}, {
  author: 'Jeff',
  message: "Having a bit of trouble with my car. Into the shop we go. wfh until it’s fixed."
}, {
  author: 'Jon',
  message: "hey all.  not feeling well today.  i’ll be WFH on and off."
}, {
  author: 'Kevan',
  message: "WFH today, caught a bad cold over the weekend."
}, {
  author: 'Kevin',
  message: "wfh today, I think my standing desk should be arriving"
}, {
  author: 'Kevin',
  message: "wfh for the morning, office in the afternoon after doctor's appt"
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
}, {
  author: 'Lucas',
  message: "wfh as well. maintenance dudes are coming by to measure windows"
}, {
  author: 'Lucas',
  message: "WFH today, pre approved"
}, {
  author: 'Lucas',
  message: "woke up with an upset stomach, gonna wfh"
}, {
  author: 'Steve',
  message: "hola dudes. WFH until the plumber comes and goes"
}, {
  author: 'Travis',
  message: "Feeling well enough to work but don't want to expose you guys to whatever I got cause it's nasty. Gonna work from home today again."
}, {
  author: 'Travis',
  message: "My family is still not well today. Also now I'm feeling on the brink of getting it (scratchy throat, etc...). Gonna work from home to spare the germs in case I am getting it."
}, {
  author: 'Travis',
  message: "Car probs. WFH"
}, {
  author: 'Travis',
  message: "My car is still in the shop. Wifey has 2nd vehicle this morning so I'm WFH."
}, {
  author: 'Trung',
  message: "i have a dr appointment at 2pm today so i will be wfh"
}, {
  author: 'Trung',
  message: "mechanic is suppose to drop off my car this afternoon so ill be working from home today"
}, {
  author: 'Trung',
  message: "ill be working from home today because ill be visiting my mechanic, and should be getting my car today"
}]);

WFH.constant('imageConstant', [{
  src: 'img/claus.png',
  title: 'Claus'
}, {
  src: 'img/horse.png',
  title: 'Horse'
}, {
  src: 'img/kite.png',
  title: 'Kite'
}, {
  src: 'img/pirate.png',
  title: 'Pirate'
}, {
  src: 'img/skydiving.png',
  title: 'Skydiving'
}, {
  src: 'img/work.png',
  title: 'Work'
}]);
