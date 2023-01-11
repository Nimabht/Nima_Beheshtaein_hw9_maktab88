//reset modal
function resetModal() {
  if ($("#modal")[0] === undefined) return;
  for (let i = 0; i < 7; i++) {
    $("#modal").children()[i].children[1].value = ` `;
  }
}
