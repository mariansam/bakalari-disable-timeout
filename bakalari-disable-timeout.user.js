// ==UserScript==
// @name         Bakaláři - Disable Timeout
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Disable the auto-logoff "feature" of Bakaláři
// @author       Marian Šámal
// @include      /^https?:\/\/.*baka.*$/
// @exclude      https://github.com/*
// @grant        none
// @homepage     https://github.com/mariansam/bakalari-disable-timeout
// @updateURL    https://raw.githubusercontent.com/mariansam/bakalari-disable-timeout/master/bakalari-disable-timeout.user.js
// @downloadURL  https://raw.githubusercontent.com/mariansam/bakalari-disable-timeout/master/bakalari-disable-timeout.user.js
// @supportURL   https://github.com/mariansam/bakalari-disable-timeout/issues
// @icon         https://avatars0.githubusercontent.com/u/44744799?s=32&v=4
// @icon64       https://avatars0.githubusercontent.com/u/44744799?s=64&v=4
// ==/UserScript==

(function() {
    'use strict';

    console.log('bakalari-disable-timeout: started');

    var bakalariAppRoot = (window.appRoot !== undefined ? window.appRoot : unsafeWindow.appRoot);
    var sessionExtendUrl = window.location.protocol + '//' + window.location.host + bakalariAppRoot + 'sessionextend';

    if (typeof bakalariAppRoot === 'string') {
        setInterval(() => {
            fetch(sessionExtendUrl)
                .then(() => console.log('bakalari-disable-timeout: session extended'))
                .catch(error => {
                    console.error('bakalari-disable-timeout: an error happened while extending the session');
                    console.error(error);
                });
        }, 30000);
    }
})();
