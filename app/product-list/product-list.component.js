'use strict';

// Register `productList` component, along with its associated controller and template
angular.
  module('productList').
  component('productList', {
    templateUrl: 'product-list/product-list.template.html',
    controller: ['$http', 'ShoppingCart', '$rootScope', function PhoneListController($http, ShoppingCart, $rootScope) {
        var self = this;

        $http.get('products/products.json').then(function(response) {
          ShoppingCart.updateProductStatusInList(response.data);
          self.products = response.data;
        });

        self.updateShoppingCart = function(product) {
          product.added = !product.added;
          ShoppingCart[product.added ? 'addProduct' : 'removeProduct'](product);
          $rootScope.$emit('shoppingcartupdated');
        }
      }
    ]
  });
