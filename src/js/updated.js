/* global chrome, XMLHttpRequest */
(function () {
    'use strict';

    var gsUtils = chrome.extension.getBackgroundPage().gsUtils;

    gsUtils.documentReadyAndLocalisedAsPromsied(document).then(function () {

        var versionEl = document.getElementById('updatedVersion');
        versionEl.innerHTML = 'v' + chrome.runtime.getManifest().version;
    });
}());
