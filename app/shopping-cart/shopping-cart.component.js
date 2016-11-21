'use strict';

// Register `shoppingCart` component, along with its associated controller and template
angular.
  module('shoppingCart').
  component('shoppingCart', {
    templateUrl: 'shopping-cart/shopping-cart.template.html',
    controller: ['ShoppingCart', '$rootScope', function ShoppingCartController(ShoppingCart, $rootScope) {
        this.selectedProducts = ShoppingCart.getProducts();
        this.updateTotalAmount = function() {
        	this.totalAmount = this.selectedProducts.reduce(function (a,b) { return a + (b.price * b.qty); }, 0);
        }
        this.updateTotalAmount();
        this.removeItem = function(item) {
        	ShoppingCart.removeProduct(item);
        	this.updateTotalAmount();
          $rootScope.$emit('shoppingcartupdated');
        }
      }
    ]
  });
