angular.module('app').controller('MainCtrl', ['$scope', function($scope) {
  $scope.testdata = [
    {first_name: "Tom", last_name: "Green", gender: "m"},
    {first_name: "Katie", last_name: "Black", gender: "f"},
    {first_name: "John", last_name: "Cena", gender: "m"},
    {first_name: "Jane", last_name: "Doe", gender: "f"},
    {first_name: "Sally", last_name: "Jones", gender: "f"}
  ];

  // Change all when database is implemented
  // Do modals then add a log in modal
  $scope.activeUser = "";




  $scope.testfunc = function() {
    console.log("THIS WORKS!!!");
  };



  // Change way to do modals, this is to be built on
  $scope.modalActive = false;

  $scope.checkName = function() {
    if(doesUserExist(this.login_name)) {
      console.log("Logging in as " + this.login_name);
      $scope.activeUser = this.login_name;

      // Change this when sorting out modal
      $scope.modalActive = false;
    }
    else {
      console.log("User does not exist");
    }
  };

  function doesUserExist(login_name) {
    for (var i = 0; i < $scope.testdata.length; i++) {
      if ($scope.testdata[i]['first_name'] === login_name) {
        return true;
      }
    }
    return false;
  }

  $scope.logout = function() {
    console.log("Logging Out");
    $scope.activeUser = "";
  }

  $scope.openModal = function(modalToOpen) {
    var modal = document.getElementById(modalToOpen);
    $scope.modalActive = true;
    console.log(modal);
  };

  $scope.closeModal = function() {
    $scope.modalActive = false;
  };
}]);