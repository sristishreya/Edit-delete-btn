var index=document.getElementById('form-control');
index.addEventListener("submit", addItem1);
function addItem1(e){
    e.preventDefault();
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    localStorage.setItem('First Name', fname);
    localStorage.setItem('Last Name', lname);
}
