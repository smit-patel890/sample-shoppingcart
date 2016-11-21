'use strict';

// Register `mainHeader` component, along with its associated controller and template
angular.
  module('sampleShoppingCartApp').
  component('mainHeader', {
    templateUrl: 'main-header/main-header.template.html',
    controller: ['ShoppingCart', '$rootScope', function PhoneListController(ShoppingCart, $rootScope) {
    	var self = this;
    	self.updateTotalProductsInCart = function() {
    		self.totalProductInCart = ShoppingCart.getProductsCount();
    	}
        $rootScope.$on('shoppingcartupdated', function() {
        	self.updateTotalProductsInCart();
        });
        self.updateTotalProductsInCart();
      }
    ]
  });
