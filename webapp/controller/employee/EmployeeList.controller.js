sap.ui.define(
  [
    "sap/ui/demo/nav/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (BaseController, JSONModel, ResourceModel) {
    "use strict";

    console.log(window.location.hash);

    return BaseController.extend(
      "sap.ui.demo.nav.controller.employee.EmployeeList",
      {
        // get data
        getData: function () {
          var oData = sap.ui.getCore().getModel().getData();
          console.log(oData);

          var model = new sap.ui.model.json.JSONModel();
          model.setData(oData);
          this.getView().setModel(model);
        },

        // initalize
        onInit: function () {
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter
            .getRoute("employeeList")
            .attachMatched(this._onObjectMatched, this);
        },

        // helper function for routing && get data
        _onObjectMatched: function (oEvent) {
          this.getView().bindElement({
            path: "/" + oEvent.getParameter("arguments").invoicePath,
            model: "invoice",
          });
          this.getData();
        },

        onExit: function (oEvent) {
          alert("test");
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
