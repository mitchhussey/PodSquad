

$(document).ready(function () {

  $('.modal').modal();

});

$(document).ready(function () {
  $('.datepicker').datepicker();
});

$('#note').val('New Text');
M.textareaAutoResize($('#textarea1'));

$('#disabledInpute').val('New Text');
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

var input;
var e = document.getElementById("edit");
e.addEventListener("click", function(){
  document.getElementById('menu').style.visibility = 'hidden';
  input = document.getElementById('disabledInput').value;
  // input = $.trim($("disabledInput").val());
  document.getElementById("disabledInput").disabled = false;
  document.getElementById('update').style.visibility = 'visible';
  document.getElementById('cancelEdit').style.visibility = 'visible';
  
});

var d = document.getElementById("delete");
d.addEventListener("click", function(){
  document.getElementById('note').style.visibility = 'hidden';
  M.toast({html: 'Note Deleted!', classes: 'rounded'})
});

var u = document.getElementById("update");
u.addEventListener("click", function(){
  document.getElementById('update').style.visibility = 'hidden';
  document.getElementById('cancelEdit').style.visibility = 'hidden';
  document.getElementById("disabledInput").disabled = true;
  document.getElementById('menu').style.visibility = 'visible'
});

var c = document.getElementById("cancelEdit");
c.addEventListener("click", function(){
  document.getElementById('update').style.visibility = 'hidden';
  document.getElementById('cancelEdit').style.visibility = 'hidden';
  document.getElementById('disabledInput').value = input;
  document.getElementById("disabledInput").disabled = true;
  document.getElementById('menu').style.visibility = 'visible'
  
});

var closeModal = document.getElementById("closeModal");
closeModal.addEventListener("click", function(){
  document.getElementById('update').style.visibility = 'hidden';
  document.getElementById('cancelEdit').style.visibility = 'hidden';
  document.getElementById('disabledInput').value = input;
  document.getElementById("disabledInput").disabled = true;
  document.getElementById('menu').style.visibility = 'visible'
  
});

document.getElementById('cancelEdit').style.visibility = 'hidden';
document.getElementById('update').style.visibility = 'hidden';
