(function (angular, _, $) {
  "use strict";

  function getComponentModels(selectedElements) {
    var result = new Array(selectedElements.length);

    _.forEach(selectedElements, function (element, index) {
      result[index] = angular.element(element).scope().component;
    });

    return result;
  }

  angular
    .module("Cerberus.TemplateEditor")
    .directive("csComponentselection", [
      "Cerberus.TemplateEngine.Service.Event",
      "Cerberus.TemplateEditor.Helper.TemplateEditor",
      function (EventService, TemplateEditorHelper) {
        return {
          restrict: "A",
          link: function (scope, element) {
            element
              .addClass("animatable")
              .parent()
              .click(function (event) {
                var elementTagName = event.target.tagName.toLowerCase();

                //Do not deselect components if the user is switching between resolutions
                if (element.hasClass("resolution")) {
                  return;
                }

                var selectedElements = $("cs-component.selected");
                if (!event.ctrlKey) {
                  selectedElements
                    .removeClass("selected")
                    .resizable("destroy")
                    .draggable("destroy");
                  selectedElements = [];
                }

                if (elementTagName === "cs-component") {
                  var isSelected = element.hasClass("selected");

                  //toggle selected class on element
                  element.toggleClass("selected", !isSelected);

                  if (!isSelected) {
                    selectedElements.push(element);
                    TemplateEditorHelper.enableDraggable(element);
                    TemplateEditorHelper.enableResizable(element);
                  }
                  else {
                    element
                      .resizable("destroy")
                      .draggable("destroy");
                  }
                }

                var selectedComponents = getComponentModels(selectedElements);
                EventService.notify("ComponentSelected", selectedComponents);
              });
          }
        };
      }]);
})(window.angular, window._, window.jQuery);