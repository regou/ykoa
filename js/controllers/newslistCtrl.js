app.controller("newslistCtrl",["$scope","newsList","$sessionStorage",function(C,B,A){C.loadmore={act:function(){D(C.catChosen,C.loadmore.curPage[C.catChosen]+1)},curPage:[null,0,0],isloading:false,limit:5,standbyText:"点击载入更多"};var D=function(F,E){B.query({catId:F,pageNum:E,limit:C.loadmore.limit},function(G){var H=function(M,N){var L=[];for(var I in M){if(M[I][N]){var K=M[I][N];if(("m_"+K) in L){L["m_"+K]["arr"].push(M[I])}else{L["m_"+K]={monthNote:K,arr:[M[I]]}}}}var J=[];for(g in L){J.push(L[g])}if(angular.isArray(G)&&G.length>=C.loadmore.limit){C.loadmore.curPage[F]=E;C.loadmore.isloading=false;C.loadmore.standbyText="点击载入更多"}else{C.loadmore.isloading=false;C.loadmore.standbyText="没有更多了"}return J};if(C["newsList"+F]){C["newsList"+F]=C["newsList"+F].concat(H(G,"m"))}else{C["newsList"+F]=H(G,"m")}})};C.$watch("catChosen",function(E){C.loadmore.isloading=true;C.loadmore.standbyText="载入中";D(E,C.loadmore.curPage[E]+1);A.newslistCat=E});if(A.newslistCat){C.catChosen=A.newslistCat}else{C.catChosen=1}}]);