angular.module('chatroom').controller('mainCtrl', function($scope, messageService){

  //The getMessages function will call the getMessages method on the messageService object.
  //You'll then save the result of that request to your controller's $scope as messages ($scope.messages)

  $scope.getMessages = function() {
      messageService.getMessages().then(function(results) {
      $scope.messages = results.data;
         console.log(results)
    })
  }



  //The postMessage function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
  //pass that text to the postMessage method on the messageService object which will
  //then post it to the backend.

  $scope.postMessage = function(message) {
     messageService.postMessage(message).then(function(results) {

      return results;
    })
    $scope.message = "";
  }

  $scope.deleteChat = function() {
    messageService.deleteChat().then(function() {
      console.log("deleted!")
   })
 };

// $scope.replaceAll = function(replaceText) {
//   messageService.replaceAll(replaceText).then(function(results){
//   })
// }("Troll");


  //uncomment this code when your getMessages function is finished
  //This goes and gets new data every second, which mimicking a chat room experience.
   setInterval(function(){
    // $scope.deleteChat();
    // $scope.postMessage("trolled");
    $scope.getMessages();
  }, 1500)

})
