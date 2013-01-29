/*******************************************************************************
 * @license
 * Copyright (c) 2010, 2012 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 * 
 * Contributors: Marcin Radomski, Piotr Skibiak
 ******************************************************************************/

function InitGoogleAPI(){
var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var f=null,g=window,h="push",j="replace",l="length";var n=g,s=document,w=n.location,x=function(){},A=/\[native code\]/,C=function(a,b,c){return a[b]=a[b]||c},D=function(a){for(var b=0;b<this[l];b++)if(this[b]===a)return b;return-1},E=function(){var a;if((a=Object.create)&&A.test(a))a=a(f);else{a={};for(var b in a)a[b]=void 0}return a},F=C(n,"gapi",{});var G;G=C(n,"___jsl",E());C(G,"I",0);C(G,"hel",10);var H=function(){var a=w.href,b;if(G.dpo)b=G.h;else{b=G.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),e=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||e.exec(a)))try{b=decodeURIComponent(a[2])}catch(d){}}return b},J=function(a){return C(C(G,"H",E()),a,E())};var K=C(G,"perf",E()),M=C(K,"g",E()),aa=C(K,"i",E());C(K,"r",[]);E();E();var N=function(a,b,c){var e=K.r;"function"===typeof e?e(a,b,c):e[h]([a,b,c])},P=function(a,b,c){b&&0<b[l]&&(b=O(b),c&&0<c[l]&&(b+="___"+O(c)),28<b[l]&&(b=b.substr(0,28)+(b[l]-28)),c=b,b=C(aa,"_p",E()),C(b,c,E())[a]=(new Date).getTime(),N(a,"_p",c))},O=function(a){return a.join("__")[j](/\./g,"_")[j](/\-/g,"_")[j](/\,/g,"_")};var Q=E(),R=[],S;S={a:"callback",g:"sync",e:"config",c:"_c",d:"h",l:"platform",i:"jsl",TIMEOUT:"timeout",f:"ontimeout",k:"mh",j:"u"};R[h]([S.i,function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?G[b]=C(G,b,[]).concat(c):C(G,b,c)}if(b=a[S.j])a=C(G,"us",[]),a[h](b),(b=/^https:(.*)$/.exec(b))&&a[h]("http:"+b[1])}]);var T=decodeURI("%73cript");Q.m=function(a){var b=G.ms||"https://apis.google.com";a=a[0];var c;if(!(c=!a))c=0<=a.indexOf("..");if(c)throw"Bad hint";return b+"/"+a[j](/^\//,"")};
var U=function(a){return a.join(",")[j](/\./g,"_")[j](/-/g,"_")},V=function(a,b){for(var c=[],e=0;e<a[l];++e){var d=a[e];d&&0>D.call(b,d)&&c[h](d)}return c},ba=/^[\/_a-zA-Z0-9,.\-!:=]+$/,ca=/^https?:\/\/[^\/\?#]+\.google\.com(:\d+)?\/[^\?#]+$/,da=/\/cb=/g,ea=/\/\//g,X=function(a){var b=s.createElement(T);b.setAttribute("src",a);b.async="true";a=s.getElementsByTagName(T)[0];a.parentNode.insertBefore(b,a)},Z=function(a,b){var c=b||{};"function"==typeof b&&(c={},c[S.a]=b);var e=c,d=e&&e[S.c];if(d)for(var k=
0;k<R[l];k++){var m=R[k][0],p=R[k][1];p&&Object.prototype.hasOwnProperty.call(d,m)&&p(d[m],a,e)}e=a?a.split(":"):[];if(!(d=c[S.d]))if(d=H(),!d)throw"Bad hint";k=d;m=C(G,"ah",E());if(!m["::"]||!e[l])Y(e||[],c,k);else{d=[];for(p=f;p=e.shift();){var r=p.split("."),r=m[p]||m[r[1]&&"ns:"+r[0]||""]||k,v=d[l]&&d[d[l]-1]||f,y=v;if(!v||v.hint!=r)y={hint:r,b:[]},d[h](y);y.b[h](p)}var B=d[l];if(1<B){var z=c[S.a];z&&(c[S.a]=function(){0==--B&&z()})}for(;e=d.shift();)Y(e.b,c,e.hint)}},Y=function(a,b,c){var e=
a.sort();a=[];for(var d=void 0,k=0;k<e[l];k++){var m=e[k];m!=d&&a[h](m);d=m}a=a||[];var p=b[S.a],r=b[S.e],d=b[S.TIMEOUT],v=b[S.f],y=f,B=!1;if(d&&!v||!d&&v)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var e=C(J(c),"r",[]).sort(),z=C(J(c),"L",[]).sort(),I=[].concat(e),W=function(a,b){if(B)return 0;n.clearTimeout(y);z[h].apply(z,q);var d=((F||{}).config||{}).update;d?d(r):r&&C(G,"cu",[])[h](r);if(b){P("me0",a,I);try{$(function(){var a;a=c===H()?C(F,"_",E()):E();
a=C(J(c),"_",a);b(a)})}finally{P("me1",a,I)}}p&&p();return 1};0<d&&(y=n.setTimeout(function(){B=!0;v()},d));var q=V(a,z);if(q[l]){var q=V(a,e),t=C(G,"CP",[]),u=t[l];t[u]=function(a){if(!a)return 0;P("ml1",q,I);var b=function(){t[u]=f;return W(q,a)};if(0<u&&t[u-1])t[u]=b;else for(b();(b=t[++u])&&b(););};if(q[l]){var L="loaded_"+G.I++;F[L]=function(a){t[u](a);F[L]=f};a=c.split(";");a=(d=Q[a.shift()])&&d(a);if(!a)throw"Bad hint:"+c;d=a=a[j]("__features__",U(q))[j](/\/$/,"")+(e[l]?"/ed=1/exm="+U(e):"")+
("/cb=gapi."+L);k=d.match(ea);m=d.match(da);if(!m||!(1===m[l]&&ca.test(d)&&ba.test(d)&&k&&1===k[l]))throw"Bad URL "+a;e[h].apply(e,q);P("ml0",q,I);b[S.g]||n.___gapisync?(b=a,"loading"!=s.readyState?X(b):s.write("<"+T+' src="'+encodeURI(b)+'"></'+T+">")):X(a)}else t[u](x)}else W(q)};var $=function(a){if(G.hee&&0<G.hel)try{return a()}catch(b){G.hel--,Z("debug_error",function(){g.___jsl.hefn(b)})}else return a()};F.load=function(a,b){return $(function(){return Z(a,b)})};M.bs0=g.gapi._bs||(new Date).getTime();N("bs0");M.bs1=(new Date).getTime();N("bs1");delete g.gapi._bs;})();
gapi.load("client",{callback:window["OnLoadCallback"],_c:{"jsl":{"ci":{"services":{},"lexps":[17,69,71,80,82,61,74,75,30,45],"inline":{"css":1},"report":{},"oauth-flow":{},"isPlusUser":true,"iframes":{"additnow":{"url":"https://apis.google.com/additnow/additnow.html?bsv\u003dm\u0026abtk\u003dAEIZW7S0fb/iPYF36zgCo%2BTRpcaPqKZK31mNYGmRK9LdVqtoXCQn6z6zROQO2gnlYGSHiwbeSM/OFq6LPDUC477cSnK5NlT3vQqWFmfkntINFZGv4XRx62U%3D"},"plus":{"methods":["onauth","oninvitewidgetclick"],"url":":socialhost:/u/:session_index:/_/pages/badge?bsv\u003dm\u0026abtk\u003dAEIZW7Sv3VLfe04y%2BXpMoeWmSUQzSHkM383/w/vjP7%2BqHB3fdOeEHq1kniVb5SeH3fsAar/qaRAitmxcwKVrpU3tgZ5dyOSa8jnjbGWbDho20trO74iAZ3Y%3D"},":socialhost:":"https://plusone.google.com","plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/plus/circle?bsv\u003dm\u0026abtk\u003dAEIZW7SUNVqpCwy957RxWrcgObf1KELgL2rGnw1R5d4SUJpIjZ1P7Hfndlrn%2B/yAyrCX5qNXZKzU%2B2WG0YnziHG8N3jZ26lh%2Bpv8jJU2HnuC6j7picgJPMI%3D"},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?bsv\u003dm\u0026abtk\u003dAEIZW7SkwsAn79AR%2BPe9IJoYWzeFdnyCZcbrik2UCpVzl6bbbdWgmO0zGmXduIN81sTwgBjbhKY8ic5MEzp/rlTz6CqkTbv7nifGAiMT2hU/O0POOhVWRCc%3D"},":signuphost:":"https://plus.google.com","plusone":{"preloadUrl":["https://ssl.gstatic.com/s2/oz/images/stars/po/Publisher/sprite4-a67f741843ffc4220554c34bd01bb0bb.png"],"params":{"count":"","size":"","url":""},"url":":socialhost:/:session_prefix:_/+1/fastbutton?bsv\u003dm\u0026abtk\u003dAEIZW7QAcx21iBNTe7bNed%2Bgeq7TtKs41pPqsEkojyfKej1nHg/Wqd5swzY%2Bxh0GTWj/PSXMwgvz78uitFnwcPQoqsX5tTnhQU5i5PV18YjRzYcQJY%2Bh7rA%3D"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/+1/sharebutton?plusShare\u003dtrue\u0026bsv\u003dm\u0026abtk\u003dAEIZW7TU2QeM/773FvMkqqPJKpGd9lYOHU3DNhzeJ9iUqLv5I5OrfpOdbFNDPu3x4bgI/7kKyY2OAfObcxAioEM6gYufdVZENFieCSxpqcokVxr%2B/RXfPoI%3D"}},"debug":{"host":"https://plusone.google.com","reportExceptionRate":0.05,"rethrowException":true},"csi":{"rate":0.0},"googleapis.config":{"mobilesignupurl":"https://m.google.com/app/plus/oob?"}},"h":"m;/_/apps-static/_/js/gapi/__features__/rt\u003dj/ver\u003d9nCH3HI5kmQ.pl./sv\u003d1/am\u003d!EsUnt3hT0SSIO7F7ug/d\u003d1/rs\u003dAItRSTN3FA8b3ANKcrYC7FM806Xnz8mJgQ","u":"https://apis.google.com/js/client.js?onload\u003dOnLoadCallback","hee":true,"fp":"5eaf1de4b831b76199971e3e926d9bf7231324c3","dpo":false},"fp":"5eaf1de4b831b76199971e3e926d9bf7231324c3","annotation":[]}});

gapi.auth.init(function() {
                        window.gdrive._checkAuth(function() {
                            gapi.client.load("drive", "v2", function() {
                                gapi.client.setApiKey("AIzaSyBIzfPxdLn85wuMX4yChLOwuZetOi2KXnE");

    /*
                                var a = new GoogleDriveFS();
                                a.fetchChildren(function(children) {
                                    console.log("children " + children);
                                });
    */
                            });
                        });
                    });
}


            (function(){


//

//



                /**
                 *  Main plugin class
                 */
                GoogleDriveFS = (function() {
                    function GoogleDriveFSImpl() {
                        this.clientId = "511675120380.apps.googleusercontent.com";
                        this.scopes = [ "https://www.googleapis.com/auth/drive.file" ];

                        this.rootFolder = "gdrive:/";
                    
                        /**
                         *  Tries to authorise user with oAuth
                         *  @param callback Function to call on success
                         */
                        this._checkAuth = function(callback) {
                            gapi.auth.authorize({
                                "client_id": this.clientId,
                                "scope": this.scopes.join(" "),
                                "immediate": true
                            }, function(authResult) {
                                window.gdrive._onAuthResult(authResult, callback);
                            });
                        };

                        /**
                         *  TODO find a way to open a popup
                         *  Callback called after authorization attempt
                         *  @param authResult Auth attempt result
                         *  @param callback Function to call on successful auth
                         */
                        this._onAuthResult = function(authResult, callback) {
                            console.log("_onAuthResult: " + authResult + ";" + callback);

                            if (authResult) {
                                // success
                                console.log("authResult: " + authResult);
                            } else {
                                // retry
                                console.log("retrying authorize with immediate = off, clientId = " + window.gdrive.clientId + ", scope = " + window.gdrive.scopes.join(" "));

                                gapi.auth.authorize({
                                    "client_id": gdrive.clientId,
                                    "scope": gdrive.scopes.join(" "),
                                    "immediate": false
                                }, function(authResult) {
                                    console.log("authResult next time: " + authResult);
                                    gdrive._onAuthResult(authResult, callback);
                                });
                                console.log("auth sent");
                            }

                            if (callback !== undefined)
                                callback();
                        };

                        /**
                         *  TODO: stub
                         *  Gets file list from GDrive
                         *  @param id File ID
                         *  @param callback Function to call after obtaining the file list. Should take one param, result.
                         *  @returns TODO
                         */
                        this._getFileList = function(id, callback) {
                            if (id === undefined || id === null)
                                id = "root";

                            var retrievePageOfChildren = function(request, result, callback) {
                                request.execute(function(resp) {
                                    result = result.concat(resp.items);
                                    var nextPageToken = resp.nextPageToken;
                                    if (nextPageToken) {
                                        gapi.client.drive.children.list({
                                            "folderId": id,
                                            "pageToken": nextPageToken
                                        });

                                        retrievePageOfChildren(request, result);
                                    } else if (resp.error !== undefined) {
                                        console.log("error: " + resp.message);
                                    } else {
                                        console.log("loaded: " + result);
                                        if (callback !== undefined)
                                            callback(result);
                                    }
                               });
                            }

                            window.gdrive.ret = [];
                            this._checkAuth(function() {
                                var initialRequest = gapi.client.drive.children.list({
                                    "folderId": id
                                });

                                retrievePageOfChildren(initialRequest, window.gdrive.ret, callback);
                            });
                        };

                        /**
                         *  TODO: stub
                         *  Reads folder content from GDrive
                         *  @param location File path
                         *  @param callback TODO: Function to call on successful read?
                         *  @returns TODO: Promise containing the file list?
                         */
                        this.fetchChildren = function(location, callback) {
                            console.log("fetchChildren[]");
                            //this._getFileList(callback);

                            return (new dojo.Deferred())
                                .resolve([]);/*
                                    { Name: "a", Directory: "false", Location: this.rootFolder },
                                    { Name: "b", Directory: "false", Location: this.rootFolder }
                                ]);*/

                            /// TODO 
                            var request = gapi.client.drive.children.list({
                                "folderId": location
                            });

                            var result = [];

                            request.execute(function(response) {
                                result = result.concat(resp.items);
                                console.log("fetched: " + result);
                                //alert(result);
                            });
                        };

                        /**
                         *  TODO: stub
                         *  Creates a new workspace.
                         *  @returns TODO
                         */
                        this.createWorkspace = function(name) {
                            console.log("createWorkspace");
                            return (new dojo.Deferred()).resolve({
                                Children: []
                            });
                        };

                        /**
                         *  TODO: stub
                         *  Loads workspaces.
                         *  @returns TODO
                         */
                        this.loadWorkspaces = function() {
                            console.log("loadWorkspaces");
                            return this.loadWorkspace();
                        };

                        /**
                         *  TODO: stub
                         *  Loads workspace from specified location.
                         *  @param location Workspace location
                         *  @returns TODO
                         */
                        this.loadWorkspace = function(location) {
                            console.log("loadWorkspace");
                            //alert(this._getFileList());

                            var d = new dojo.Deferred();
                            d.resolve({});
/*                                
                                // TODO: temporary data
                                      ChildrenLocation: this.rootFolder,
                                      Directory: true,
                                      LocalTimeStamp: 1350741068000,
                                      Location: this.rootFolder,
                                      Name: "bleee"
                            });
*/
                            return d;

                                // TODO: temporary data

                                /*return {
                                    Name: "root",
                                    Directory: "true",
                                    Location: "/",
                                    Children: [
                                        { Name: "a", Directory: "false", Location: "/" },
                                        { Name: "b", Directory: "false", Location: "/" }
                                    ],
                                    Parents: []
                                };*/
                        };

                        /**
                         *  TODO: stub
                         *  Creates a new project.
                         *  @param url TODO
                         *  @param projectName TODO
                         *  @param serverPath TODO
                         *  @param create TODO
                         *  @returns TODO
                         */
                        this.createProject = function(url, projectName, serverPath, create) {
                            console.log("createProject");
                            return (new dojo.Deferred()).then(function() {
                                return {};
                            });
                        };

                        /**
                         *  TODO: stub
                         *  Creates a new folder.
                         *  @param parentLocation TODO
                         *  @param folderName TODO
                         *  @returns TODO
                         */
                        this.createFolder = function(parentLocation, folderName) {
                            console.log("createFolder");
                            return (new dojo.Deferred()).then(function() {
                                return {};
                            });
                        };

                        /**
                         *  TODO: stub
                         *  Creates a new file.
                         *  @param parentLocation TODO
                         *  @param fileName TODO
                         */
                        this.createFile = function(parentLocation, fileName) {
                            console.log("createFile");
                            return (new dojo.Deferred()).then(function() {
                                return {};
                            });
                        };

                        /**
                         *  TODO: stub
                         *  @param location TODO
                         *  @returns TODO
                         */
                        this.deleteFile = function(location) {
                            console.log("deleteFile");
                        };

                        /**
                         *  TODO: stub
                         *  @param sourceLocation TODO
                         *  @param targetLocation TODO
                         *  @param name TODO
                         *  @returns TODO
                         */
                        this.moveFile = function(sourceLocation, targetLocation, name) {
                            console.log("moveFile");
                        };

                        /**
                         *  TODO: stub
                         *  @param sourceLocation TODO
                         *  @param targetLocation TODO
                         *  @param name TODO
                         *  @returns TODO
                         */
                        this.copyFile = function(sourceLocation, targetLocation, name) {
                            console.log("copyFile");
                        };

                        /**
                         *  TODO: stub
                         *  @param location TODO
                     *  @param isMetadata TODO
                     *  @returns TODO
                     */
                    this.read = function(location, isMetadata) {
                            console.log("read");
                            var d = new dojo.Deferred();

                            if (isMetadata) {
                                d.resolve( {
                                    Name: "test",
                                    Directory: "false",
                                    Location: "gdrive://"
                                });
                            } else {
                                d.resolve("read");
                            }
                            return d;
                        };

                        /**
                         *  TODO: stub
                         *  @param location TODO
                         *  @param contents TODO
                         *  @param args TODO
                         *  @returns TODO
                         */
                        this.write = function(location, contents, args) {
                            console.log("write");
                        };

                        /**
                         *  TODO: stub
                         *  @param targetLocation TODO
                         *  @param options TODO
                         *  @returns TODO
                         */
                        this.remoteImport = function(targetLocation, options) {
                            console.log("remoteImport");
                        };

                        /**
                         *  TODO: stub
                         *  @param sourceLocation TODO
                         *  @param options TODO
                         *  @returns TODO
                         */
                        this.remoteExport = function(sourceLocation, options) {
                            console.log("remoteExport");
                        };

                        /**
                         *  TODO: stub
                         *  @param location TODO
                         *  @param query TODO
                         *  @returns TODO
                         */
                        this.search = function(location, query) {
                            console.log("search");
                            return (new dojo.Deferred()).then(function() {
                                return [];
                            });
                        };
                    };

                    return GoogleDriveFSImpl;
                }());

                /**
                 *  Function called(?) on Google's client.js load
                 */
                function OnLoadCallback() {
                    console.log("client.js loaded");
                }


        })();

