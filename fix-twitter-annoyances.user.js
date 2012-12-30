// ==UserScript==
// @name       Fix Twitter annoyances
// @namespace  http://neilk.net/
// @version    0.2
// @description  remove trending topics, who to follow, anything promoted
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @include      http://twitter.com/
// @include      http://twitter.com/*
// @include      https://twitter.com/*
// @include      http://*.twitter.com/*
// @include      https://*.twitter.com/*
// @copyright  2012+, Neil Kandalgaonkar
// ==/UserScript==
$('.topics, .trends, .wtf-module, .promoted-tweet, .promoted-account, .promoted-trend').hide();
// update profile spam. We hide it this way because we don't want to get rid of all prompts
$('.update_profile_header_photo').parents('.promptbird').hide();
