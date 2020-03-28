(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.message = "Please enter data first";
    $scope.dishes = "";

    $scope.checkIfTooMuch = function(){
      var totalDish = countDish($scope.dishes);
      if(totalDish==0){
        $scope.message = "Please enter data first";
      }else if (totalDish<=3) {
        $scope.message = "Enjoy!";
      }else{
        $scope.message = "Too much!";
      }
    };
  }
  function countDish(string){
    var totalDish = 0;
    var dishes = string.split(',');
    for(var i = 0; i < dishes.length; i++){
      dishes[i]=dishes[i].trim();
      if(dishes[i] !== null && dishes[i] !== ''){
        totalDish ++;
      }
    }
    console.log("total number is "+ totalDish);
    return totalDish;
  }
}());
