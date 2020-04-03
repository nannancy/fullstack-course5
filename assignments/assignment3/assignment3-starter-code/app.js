(function() {
  'use strict';

angular.module('NarrowItDown',[])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems',foundItemsDirective);

function foundItemsDirective(){
  var ddo = {
    templateUrl: 'foundItems.html',
    restrict: 'E',
    scope: {
      foundItems: '<',
      onRemove: '&'
    }
  };

return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var menu = this;
  var searchTerm = "";
  var found = "";
  menu.searchMenuItems = function () {
  var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
  promise.then(function (foundItems) {
    if(foundItems == null || foundItems.length == 0){
      menu.found = "";
    }else{
      console.log(foundItems);
      menu.found = foundItems;
    }
  })
  .catch(function (error) {
    console.log(error);
  })
};

menu.removeItem=function (index) {
  menu.found.splice(index,1);
}
}

MenuSearchService.$inject=['$http','ApiBasePath']
function MenuSearchService($http, ApiBasePath){
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    })
    .then(function (result) {
      var foundItems = result.data.menu_items.filter(function (element){
        return element.description.includes(searchTerm);
      })
      return foundItems;
    });
    return response;
  };
}
}());
