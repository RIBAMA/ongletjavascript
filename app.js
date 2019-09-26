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
        console.log("Listes des tabs :" + i + " "+ tabs);
        console.log(tabs);
        (function(_tabs){
          var anchors = tabs.querySelectorAll("a");
          for (var i = 0; i < anchors.length; i++) {
            var anchor = anchors[i];
            console.log("Listes des anchres :" + i + " "+ anchor);
            console.log(anchor);
            anchor.
          }
        })(tabs);
      })(parentContainerTab);
      // parentContainerTab.querySelector(".active").classList.remove("active");
    }
  })();

})(parentContainerTabs);
