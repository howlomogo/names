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

  $scope.checkName = function() {
    if(doesUserExist(this.login_name)) {
      console.log("Logging in as " + this.login_name);
      $scope.activeUser = this.login_name;
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

  $scope.loadModal = function() {
    // add css class to modal
    
  };
}]);