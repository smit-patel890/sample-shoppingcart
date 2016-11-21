'use strict';

angular.
  module('common.shoppingCart').
  factory('ShoppingCart', function() {
      return {
        //Private Property to hold products that user adds in cart
      	_selectedProducts: [],

      	addProduct: function(product) {
      		this._selectedProducts.push({
      			id: product.id,
      			name: product.name,
      			qty: 1,
      			price: product.price,
      			imageUrl: product.imageUrl
      		});
      	},

      	removeProduct: function(product) {
  			   this._selectedProducts.splice(this._selectedProducts.map(function(product) { return product.id; }).indexOf(product.id), 1);
      	},

      	getProducts: function() {
  			   return this._selectedProducts;
      	},

      	getProductsCount: function() {
      		return this._selectedProducts.length;
      	},

        //TODO Move this method to some Utility service in future
      	updateProductStatusInList: function(products) {
      		var productToUpdateIndex,
      			productToUpdate;
      		if(!Array.isArray(products)) {
      			products = [products];
      		}
      		var idArray = products.map(function(product) {
      			return product.id;
      		});
      		this._selectedProducts.forEach(function(product) {
      			productToUpdateIndex = idArray.indexOf(product.id);
      			if(productToUpdateIndex !== -1) {
      				productToUpdate = products.slice(productToUpdateIndex, productToUpdateIndex + 1)[0];
      				productToUpdate.added = true;
      			}
      		})
      	}
      };
  });
