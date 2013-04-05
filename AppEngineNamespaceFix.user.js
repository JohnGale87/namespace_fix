// ==UserScript==
// @name        AppEngineNamespaceFix
// @description Userscript fix for AppEngine Namespace Bug. http://code.google.com/p/googleappengine/issues/detail?id=8164
// @namespace   http://127.0.0.1
// @version     5
// @include     http://www.appengine.google.com/*
// @include     https://www.appengine.google.com/*
// @include     http://appengine.google.com/*
// @include     https://appengine.google.com/*
// @match       http://www.appengine.google.com/*
// @match       https://www.appengine.google.com/*
// @match       http://appengine.google.com/*
// @match       https://appengine.google.com/*
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_deleteValue
// @grant       GM_listValues
// ==/UserScript==
if (!this.GM_getValue || (this.GM_getValue.toString && this.GM_getValue.toString().indexOf("not supported")>-1)) {
  this.GM_getValue=function (key,def) { return localStorage[key] || def; };
  this.GM_setValue=function (key,value) { return localStorage[key]=value; };
  this.GM_deleteValue=function (key) { return delete localStorage[key]; };
  this.GM_listValues=function () { return localStorage; };
};

var url = window.location.href;
var namespace_set = (GM_getValue("appEngine_NamespaceSet", 0) > 0);
if (url.indexOf('datastore/explorer') > -1 || url.indexOf('datastore/edit') > -1){
	var namespace = GM_getValue("appEngine_Namespace");
	if (url.indexOf('&namespace=') < 0){
		if (!namespace_set) namespace = prompt("Enter namespace...", "-global-");
		if (namespace != null){
			GM_setValue("appEngine_Namespace", namespace);
			GM_setValue("appEngine_NamespaceSet", 1);
			if (namespace != null && namespace != ""){
				window.location.href = url + '&namespace=' + namespace;
			}
		} else {
			GM_setValue("appEngine_NamespaceSet", 1);
		}
	}
} else {
	if (namespace_set){
		GM_setValue("appEngine_NamespaceSet", 0);
		GM_deleteValue("appEngine_Namespace");
		alert('AppEngineNamespaceFix: Namespace cleared.');
	}
}