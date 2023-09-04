var index=document.getElementById('form-control');
index.addEventListener("submit", addItem1);
function addItem1(e){
    e.preventDefault();
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    
    var user = {
        "firstName": fname,
        "lastName": lname
      };
  
      localStorage.setItem('userDetails', JSON.stringify(user));
      console.log("User Details Stored:", user);

    }
