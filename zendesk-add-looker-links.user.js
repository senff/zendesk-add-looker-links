// ==UserScript==
// @name         Add links to Looker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds direct links to Looker
// @author       Senff
// @match        https://126740.apps.zdusercontent.com/*
// @downloadURL  https://github.com/Senff/zendesk-add-looker-links/raw/main/zendesk-add-looker-links.user.js
// @updateURL    https://github.com/Senff/zendesk-add-looker-links/raw/main/zendesk-add-looker-links.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zendesk.com
// @grant        none
// ==/UserScript==


// https://looker.a8c.com/dashboards/729?Normalized+URL=noseslap.com&Country=&Rolling+12+Month+GMV+Tier+%28USD%29=&Currency=&Cannabis=&Art%2C+music%2C+and+photography=&Education+and+learning=&Home%2C+furniture%2C+and+garden=&Food+and+drink=&Travel+and+tourism+industry=&Health+and+beauty=&Fashion%2C+apparel%2C+and+accessories=&Electronics+and+computers=&Approved+review+count=%3E0

var $ = window.jQuery;

// === Adds links  ===================================================
function addLinks() {
        $('.user__info_container .sites .site').each(function(site) {
            var siteLink = $(this).find('.site-title').attr('href');
            var siteURL = siteLink.replace('http://','');
            siteURL = siteURL.replace('https://','');
            if(!$(this).hasClass('linksadded')) {
                $(this).addClass('linksadded');
                $(this).find('.site-links').append('<li><a href="https://looker.a8c.com/dashboards/729?Normalized+URL='+siteURL+'&Country=&Rolling+12+Month+GMV+Tier+%28USD%29=&Currency=&Cannabis=&Art%2C+music%2C+and+photography=&Education+and+learning=&Home%2C+furniture%2C+and+garden=&Food+and+drink=&Travel+and+tourism+industry=&Health+and+beauty=&Fashion%2C+apparel%2C+and+accessories=&Electronics+and+computers=&Approved+review+count=%3E0" target="_blank">LOOKER</a>');
            }
        });
}

// Loop until links are added
window.setInterval(function(){
    addLinks();
}, 1000);

