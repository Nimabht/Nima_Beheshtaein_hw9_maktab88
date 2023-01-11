//table render function
function renderTable(userData) {
  //reset table
  $("#table").html(`<tr>
          <th scope="col">Row</th>
          <th id="uid" scope="col">UID</th>
          <th id="firstName" scope="col">First Name</th>
          <th id="lastName" scope="col">Last Name</th>
          <th id="city" scope="col">City</th>
          <th id="personalCode" scope="col">Personal Code</th>
          <th id="phoneNumber" scope="col">Phone Number</th>
          <th id="position" scope="col">Position</th>
        </tr>`);
  //create rows
  userData.forEach((user, indexOfUser) => {
    $("#table")[0].insertRow();
    let newCell =
      $("#table")[0].rows[$("#table")[0].rows.length - 1].insertCell();
    newCell.textContent = indexOfUser + 1;
    for (const key in user) {
      let newCell =
        $("#table")[0].rows[$("#table")[0].rows.length - 1].insertCell();
      newCell.textContent = user[key];
    }
  });
  //assign onclick funtion for row 1 for sorting
  for (let i = 1; i < $("#table")[0].rows[0].cells.length; i++) {
    let cell = $("#table")[0].rows[0].cells[i];
    cell.onclick = () => sortData(cell.id);
  }
  //assign onclick funtion for each row (row 2 -...) for rendering modal
  for (let i = 1; i < $("#table")[0].rows.length; i++) {
    $("#table")[0].rows[i].onclick = function () {
      let selectedUserId = this.children[1].innerText;
      console.log(selectedUserId);
      let userObj = getUserData(selectedUserId);
      selectedUser = userObj;
      renderModal(userObj);
    };
  }
  //assign/update selected user and openUp modal for it
  function getUserData(id) {
    console.log(userData.filter((user) => user.uid == id)[0]);
    return userData.filter((user) => user.uid == id)[0];
  }
}
