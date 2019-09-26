var parentContainerTabs = document.querySelectorAll(".parentContainerTab");


(function(pcts){

  //scope de la boucle de suppression de la classe .active
  (function(){
    for (var i = 0; i < pcts.length; i++) {
      parentContainerTab = pcts[i];
      (function(pct){
        tabs = pct.querySelector(".tabs");
        console.log("Listes des tabs :" + i + " "+ tabs);
        console.log(tabs);
        (function(_tabs){
          for (var i = 0; i < _tabs.length; i++) {
            tab = _tabs[i];
          }
        })(tabs);
      })(parentContainerTab);
      // parentContainerTab.querySelector(".active").classList.remove("active");
    }
  })();

})(parentContainerTabs);
