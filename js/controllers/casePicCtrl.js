app.controller("casePicCtrl",["$scope","AJAX","$routeParams","$timeout","noticeInfo",function(E,D,A,F,B){var C={};E.$on("$pageNaved",(function(){var G=false;return function(){if(G){return}G=true;var H=D({url:APP_ACTION.CASEIMG+A.id,cache:true,sCall:function(K){console.log(K);if(K.status=="ok"){var J=K.result;var I=J.map(function(L){return IMAGE_ROOT+L});E.pictures=I;E.caseDescription=K.remark;F(function(){var L=new CardView("#wrapper",{effect:"slide",direction:"h"})},500)}else{B.show()}},eCall:function(){B.show()}});document.getElementById("morePic").addEventListener("touchmove",function(I){I.preventDefault()},false)}})());E.$on("$destroy",function(){C.resolve()})}]);