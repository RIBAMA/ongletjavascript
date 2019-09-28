var parentContainerTabs = document.querySelectorAll(".parentContainerTab");


(function(pcts){

  //scope de la boucle de suppression de la classe .active
  (function(){
    for (var i = 0; i < pcts.length; i++) {
      parentContainerTab = pcts[i];
      console.log("Listes des parents containers :" + i + " "+ parentContainerTab);
      console.log(parentContainerTab);
      (function(pct){
        var tabs = pct.querySelector(".tabs");
        var containtTabs = pct.querySelectorAll(".containtTab");



        var containtTabsArchives = [];
        containtTabsArchives.length = containtTabs.length;
        for (var x = 0; x < containtTabs.length; x++) {
          containtTabsArchives[x] = containtTabs[x];

          var activeAnchor = tabs.querySelector(".active");
          idActiveContaint = activeAnchor.href.split("#")[1];
          if(containtTabsArchives[x].id != idActiveContaint){
            containtTabs[x].parentNode.removeChild(containtTabs[x])
          }




          console.log("La listes des containtTabs :" + i + " "+ containtTabs);
          console.log(containtTabs);
          console.log("La listes des containtTabsArchives :" + i + " "+ containtTabsArchives);
          console.log(containtTabsArchives);
          console.log("Listes des tabs :" + i + " "+ tabs);
          console.log(tabs);
          // (function(_tabs, _containtTabs, _containtTabsArchives){
          //   for (var y = 0; y < _containtTabsArchives.length; y++) {
          //     var activeAnchor = tabs.querySelector(".active");
          //     var idContaint = activeAnchor.href.split("#")[1];
          //     console.log("id reference: " + idContaint + " ancre num: " + y + " => " + activeAnchor);
          //     console.log(activeAnchor);
          //     if(_containtTabsArchives[y] != undefined){
          //       if(_containtTabsArchives[y].id = idContaint){
          //         console.log("containtTabsArchives num: " + y + " => " + _containtTabsArchives[y]);
          //         console.log(_containtTabsArchives[y]);
          //         pct.appendChild(_containtTabsArchives[y]);
          //       }
          //     }
          //   }
          // })(tabs, containtTabs, containtTabsArchives);
          (function(_tabs, _containtTabs, _containtTabsArchives){
            var anchors = tabs.querySelectorAll("a");
            for (var i = 0; i < anchors.length; i++) {
              var anchor = anchors[i];
              console.log("Listes des anchres :" + i + " "+ anchor);
              console.log(anchor);
  	    			(function(_anchor){
  							console.log("--------*******_containtTabsArchives*******--------*");
  							console.log(_containtTabsArchives);
  							// for (var y = 0; y < _containtTabsArchives.length; y++) {
  							// 	var activeAnchor = tabs.querySelector(".active");
  							// 	var idContaint = activeAnchor.href.split("#")[1];
  							// 	console.log("id reference: " + idContaint + " ancre num: " + y + " => " + activeAnchor);
  							// 	console.log(activeAnchor);
  							// 	if(_containtTabsArchives[y] != undefined){
                //     if(_containtTabsArchives[y].id = idContaint){
    						// 			console.log("containtTabsArchives num: " + y + " => " + _containtTabsArchives[y]);
    						// 			console.log(_containtTabsArchives[y]);
                //       pct.appendChild(_containtTabsArchives[y]);
                //     }
                //   }
  							// }



                _anchor.addEventListener("click", function(){
                  as = _anchor.parentNode.querySelectorAll("a");
                  for (var i = 0; i < as.length; i++) {
                    a = as[i]
                    console.log("L'ancre actuelle: anchor: " + _anchor);
                    console.log(_anchor);
                    console.log("L'ancre actuelle: a: " + a);
                    console.log(a);
                    if(a.classList.contains("active") && a != _anchor){
                      a.classList.remove("active");
                      _anchor.classList.add("active");
                      var idOldContaint = a.href.split("#")[1];
                      var idNewContaint = _anchor.href.split("#")[1];
                      (function(){
                        for (var i = 0; i < _containtTabsArchives.length; i++) {
                          if (_containtTabsArchives[i].id === idNewContaint) {
                            pct.removeChild(document.querySelector("#"+idOldContaint));
                            pct.appendChild(_containtTabsArchives[i]);
                          }
                        }
                      })();
                    }
                  }
                });
              })(anchor);
            }
          })(tabs, containtTabs, containtTabsArchives);
        }


      })(parentContainerTab);
      // parentContainerTab.querySelector(".active").classList.remove("active");
    }
  })();

})(parentContainerTabs);
