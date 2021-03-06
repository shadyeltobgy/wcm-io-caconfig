/*
 * #%L
 * wcm.io
 * %%
 * Copyright (C) 2016 wcm.io
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */
(function (angular) {
  "use strict";

  angular.module("io.wcm.caconfig.modals", [
    "io.wcm.caconfig.templates",
    "io.wcm.caconfig.utilities",
    "textAngular"
  ])
  .config(['$provide', function ($provide) {
    $provide.decorator('taOptions', ['$delegate', function (taOptions) {
      taOptions.toolbar = [
        ['h1', 'h2', 'h3', 'h4', 'p', 'pre', 'quote'],
        ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
        ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],
        ['html','insertLink', 'wordcount', 'charcount']
      ];
      return taOptions;
    }]);

  }])
  .run(initRun);

  initRun.$inject = ["$rootScope"];

  function initRun($rootScope) {
    $rootScope.modalTemplates = {
      addCollectionItem: "addCollectionItemModal.html",
      addConfig: "addConfigModal.html",
      deleteConfig: "deleteConfigModal.html",
      error: "errorModal.html",
      saveConfig: "saveConfigModal.html",
      editor: "editorModal.html"
    };
  }

}(angular));
