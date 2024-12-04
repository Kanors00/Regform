<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Registration Form</title>
</head>
<body>

    <div class="form-container">
        <h1>Student Registration Form</h1>
        <form action="connect.php" method="POST">
          <div class="input-group">
            <label><strong>First Name:</strong></label>
            <input type="text" placeholder="Enter Your First Name" id="fname" onkeyup="validateFName()" 
            name="firstname">
            <span id="fname-error"></span>
          </div>
    
          <div class="input-group">
            <label><strong>Last Name:</strong></label>
            <input type="text" placeholder="Enter Your Last Name" id="lname" onkeyup="validateLName()"
            name="lastname">
            <span id="lname-error"></span>
          </div>
    
          <div class="input-group">
            <label><strong>Date of Birth:</strong></label>
            <input type="date" id="dob" onchange="validateDOB()" name="birthdate" value="Birth Date">
            <span id="dob-error"></span>
          </div> 

          <div class="input-group">
            <label><strong>Email:</strong></label>
            <input type="email" placeholder="Enter Your Email Address" id="email-id" onkeyup="validateEmail()"
            name="email">
            <span id="email-error"></span>
          </div>

          <div class="input-group">
            <label><strong>Mobile No.:</strong></label>
            <input type="tel" placeholder="Enter your mobile number" id="phone-no" onkeyup="validatePhone()" 
            name="number">
            <span id="mobile-error"></span>
          </div>

          <div class="input-group">
            <label><strong>Gender:</strong></label>
            <input type="radio" style="flex-basis: 0%; margin: 0 10px;" name="gender" value="male" id="male" onkeyup="validateGender()">
            <label for="male">Male</label> 
            <input type="radio" style="flex-basis: 0%; margin: 0 10px;"name="gender" value="female" id="female" onkeyup="validateGender()">
            <label for="female">Female</label> 
            <span id="gender-error"></span>
          </div> 

          <div class="input-group">
            <label><strong>Country:</strong></label>
            <select name="country" id="country-name" onclick="validateCountry()">
              <option value="" selected="selected" >Select Country</option>
            </select>
            <span id="country-error"></span>
          </div> 

          <div class="input-group">
            <label><strong>Region:</strong></label>
            <select name="state" id="state-name" onclick="validateState()">
              <option value="" selected="selected">Select Region First</option>
            </select>
            <span id="state-error"></span>
          </div> 

          <div class="input-group">
            <label><strong>City:</strong></label>
            <select name="City" id="city-name" onclick="validateCity()">
              <option value="" selected="selected">Please select City</option>
            </select>
            <span id="city-error"></span>
          </div> 

          <div class="input-group">
            <label><strong>Complete Address:</strong></label>
            <input type="text" placeholder="Enter Your Complete Address" id="address" onkeyup="validateAddress()"
            name="address">
            <span id="address-error"></span>
          </div>

          <div class="input-group">
            <label><strong>Postal Code:</strong></label>
            <input type="text" placeholder="Enter Your Postal Code" id="pincode" onkeyup="validatePinCode()"
            name="pincode">
            <span id="pin-error"></span>
          </div> 

          <!--<div class="input-group">
            <label><strong>Hobbies:</strong></label>
            <textarea rows="5" placeholder="Enter Your Hobbies" id="hobbies" onkeyup="validateHobbies()"></textarea>
            <span id="hobbies-error"></span>
          </div>-->
    
        <button name="submit" onclick="return validateForm()">Submit</button>
        <span id="submit-error"></span>
       
      </form>

      </div>
      <script src="script.js"></script>
</body>
</html>