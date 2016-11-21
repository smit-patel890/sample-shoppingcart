'use strict';

// Register `productDetail` component, along with its associated controller and template
angular.
  module('productDetail').
  component('productDetail', {
    templateUrl: 'product-detail/product-detail.template.html',
    controller: ['$http', '$routeParams', 'ShoppingCart', '$rootScope',
      function PhoneDetailController($http, $routeParams, ShoppingCart, $rootScope) {
        var self = this;

        $http.get('products/' + $routeParams.productId + '.json').then(function(response) {
          ShoppingCart.updateProductStatusInList(response.data);
          self.product = response.data;
        });

        self.updateShoppingCart = function(product) {
          product.added = !product.added;
          ShoppingCart[product.added ? 'addProduct' : 'removeProduct'](product);
          $rootScope.$emit('shoppingcartupdated');
        }
      }
    ]
  });
