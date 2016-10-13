
function addPage(elementId, page) {
  if (!$('#' + elementId).length) {
    $('#main').append(page);
  }
}

function removePage(elementId) {
  $('#' + elementId).remove();
}

function showPage(elementId) {
  $('#main').children().hide();
  $('#' + elementId).show("slide", { direction: "left" }, 500);
}

