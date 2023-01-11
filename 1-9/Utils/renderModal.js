//modal render function
function renderModal(userObj) {
  $(".modal-wrapper").html(generateModalForm()).css("display", "block");
  $("#modal").css("display", "flex");
  //show specefic buttons in different situations (creating/selecting a row)
  if (!userObj) {
    $("#add-btn").css("display", "inline");
    $("#delete-btn").css("display", "none");
    $("#update-btn").css("display", "none");
    var userObj = {
      uid: "",
      firstname: "",
      lastname: "",
      city: "",
      personalCode: "",
      phoneNumber: "",
      position: "",
    };
  } else {
    $("#add-btn").css("display", "none");
    $("#delete-btn").css("display", "inline");
    $("#update-btn").css("display", "inline");
  }
  //modal values reset
  resetModal();
  userValues = Object.values(userObj);
  userValues.forEach((value, index) => {
    if (index == 0) {
      $("#modal").children()[index].children[1].disabled = true;
    }
    $("#modal").children()[index].children[1].required = true;
    $("#modal").children()[index].children[1].value = value;
  });
}
