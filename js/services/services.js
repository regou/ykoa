app.factory("AJAX",["$http","$q",function(C,A){var B=function(E){var D=A.defer();var F=E.method||"GET";if(typeof(E.bCall)=="function"){E.bCall()}var G={cache:E.cache||false};G.url=E.url;G.method=F;if(F=="GET"){G.params=E.p||{}}else{G.data=E.p||null}G.timeout=E.timeout||D.promise||15000;C(G).success(function(K,J,H,I){if(typeof(E.sCall)=="function"){E.sCall(K,J,H,I)}if(typeof(E.cCall)=="function"){E.cCall(K,J,H,I)}}).error(function(K,J,H,I){if(typeof(E.eCall)=="function"){E.eCall(K,J,H,I)}if(typeof(E.cCall)=="function"){E.cCall(K,J,H,I)}});return D};return B}]);app.factory("newsList",["$resource",function(A){var B=A(APP_ACTION["NEWSLIST"]+":catId/:pageNum/:limit",{catId:1,pageNum:1,limit:6});return B}]);app.factory("headerChanger",["$rootScope",function(A){return{send:function(B){A.$broadcast("$headerChangeEvt",B)}}}]);app.factory("noticeInfo",["$rootScope","$timeout",function(A,B){return{show:function(D){var C={message:"网络异常，请稍后重试",hideDelay:"2000"};if(D&&angular.isObject(D)){angular.extend(C,D)}A.message=C.message;A.showNoticeInfo=true;B(function(){A.showNoticeInfo=false},C.hideDelay)}}}]);