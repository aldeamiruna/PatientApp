sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ui/model/json/JSONModel'
	
], function (Controller,JSONModel) {
	"use strict";
	var Editable=true;

	return Controller.extend("com.cerner.miruna.PatientApp.controller.View1", {
		onInit: function () {
			
			// var oModel = new sap.ui.model.json.JSONModel();

			// this.getView().setModel(models.createUserModel(), "list");
            var oData={
				"Patients":[
					{
			
						"name": "Aldea Miruna",
						"age": 21,
						"gender": "F",
						"city": "Brasov",
						
					},
					{
			
						"name": "Tazlaoanu Sandra",
						"age": 21,
						"gender": "F",
						"city": "Bucuresti",
					
					},
					{
			
						"name": "Balau Andrei",
						"age": 25,
						"gender": "M",
						"city": "Cluj",
					
					},
					{
			
						"name": "Dordea Dragos",
						"age": 20,
						"gender": "M",
						"city": "Sibiu",
					
					},
					{
			
						"name": "Iacob Stefan",
						"age": 28,
						"gender": "M",
						"city": "Brasov",
					
					},
					{
			
						"name": "Aldea Andra",
						"age": 22,
						"gender": "F",
						"city": "Timisoara",
					
					},
					{
			
						"name": "Cardos Flaviu",
						"age": 30,
						"gender": "M",
						"city": "Brasov",
					
					},
					{
			
						"name": "Popescu Ioan",
						"age": 40,
						"gender": "M",
						"city": "Iasi",
					
					}
			
				],
				"Gender":[
					{
						"gender": "M"
					},
					{
						"gender": "F"
					}
				],
				"City":[
					{
						"city": "Brasov"
					},
					{
						"city": "Bucuresti"
					},
					{
						"city": "Cluj"
					},
					{
						"city": "Sibiu"
					},
					{
						"city": "Timisoara"
					},
					{
						"city": "Iasi"
					}
				],
				"Editable": true
			};

			var oModel=new JSONModel(oData);
			this.getView().setModel(oModel);

     
		},

	
		toggleEditable: function () {
			debugger;
			let oModel = this.getView().getModel();
		    let oData = oModel.getData();
			// console.log(this.getView().getModel("list").getData().Editable);
			oData.Editable = !oData.Editable;
			oModel.setData(oData);
		},

		onSave: function(){


		},

		onCancel: function () {
	
			this.byId("openDialog").close();
		
		}
	});


});