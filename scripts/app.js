var app = angular.module("todoApp", []);
app.controller("listCtrl", function($scope) {


  //////////  Variables  //////////
  $scope.toDos = [ // List of to-dos
    "laundry",
    "grocery shopping",
    "get oil change for car",
    "edit portfolio",
    "call Mom"
  ];

  $scope.finished = []; // List of finished to-dos
  $scope.chore;


  //////////  Methods  //////////
  $scope.addChore = addChore;
  $scope.removeChore = removeChore;
  $scope.moveToFinished = moveToFinished;


  //////////  Functions  //////////
  // Adds to $scope.toDos
  function addChore() {
    if (!$scope.chore || $scope.chore === "") {
      return false;
    } else {
      $scope.toDos.push($scope.chore);
    }
    $scope.chore = "";
  }

  // Removes from $scope.toDos, run inside moveToFinished
  function removeChore(dummy) {
    $scope.toDos.splice(dummy, 1);
  }

  // Adds a todo to $scope.finished array
  function moveToFinished(index) { //click finished!
    $scope.finished.push($scope.toDos[index]); //push removed chore to finished array
    $scope.removeChore(index); //removeChore fires; do this last or else the index number doesn't update
  }

  // FIGURE OUT HOW TO PRESS ENTER WHILE FOCUSING AN INPUT
  //look into ng-blur

});
