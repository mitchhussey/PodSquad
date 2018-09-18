

$(document).ready(function () {

  $('.modal').modal();

});

$(document).ready(function () {
  $('.datepicker').datepicker();
});

$('#note').val('New Text');
M.textareaAutoResize($('#textarea1'));

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'left',
    hoverEnabled: false
  });
});

$(document).ready(function () {
  $('.materialboxed').materialbox();
});


var e = document.getElementById("edit");
e.addEventListener("click", function(){
  document.getElementById("disabledInput").disabled = false;
  document.getElementById('update').style.visibility = 'visible';
});

var d = document.getElementById("delete");
d.addEventListener("click", function(){
  document.getElementById('note').style.visibility = 'hidden';
  M.toast({html: 'Note Deleted!', classes: 'rounded'})
});

var u = document.getElementById("update");
u.addEventListener("click", function(){
  document.getElementById("disabledInput").disabled = true;
  document.getElementById('update').style.visibility = 'hidden';
});

document.getElementById('update').style.visibility = 'hidden';
