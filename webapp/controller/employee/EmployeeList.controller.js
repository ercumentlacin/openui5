sap.ui.define(
  [
    "sap/ui/demo/nav/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (BaseController, JSONModel, ResourceModel) {
    "use strict";

    return BaseController.extend(
      "sap.ui.demo.nav.controller.employee.EmployeeList",
      {
        onInit: function () {
          var oData = sap.ui.getCore().getModel().getData();
          console.log(oData);

          var model = new sap.ui.model.json.JSONModel();
          model.setData(oData);
          this.getView().setModel(model);
        },
        onListItemPressed: function (oEvent) {
          var oItem, oCtx;

          oItem = oEvent.getSource();
          oCtx = oItem.getBindingContext();

          this.getRouter().navTo("employee", {
            employeeId: oCtx.getProperty("EmployeeID"),
          });
        },
      }
    );
  }
);
