//delete user function
function deleteUser() {
  let uid = selectedUser.uid;
  let newUserData = userData.filter((user) => +user.uid !== +uid);
  userData = newUserData;
  //render new table and hide modal
  renderTable(userData);
  $("#modal").css("display", "none");
  $(".modal-wrapper").css("display", "none");
}
