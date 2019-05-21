sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";
   return Controller.extend("gbi.controller.Detail", {
      
       onInit: function() {

		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this.onRouteMatched, this);
	
	},

	onRouteMatched : function(oEvent) {	
		var oParameters = oEvent.getParameters();

		var oView = this.getView();

		// When navigating in the Detail page, update the binding context 
		if (oParameters.name !== "Detail") { 
			return;
		}

		var sEntityPath = "/Products('" + oParameters.arguments.entity + "')";
	              var oModel = oView.getModel('gbi');
		var context = new sap.ui.model.Context(oModel , sEntityPath);
		
		oView.setBindingContext(context,'gbi');

	}

   });
});
