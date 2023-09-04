// var index=document.getElementById('form-control');
// index.addEventListener("submit", addItem1);
// function addItem1(e){
//     e.preventDefault();
//     var fname=document.getElementById("fname").value;
//     var lname=document.getElementById("lname").value;
    
//     var user = {
//         "firstName": fname,
//         "lastName": lname
//       };
  
//       localStorage.setItem('userDetails', JSON.stringify(user));
//       console.log("User Details Stored:", user);

//     }

var form = document.getElementById('form-control');

// Add a submit event listener to the form
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get the form input values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;

  // Create a user object
  var user = {
    name: name,
    email: email,
    phone: phone
  };

  // Store the user object in local storage with email as the key
  localStorage.setItem(email, JSON.stringify(user));

  // Display the stored details on the screen
  var displayDiv = document.getElementById('display-details');
  var userDiv = document.createElement('div');
  userDiv.setAttribute('data-email', email);
  userDiv.innerHTML = `
    ${name} - ${email} - ${phone}
    <button onclick="editUser('${email}')">Edit</button>
    <button onclick="deleteUser('${email}')">Delete</button>
  `;

  displayDiv.appendChild(userDiv);


  // Clear the form input fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
});

// Function to edit a user's email
function editUser(email) {
    // Prompt the user for a new email
    var newEmail = prompt('Enter a new email:');
    
    if (newEmail !== null && newEmail !== '') {
      // Retrieve the user details from local storage
      var userJSON = localStorage.getItem(email);
      var user = JSON.parse(userJSON);
      
      // Remove the user details from local storage
      localStorage.removeItem(email);
      
      // Update the email in the user object
      user.email = newEmail;
      
      // Store the updated user object in local storage with the new email as the key
      localStorage.setItem(newEmail, JSON.stringify(user));
      
      // Find the user details div by data-email attribute
      var userDiv = document.querySelector(`[data-email="${email}"]`);
      
      if (userDiv) {
        // Update the data-email attribute to match the new email
        userDiv.setAttribute('data-email', newEmail);
        
        // Update the displayed details with the new email
        userDiv.innerHTML = `
          ${user.name} - Email: ${newEmail} - ${user.phone}
          <button onclick="editUser('${newEmail}')">Edit</button>
          <button onclick="deleteUser('${newEmail}')">Delete</button>
        `;
      }
    }
  }
  

function deleteUser(email) {
    // Remove the user details from the screen
    var userDiv = document.querySelector(`[data-email="${email}"]`);
    if (userDiv) {
        userDiv.remove();
      }
    // Remove the user details from local storage
    localStorage.removeItem(email);
  }

  