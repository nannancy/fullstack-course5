(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var list1 = this;//Controller as Syntax
    var message = 'hey';
    // var shoppingList = ShoppingListCheckOffService;//we use service to control data

    list1.items = ShoppingListCheckOffService.itemsTobuy;
    list1.checkOff = function (itemIndex) {
      ShoppingListCheckOffService.checkOff(itemIndex);
    };
    list1.isEmpty = function(){
      return list1.items.length==0;
    };
    console.log(list1);
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var list2 = this;
    list2.items = ShoppingListCheckOffService.itemsBought;
    list2.isEmpty = function(){
      return list2.items.length==0;
    }
  }

  function ShoppingListCheckOffService() {
    var service = this;

    service.itemsTobuy = [
      {
        name: "milk",
        quantity: "1"
      },
      {
        name: "coffee",
        quantity: "2"
      },
      {
        name: "rice",
        quantity: "3"
      },
      {
        name: "lemon",
        quantity: "4"
      },
      {
        name: "apple",
        quantity: "5"
      }
    ];
    service.itemsBought = [];
     service.addItemsTobuy = function (itemName, quantity){
       var item = {
         name: itemName,
         quantity: quantity
       };
       itemsTobuy.push(item);
     };
     service.addItemsBought = function (itemName, quantity){
       var item = {
         name: itemName,
         quantity: quantity
       };
       service.itemsBought.push(item);
     };
     service.checkOff = function (itemIndex) {
      service.addItemsBought(service.itemsTobuy[itemIndex].name,service.itemsTobuy[itemIndex].quantity);
       service.itemsTobuy.splice(itemIndex, 1);
     };
     // service.isEmpty = function (items) {
     //   return items.length == 0;
     // }
  }
}());
