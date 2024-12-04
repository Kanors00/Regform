var fnameError = document.getElementById('fname-error');
var lnameError = document.getElementById('lname-error');
var dobError = document.getElementById('dob-error');
var emailError = document.getElementById('email-error');
var genderError = document.getElementById('gender-error');
var mobileError = document.getElementById('mobile-error');
var countryError = document.getElementById('country-error');
var stateError = document.getElementById('state-error');
var addressError = document.getElementById('address-error');
var pinCodeError = document.getElementById('pin-error');
var cityError = document.getElementById('city-error');
var hobbiesError = document.getElementById('hobbies-error');
var submitError = document.getElementById('submit-error');

window.onload = function(){
    var countrySel = document.getElementById("country-name");
    var stateSel = document.getElementById("state-name");
    var citySel = document.getElementById("city-name");

    for(var x in addressObject){
        countrySel.options[countrySel.options.length] = new Option(x, x);
    }

    countrySel.onchange = function(){
        //Empty city and States dropdown
        citySel.length = 1;
        stateSel.length = 1;

        //Display correct values
        for(var y in addressObject[this.value]){
            stateSel.options[stateSel.options.length] = new Option(y, y);
        }
    }

    stateSel.onchange = function(){
        //Empty city dropdown
        citySel.length = 1;

        //display correct values
        var z = addressObject[countrySel.value][this.value];
        console.log(z);
        for(var i=0; i<z.length; i++){
            citySel.options[citySel.options.length] = new Option(z[i], z[i]);
        }
    }

}

//Function to validate First name

function validateFName(){
    var fname = document.getElementById('fname').value;

    if(fname.length == 0){
        fnameError.innerHTML = ' **First Name is required';
        return false;
    }
    if(!fname.match(/^[A-Za-z\s]*$/)){
        fnameError.innerHTML = ' **Numeric is not allowed';
        return false;
    }
    if(fname.length < 3){
        fnameError.innerHTML = ' **Minimum 3 char required';
        return false;
    }
    if(fname.length > 20){
        fnameError.innerHTML = ' **First name should be less than 20 char';
        return false;
    }
    fnameError.innerHTML = '<img src="Checkmark.png" alt="">';
    return true;
}

//Function to validate Last name
function validateLName(){
    var lname = document.getElementById('lname').value;

    if(lname.length == 0){
        lnameError.innerHTML = ' **Last Name is required';
        return false;
    }
    if(!lname.match(/^[A-Za-z\s]*$/)){
        lnameError.innerHTML = ' **Numeric is not allowed';
        return false;
    }
    if(lname.length < 3){
        lnameError.innerHTML = ' **Minimum 3 char required';
        return false;
    }
    if(lname.length > 20){
        lnameError.innerHTML = ' **Last name should be less than 20 char';
        return false;
    }
    lnameError.innerHTML = '<img src="Checkmark.png" alt="">';
    return true;
}

//Function to validate Date of Birth
function validateDOB(){
    var dobString = document.getElementById('dob').value;
    var myDate = new Date();
    var parts = dobString.split("-");
    console.log(dobString);
    console.log(parts);

    if(dobString == ""){
        dobError.innerHTML = ' **Date of Birth required';
        return false;
    }
    if(Date.parse(dobString) > Date.parse(myDate.toDateString())){
        dobError.innerHTML = " **You can't select future date as DOB";
        return false;
    }
    if(myDate.getFullYear() - parts[0] > 24){
        dobError.innerHTML = ' **Date of Birth should not be greater than 24';
        return false;
    }
    dobError.innerHTML = '<img src="Checkmark.png" alt="">';
    return true;
}

//Function to validate Email
function validateEmail(){
    var emailId = document.getElementById('email-id').value;

    if(emailId.length == 0){
        emailError.innerHTML = ' **Email is required';
        return false;
    }
    if(!emailId.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
        emailError.innerHTML = ' **Invalid Email';
        return false;
    }
    emailError.innerHTML = '<img src="Checkmark.png" alt="">';
    return true;
}

//Function to validate Phone Number
function validatePhone(){
    var phoneNum = document.getElementById('phone-no').value;

    if(phoneNum.length == 0){
        mobileError.innerHTML = ' **Phone number is required';
        return false;
    }
    if(phoneNum.length !== 11){
        mobileError.innerHTML = ' **Phone Number should be 11 digits';
        return false;
    }
    if(!phoneNum.match(/^[0-9]{11}$/)){
        mobileError.innerHTML = ' **Only digits please';
        return false;
    }
    mobileError.innerHTML = '<img src="Checkmark.png" alt="">';
    return true;
}

//Function to validate Gender
function validateGender(){
    var genderSelected = document.querySelector('input[name = "gender"]:checked');

    if(genderSelected != null){
        genderError.innerHTML = '<img src="Checkmark.png" alt="">';
        return true;
    }
    genderError.innerHTML = ' **Please enter your gender';
    return false;
}

//Function to validate Country Name
function validateCountry(){
    var countryName = document.getElementById('country-name').value;

    if(countryName == ""){
        countryError.innerHTML = ' **Country name required';
        return false;
    }
    countryError.innerHTML = '<img src="Checkmark.png" alt="">';
    return true;
}

//Function to validate State Name
function validateState(){
    var stateName = document.getElementById('state-name').value;

    if(stateName == ""){
        stateError.innerHTML = ' **Region name required';
        return false;
    }
    stateError.innerHTML = '<img src="Checkmark.png" alt="">';
    return true;
}

//Function to validate Address
function validateAddress(){
    var address = document.getElementById('address').value;

    if(address == ""){
        addressError.innerHTML = ' **Address is required';
        return false;
    }
    addressError.innerHTML = '<img src="Checkmark.png" alt="">';
    return true;
}

//Function to validate PinCode
function validatePinCode(){
    var pinCode = document.getElementById('pincode').value;

    if(pinCode.length == 0){
        pinCodeError.innerHTML = ' **PinCode is required';
        return false;
    }
    if(pinCode.length !== 4){
        pinCodeError.innerHTML = ' **PinCode should be of 4 digits';
        return false;
    }
    if(!pinCode.match(/^[0-9]{4}$/)){
        pinCodeError.innerHTML = ' **Only digits please';
        return false;
    }
    pinCodeError.innerHTML = '<img src="Checkmark.png" alt="">';
    return true;
}


//Function to validate District Name
function validateCity(){
    var cityName = document.getElementById('city-name').value;

    if(cityName == ""){
        cityError.innerHTML = ' **City name required';
        return false;
    }
    cityError.innerHTML = '<img src="Checkmark.png" alt="">';
    return true;
}

//Function to validate Hobbies
function validateHobbies(){
    var hobbies = document.getElementById('hobbies').value;
    var requiredChar = 15;
    var leftChar = requiredChar - hobbies.length;

    if(leftChar > 0){
        hobbiesError.innerHTML = leftChar + ' more characters required';
        return false;
    }
    hobbiesError.innerHTML = '<img src="Checkmark.png" alt="">';
    return true;
}

//Function to validate while the submit button is clicked by the user
function validateForm(){
    if(!validateFName() || !validateLName() || !validateDOB() ||
    !validateEmail() || !validatePhone() || !validateGender() ||
    !validateCountry() || !validateState() || !validateAddress() ||
    !validatePinCode() || !validateCity() ||
    !validateHobbies()){
        submitError.innerHTML = 'Fill all errors to proceed';
        return false;
    }
}

var addressObject = {
    "Philippines": {
       "Metro Manila": ["Quezon City", "Caloocan", "Manila", "Makati", "Taguig", "Marikina"],
        "CALABARZON": ["Cavite", "Laguna", "Batangas", "Rizal", "Quezon"],
        "Region III": ["Aurora", "Bataan", "Bulacan", "Nueva Ecija", "Pampanga", "Tarlac", "Zambales"], 
      },
      "USA": {
        "Arizona": ["Gila", "Yuma", "Apache", "Mohave", "Santa Cruz", "Greenlee"],
        "California": ["San Francisco", "Los Angeles", "Sacramento", "San Diego", "Riverside", "San Jose"],
        "Georgia": ["Atlanta", "Augusta", "Columbus", "Savannah"],
        "Michigan": ["Watersmeet", "Holland", "Flint", "Holly", "Dearborn"],
        "New York": ["Shirley", "Brooklyn", "Manhattan", "Bronx", "Yonkers"],
        "Washington": ["Pierce", "Yakima", "Thurston", "Snohomish"],
        "New Mexico": ["Alamogordo", "Santa Fe", "Albuquerque"]
      },
      "BANGLADESH": {
          "Barisal": ["Barisal", "Barguna", "Bhola", "Pirojpur", "Jhalokati", "Patuakhali"],
          "Khulna": ["Bagerhat", "Jashore", "Khulna", "Narail", "Satkhira", "Meherpur"],
          "Rajshahi": ["Natore", "Sirajganj", "Pabna", "Bogura", "Naogaon", "Joypurhat"],
          "Rangpur": ["Dinajpur", "Kurigram", "Rangpur", "Thakurgaon", "Panchagarh", "Gaibandha"],
          "Sylhet": ["Habiganj", "Moulvibazar", "Sunamganj", "Sylhet"],
          "Dhaka": ["Gazipur", "Tangail", "Rajbari", "Gopalganj", "Faridpur", "Narayanganj"],
          "Chittagong": ["Rangamati", "Cox's Bazar", "Chattogram", "Lakshmipur", "Chandpur", "Brahmanbaria"]
      }
}