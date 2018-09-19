$(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
    var y = document.getElementById("favorite");
    y.style.display = "none";
  });

function favorite() {
    var x = document.getElementById("notFavorite");
    var y = document.getElementById("favorite");

    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
    console.log("Favorite triggered");
};
