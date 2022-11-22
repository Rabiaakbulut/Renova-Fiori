sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(Controller,JSONModel) {
	"use strict";

	return Controller.extend("crudodata.controller.AllData", {
        onInit : function () { 
            var oModel = new JSONModel();
            this.getView().setModel(oModel,"AllDataModel");
        },
        onAfterRendering: function(){
            this.getView().getModel().read("/EmployeeSet",{
                async: true,
                urlParameters: {
                    "$expand": "EmployeeToProject"
                },
                success: function (oData){
                    var aData = oData.results;
                    var oModel = new JSONModel(aData);
                    this.getView().setModel(oModel,"AllDataModel")
                }.bind(this),
                error: function(){}
            });
        }
	});
});
