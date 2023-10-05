window.onload = () => {
  var form = document.getElementById("feedbackForm");
  var formFields = form.querySelectorAll(
    "input, textarea, select, checkbox, radio"
  );
  var titleRadio = document.getElementsByName("title");
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
  var cityInput = document.getElementById("city");
  var cityError = document.getElementById("cityError");
  var stateInput = document.getElementById("state");
  var stateError = document.getElementById("stateError");
  var zipCodeInput = document.getElementById("zipcode");
  var zipCodeError = document.getElementById("zipcodeError");
  var commuteDropDown = document.getElementById("dropdown");
  var checkBoxContainerRoad = document.getElementById("checkboxContainerRoad");
  var checkBoxContainerTrain = document.getElementById(
    "checkboxContainerTrain"
  );
  var checkBoxContainerPlane = document.getElementById(
    "checkboxContainerPlane"
  );
  var checkBoxContainerWater = document.getElementById(
    "checkboxContainerWater"
  );
  var checkBoxContainerWalk = document.getElementById("checkboxContainerWalk");
  var transportCheckbox = document.querySelectorAll(".transport");
  var hearAboutUsCheckbox = document.querySelectorAll(".source");
  var hearAboutError = document.getElementById("hearAboutError");
  var experienceInputDiv = document.getElementById("experienceFieldContainer");
  var experienceInput = document.getElementById("experienceTextField");
  var experienceError = document.getElementById("expError");

  var dataTable = document.getElementById("dataTable");
  var commentsInput = document.getElementById("comments");
  var commentsError = document.getElementById("commentsError");
  var submitButton = document.getElementById("submit");
  var dropdownError = document.getElementById("howDidYouCommuteError");

  const regExName = /^[a-zA-Z]+$/;
  var emailDomain = "northeastern.edu";
  const regExEmail = new RegExp(`^[a-zA-Z0-9._%+-]+@${emailDomain}$`);
  const regExPhone = /\d{3}-?\d{3}-\d{4}$/;
  const regExStreetAddress1 = /^[a-zA-Z0-9\s.,'-]+$/;
  const regExCityName = /^[A-Za-z\s\-']+$/u;
  const regExStateName = /^[A-Z]+(?:-[A-Z]+)*$/u;
  const regExZipCode = /^\d+$/;

  const validateName = () => {
    var fname = firstNameInput.value.trim();
    var fnameValidate = fname.toLowerCase().match(regExName);
    if (fname === " ") {
      firstNameError.textContent = "Name is required";
      firstNameError.style.display = "inline-block";
      return false;
    } else if (fname.length < 3) {
      firstNameError.textContent = "Name should be longer than 3 characters";
      firstNameError.style.display = "inline-block";
      return false;
    } else if (fname.length > 20) {
      firstNameError.textContent = "Name should not be more than 20 characters";
      firstNameError.style.display = "inline-block";
      return false;
    } else if (fnameValidate) {
      firstNameError.textContent = "";
      return true;
    }
  };

  const validateLName = () => {
    var lname = lastNameInput.value.trim();
    var lnameValidate = lname.toLowerCase().match(regExName);
    if (lname === " ") {
      lastNameError.textContent = "Last Name is required";
      lastNameError.style.display = "inline-block";
      return false;
    } else if (lname.length < 3) {
      lastNameError.textContent =
        "last name should be longer than 3 characters";
      lastNameError.style.display = "inline-block";
      return false;
    } else if (lname.length > 10) {
      lastNameError.textContent =
        "Last Name should not be more than 10 characters";
      lastNameError.style.display = "inline-block";
      return false;
    } else if (lnameValidate) {
      lastNameError.textContent = "";
      return true;
    }
  };

  const validateEmailId = () => {
    var emailId = emailInput.value;
    var emailValidate = emailId.toLowerCase().match(regExEmail);
    if (emailId === " ") {
      emailIdError.textContent = " Email Id is required";
      emailIdError.style.display = "inline-block";
      return false;
    } else if (!emailValidate) {
      emailIdError.textContent = "Northeastern Email is required";
      emailIdError.style.display = "inline-block";
      return false;
    } else if (emailValidate) {
      emailIdError.textContent = "";
      return true;
    }
  };

  const validatePhoneNumber = () => {
    var phoneNumber = phoneNumberInput.value.match(regExPhone);
    if (!phoneNumber) {
      phoneError.textContent =
        "Please Enter your phone number as (xxx-xxx-xxxx)";
      phoneError.style.display = "inline-block";
      return false;
    } else if (phoneNumber) {
      phoneError.textContent = "";
      return true;
    }
  };

  const validateStreet1 = () => {
    var streetAddress1 = streetAddress1Input.value;
    var street1Valid = streetAddress1.toLowerCase().match(regExStreetAddress1);
    if (streetAddress1 === " ") {
      street1Error.textContent = "Address is required";
      street1Error.style.display = "inline-block";
      return false;
    } else if (streetAddress1.length > 30) {
      street1Error.textContent = "Address should be less than 30 Characters";
      street1Error.style.display = "inline-block";
      return false;
    } else if (streetAddress1.length < 5) {
      street1Error.textContent = "Please mention correctly";
      street1Error.style.display = "inline-block";
      return false;
    } else if (street1Valid) {
      street1Error.textContent = "";
      return true;
    }
  };

  const validateCity = () => {
    var city = cityInput.value;
    var cityValid = city.match(regExCityName);
    if (city.length < 1) {
      cityError.textContent = "City is required";
      cityError.style.display = "inline-block";
      return false;
    } else if (cityValid) {
      cityError.textContent = "";
      return true;
    }
  };

  const validateState = () => {
    var state = stateInput.value;
    var stateValid = state.match(regExStateName);
    if (state.length < 1) {
      stateError.textContent = "State is required";
      stateError.style.display = "inline-block";
      return false;
    } else if (stateValid) {
      stateError.textContent = "";
      return true;
    }
  };

  const validateZip = () => {
    var zipcode = zipCodeInput.value;
    var zipValid = zipcode.match(regExZipCode);
    if (zipcode.length < 1) {
      zipCodeError.textContent = "zipcode is required";
      zipCodeError.style.display = "inline-block";
      return false;
    } else if (zipcode.length > 5) {
      zipCodeError.textContent = "zipcode is invalid";
      zipCodeError.style.display = "inline-block";
      return false;
    } else if (zipValid) {
      zipCodeError.textContent = "";
      return true;
    }
  };

  const validateComments = () => {
    var comments = commentsInput.value;
    if (comments.length > 30) {
      commentsError.textContent = "Commnets should be less than 30 Characters";
      commentsError.style.display = "inline-block";
      return false;
    } else if (comments.length < 5) {
      commentsError.textContent =
        "Comments should be a minimum of 5 Characters";
      commentsError.style.display = "inline-block";
      return false;
    } else {
      commentsError.textContent = "";
      return true;
    }
  };

  const validateDropDown = () => {
    var selectedOption = commuteDropDown.value;
    if (selectedOption === "selectAnOption") {
      dropdownError.textContent = "please select an option";
      dropdownError.style.display = "inline-block";
      return false;
    } else {
      dropdownError.textContent = "";
      dropdownError.style.display = "none";
      return true;
    }
  };

  commuteDropDown.addEventListener("change", validateDropDown);

  titleRadio.forEach(function (radio) {
    radio.addEventListener("click", function () {
      clickedValue = this.value;
    });
  });

  // const transportCheckboxToggle = () => {
  //   console.log("i am inside the method");
  //   if (transportCheckbox.checked) {
  //     console.log("checked");
  //   } else {
  //   }
  // };
  // transportCheckbox.addEventListener("change", transportCheckboxToggle);

  transportCheckbox.forEach((checkbox) => {
    checkbox.addEventListener("click", function () {
      if (checkbox.checked) {
        experienceInputDiv.style.display = "block";
        experienceInput.setAttribute("required", "true");
        transportCheckedValue = this.value;
      } else {
        experienceInputDiv.style.display = "none";
        experienceInput.removeAttribute("required");
        experienceInput.textContent = "";
      }
    });
  });

  hearAboutUsCheckbox.forEach((checkbox) => {
    checkbox.addEventListener("click", function () {
      if (checkbox.checked) {
        hearAboutError.textContent = "";
        hearAboutError.style.display = "none";
        hearaboutUsCheckedValue = this.value;
        console.log(hearaboutUsCheckedValue);
      } else {
        hearAboutError.textContent = "Required";
        hearAboutError.style.display = "inline-block";
      }
    });
  });

  const validateExperienceField = () => {
    var expField = experienceInput.value;
    if (expField.length < 1) {
      experienceError.textContent = "Required";
      experienceError.style.display = "inline-block";
      return false;
    } else {
      experienceError.textContent = "";
      experienceError.style.display = "none";
      return true;
    }
  };

  const checkboxVisible = () => {
    // console.log("i am inside the function");
    if (commuteDropDown.value === "road") {
      checkBoxContainerRoad.style.display = "block";
    } else {
      checkBoxContainerRoad.style.display = "none";
    }
    if (commuteDropDown.value === "train") {
      checkBoxContainerTrain.style.display = "block";
    } else {
      checkBoxContainerTrain.style.display = "none";
    }
    if (commuteDropDown.value === "plane") {
      checkBoxContainerPlane.style.display = "block";
    } else {
      checkBoxContainerPlane.style.display = "none";
    }
    if (commuteDropDown.value === "walk") {
      checkBoxContainerWalk.style.display = "block";
    } else {
      checkBoxContainerWalk.style.display = "none";
    }
    if (commuteDropDown.value === "water") {
      checkBoxContainerWater.style.display = "block";
    } else {
      checkBoxContainerWater.style.display = "none";
    }
  };

  firstNameInput.addEventListener("input", validateName);
  lastNameInput.addEventListener("input", validateLName);
  emailInput.addEventListener("input", validateEmailId);
  phoneNumberInput.addEventListener("input", validatePhoneNumber);
  streetAddress1Input.addEventListener("input", validateStreet1);
  cityInput.addEventListener("input", validateCity);
  stateInput.addEventListener("input", validateState);
  zipCodeInput.addEventListener("input", validateZip);
  commentsInput.addEventListener("input", validateComments);
  experienceInput.addEventListener("input", validateExperienceField);

  // var count = 0;
  // const checkboxCounter = () => {
  //   if (checkboxes.checked) {
  //     console.log("checkbox checked");
  //     count++;
  //   } else {
  //     count--;
  //   }
  // };
  // const validateChecbox = () => {
  //   console.log("I am inside the checkbox function");

  //   checkboxes.forEach(function (checkbox) {
  //     if (checkbox.checked) {
  //       console.log("checked");
  //       count++;
  //     } else {
  //       count--;
  //     }
  //   });
  //   if (count > 1) {
  //     return 1;
  //   } else return 0;
  // };

  const updateSubmitButton = () => {
    const isNameValid = validateName();
    const isLNameValid = validateLName();
    const isEmailValid = validateEmailId();
    const isPhoneValid = validatePhoneNumber();
    const isStreet1Valid = validateStreet1();
    const isZipValid = validateZip();
    console.log("Validating");
    if (
      isNameValid &&
      isLNameValid &&
      isEmailValid &&
      isPhoneValid &&
      isStreet1Valid &&
      isZipValid &&
      isCheckboxValid
    ) {
      submitButton.setAttribute("disabled", true);
    } else {
      submitButton.setAttribute("disabled", false);
    }
  };

  const handleSubmit = (event) => {
    //To avoid page refresh
    event.preventDefault();

    console.log("you just pressed submit");
    const isNameValid = validateName();
    const isLNameValid = validateLName();
    const isEmailValid = validateEmailId();
    const isPhoneValid = validatePhoneNumber();
    const isStreet1Valid = validateStreet1();
    const isZipValid = validateZip();
    const isComments = validateComments();
    const isDropDownSelected = validateDropDown();
    // var isCheckboxValid = validateChecbox();
    // console.log(titleValue);
    if (
      isNameValid &&
      isLNameValid &&
      isEmailValid &&
      isPhoneValid &&
      isStreet1Valid &&
      isZipValid &&
      isComments &&
      isDropDownSelected
      // isCheckboxValid
    ) {
      alert("Submitted Successfully");

      //Add data to table
      const newRow = dataTable.insertRow();
      const titleCell = newRow.insertCell(0);
      const firstName = newRow.insertCell(1);
      const lastName = newRow.insertCell(2);
      const emailId = newRow.insertCell(3);
      const phoneNumber = newRow.insertCell(4);
      const address1 = newRow.insertCell(5);
      const address2 = newRow.insertCell(6);
      const city = newRow.insertCell(7);
      const state = newRow.insertCell(8);
      const zipcode = newRow.insertCell(9);
      const howDidYouHear = newRow.insertCell(10);
      const commute = newRow.insertCell(11);
      const comments = newRow.insertCell(12);

      titleCell.textContent = clickedValue;
      firstName.textContent = firstNameInput.value;
      console.log("content added");
      lastName.textContent = lastNameInput.value;
      emailId.textContent = emailInput.value;
      phoneNumber.textContent = phoneNumberInput.value;
      address1.textContent = streetAddress1Input.value;
      address2.textContent = streetAddress2Input.value;
      zipcode.textContent = zipCodeInput.value;
      city.textContent = cityInput.value;
      state.textContent = stateInput.value;
      comments.textContent = commentsInput.value;
      howDidYouHear.textContent = hearaboutUsCheckedValue;
      commute.textContent = transportCheckedValue;

      formFields.forEach((field) => {
        if (field.type === "radio" || field.type === "checkbox") {
          field.checked = false;
        } else if (field.type === "submit") {
          field.value = "submit";
        } else if (field.type === "reset") {
          field.value = "reset";
        } else {
          field.value = "";
        }
      });
    } else {
      alert("Check the fields and enter the right details");
    }
  };
  commuteDropDown.addEventListener("change", checkboxVisible);
  form.addEventListener("submit", handleSubmit);
  //updateSubmitButton();
};
