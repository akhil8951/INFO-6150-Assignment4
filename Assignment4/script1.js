window.onload = () => {
  var myForm = document.getElementById("feedbackForm");
  var firstNameInput = document.getElementById("firstName");
  var firstNameError = document.getElementById("firstNameError");
  var lastNameInput = document.getElementById("lastName");
  var lastNameError = document.getElementById("lastNameError");
  var emailInput = document.getElementById("emailId");
  var emailIdError = document.getElementById("emailIdError");
  var phoneNumberInput = document.getElementById("phoneNumber");
  var phoneError = document.getElementById("phoneNumberError");
  var streetAddress1Input = document.getElementById("streetAddress1");
  var street1Error = document.getElementById("streetAddress1Error");
  var streetAddress2Input = document.getElementById("streetAddress2");
  var zipCodeInput = document.getElementById("zipcode");
  var zipCodeError = document.getElementById("zipcodeError");
  var hearAboutUsInput = document.getElementById("");
  var commuteDropDown = document.getElementById("dropdown");
  var checkBoxContainerRoad = document.getElementById("checkboxContainerRoad");
  var checkBoxContainerTrain = document.getElementById(
    "checkboxContainerTrain"
  );
  var checkBoxContainerPlane = document.getElementById(
    "checkboxContainerPlane"
  );
  var checkboxes = document.getElementById("checkbox");

  const regExName = /^[a-zA-Z]+$/;
  var emailDomain = "northeastern.edu";
  const regExEmail = new RegExp(`^[a-zA-Z0-9._%+-]+@${emailDomain}$`);
  const regExPhone = /\d{3}-?\d{3}-\d{4}$/;
  const regExStreetAddress1 = /^[a-zA-Z0-9\s.,'-]+$/;
  const regExZipCode = /^\d+$/;

  const display = (elementName, isInValid) => {
    if (isInValid) {
      document.getElementById(`error_${elementName}`).style.display =
        "inline-block";
      document.myForm[elementName].style.border = "2px solid red";
    } else {
      document.getElementById(`error_${elementName}`).style.display = "none";
      document.myForm[elementName].style.border = "";
    }
  };

  let isFirstNameInValid = true,
    isLastNameInvalid = true,
    isEmailInValid = true,
    isPhoneNumberInValid = true,
    isAddressInvalid = true,
    isZipcodeInvalid = true;

  const validate = (event) => {
    console.log("input");
    const { id, value, name } = event.target;

    switch (id) {
      case "firstName":
        if (!value.trim().toLowerCase().match(regExName)) {
          display(name, true);
          isFirstNameInValid = true;
        } else {
          display(name, false);
          isFirstNameInvalid = false;
        }
        break;
      case "email":
        if (!value.trim().toLowerCase().match(regExEmail)) {
          display(name, true);
          isEmailInValid = true;
        } else {
          display(name, false);
          isEmailInValid = false;
        }
        break;
      case "phoneNumber":
        if (!value.trim().toLowerCase().match(regExPhone)) {
          display(name, true);
          isPhoneNumberInValid = true;
        } else {
          display(name, false);
          isPhoneNumberInValid = false;
        }
        break;
    }

    if (isNameInValid || isEmailInValid || isPhoneNumberInValid) {
      document.myForm.submit.setAttribute("disabled", true);
    } else {
      document.myForm.submit.removeAttribute("disabled");
    }
  };

  function submitted(e) {
    console.log("submit");
    e.preventDefault();

    if (!isNameInValid && !isEmailInValid && !isPhoneNumberInValid) {
      alert("Data entered successfully");
    } else {
      alert("Please enter valid details");
    }
  }

  document.myForm.addEventListener("input", validate);
  document.myForm.addEventListener("submit", submitted);
};
