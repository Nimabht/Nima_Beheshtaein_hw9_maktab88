function generateModalForm() {
  return `<form id="modal" style="display: none">
          <div class="form-group">
            <label for="uid">UID:</label>
            <input type="text" class="form-control" name="uid" />
          </div>
          <div class="form-group">
            <label for="fname">FirstName:</label>
            <input type="text" class="form-control" name="fname" />
          </div>
          <div class="form-group">
            <label for="lname">LastName:</label>
            <input type="text" class="form-control" name="lname" />
          </div>
          <div class="form-group">
            <label for="city">City:</label>
            <input type="text" class="form-control" name="city" />
          </div>
          <div class="form-group">
            <label for="personalCode">PersonalCode:</label>
            <input type="text" class="form-control" name="personalCode" />
          </div>
          <div class="form-group">
            <label for="phoneNumber">PhoneNumber:</label>
            <input type="text" class="form-control" name="phoneNumber" />
          </div>
          <div class="form-group">
            <label for="position">Position</label>
            <input type="text" class="form-control" name="position" />
          </div>
          <div class="button-wrapper">
            <button
              style="display: none"
              id="delete-btn"
              type="button"
              class="btn btn-danger"
              onclick="deleteUser()"
            >
              Delete
            </button>
            <button
              style="display: none"
              id="update-btn"
              type="button"
              class="btn btn-primary"
              onclick="updateUser()"
            >
              Update
            </button>
            <button
              style="display: none"
              id="add-btn"
              type="button"
              class="btn btn-success"
              onclick="addNewUser()"
            >
              Add
            </button>
            <button
              id="close-btn"
              type="button"
              class="btn btn-secondary"
              onclick="closeModal()"
            >
              Close
            </button>
          </div>
        </form>`;
}
