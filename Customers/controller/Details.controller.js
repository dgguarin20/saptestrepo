sap.ui.define([
"sap/ui/core/mvc/Controller"
], function (Controller) {
"use strict";
return Controller.extend("gbi.controller.Details", {
onInit: function() {
this.router = sap.ui.core.UIComponent.getRouterFor(this);
this.router.attachRoutePatternMatched(this.onRouteMatched, this);
},
onRouteMatched : function(oEvent) {
var oParameters = oEvent.getParameters();
this.getView().bindElement("gbi>/Customers('" +
oParameters.arguments.entity + "')");
}
});
});