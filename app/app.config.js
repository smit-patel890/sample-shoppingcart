'use strict';

angular.
  module('sampleShoppingCartApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/products', {
          template: '<product-list></product-list>'
        }).
        when('/products/:productId', {
          template: '<product-detail></product-detail>'
        }).
        when('/shoppingcart', {
          template: '<shopping-cart></shopping-cart>'
        }).
        when('/checkout', {
          template: '<h2 class="text-success">Thank you for shopping with us!</h2>'
        }).
        otherwise('/products');
    }
  ]);
