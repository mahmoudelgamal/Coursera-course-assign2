(function(){
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService']
  function ToBuyController(ShoppingListCheckOffService) {
    this.toBuyList = ShoppingListCheckOffService.getToBuyList();
    this.addToBought = function(index) {
      ShoppingListCheckOffService.AddToBoughtList(index)
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    this.boughtList = ShoppingListCheckOffService.getAlreadyBought()
    this.boughtListState = this.boughtList.length
  }

  function ShoppingListCheckOffService() {
    let toBuy = [
      { name: "Cookies", quantity: 10 },
      { name: "Cocacola", quantity: 3 },
      { name: "Yogurt", quantity: 6 },
      { name: "Groccery", quantity: 15 },
      { name: "Cheese", quantity: 2 }
    ];
    let alreadyBought = [];

    this.getToBuyList = function() {
      return toBuy
    }

    this.AddToBoughtList = function(index) {
      let boughtItem = toBuy.splice(index,1)
      alreadyBought.push(boughtItem)
    }
    this.getAlreadyBought = function() {
      return alreadyBought
    }
  }
})()