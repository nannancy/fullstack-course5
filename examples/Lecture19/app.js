(function () {
'use strict';

angular.module('ControllerAsApp', [])
.controller('ParentController1', ParentController1)
.controller('ChildController1', ChildController1)
.controller('ParentController2', ParentController2)
.controller('ChildController2', ChildController2);

ParentController1.$inject = ['$scope'];
function ParentController1($scope) {
  $scope.parentValue = 1;
  $scope.pc = this;
  $scope.pc.parentValue = 2;
  // console.log("ParentController1 $scope: ", $scope);
}


ChildController1.$inject = ['$scope'];
function ChildController1($scope) {
  // console.log("$scope.parentValue: ", $scope.parentValue);
  // console.log("CHILD $scope: ", $scope);
  // //change the property of $scope-->does add an object to $scope
  // $scope.parentValue = 5;
  // console.log("*** CHANGED: $scope.parentValue = 5 ***");
  // console.log("$scope.parentValue: ", $scope.parentValue);
  // console.log($scope);
  // //change parent $scope.parentValue through $scope.pc.parentValue
  // console.log("*** UNCHANGED: $scope.pc.parentValue = 2 ***");
  // console.log("$scope.pc.parentValue: ", $scope.pc.parentValue);
  // //change the property of an object of $scope.$parent--> does not add an object to $scope
  // $scope.pc.parentValue = 6;
  // console.log("** CHANGED: $scope.pc.parentValue = 6; ***");
  // console.log("$scope.pc.parentValue: ", $scope.pc.parentValue);
  // console.log("** $scope.$id = 3; ***");
  // console.log("$scope: ", $scope);
  //
  // console.log("** CHANGED: $scope.$parent.pc.parentValue = 6; ***");
  // console.log("$scope.$parent.pc.parentValue: ", $scope.$parent.pc.parentValue);
  //
  // console.log($scope);
}

// ** Controller As syntax
function ParentController2() {
  var parent = this;
  parent.value = 1;
}
ChildController2.$inject = ['$scope'];
function ChildController2($scope) {
  var child = this;
  child.value = 5;
  console.log("ChildController2 $scope: ", $scope);
}

})();
