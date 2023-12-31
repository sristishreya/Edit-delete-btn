var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
    e.preventDefault();
  
    // Get input value
    var newItem = document.getElementById('item').value;
    var newItem2 = document.getElementById('item2').value;
  
    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // var combinedText = newItem + ' \n' + newItem2;
  
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    li.appendChild(document.createElement('br'));

    li.appendChild(document.createTextNode(newItem2));

  
    // Create edit button element
    var editBtn = document.createElement('button');
    // Add classes to edit button
    editBtn.className = 'btn btn-primary btn-sm float-right edit';
    // Append text node to edit button
    editBtn.appendChild(document.createTextNode('E'));
  
    // Create delete button element
    var deleteBtn = document.createElement('button');
    // Add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node to delete button
    deleteBtn.appendChild(document.createTextNode('X'));
  
    // Append edit button and delete button to li
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
  
    // Append li to list
    itemList.appendChild(li);
  
    // Clear input field
    document.getElementById('item').value = '';
    document.getElementById('item2').value = '';
  }

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
// function filterItems(e){
//   // convert text to lowercase
//   var text = e.target.value.toLowerCase();
//   // Get lis
//   var items = itemList.getElementsByTagName('li');
//   // Convert to an array
//   Array.from(items).forEach(function(i){
//     var itemName = i.firstChild.textContent.toLowerCase();
//     var itemName2 = i.lastChild.textContent.toLowerCase();
//     if(itemName.indexOf(text) !== -1 || itemName2.indexOf(text) !== -1){
//       i.style.display = 'block';
//     } else {
//       i.style.display = 'none';
//     }
//   });
// }

function filterItems(e) {
    // Convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function (i) {
      // Get the text content of the list item and its child elements
      var itemText = i.textContent.toLowerCase();
      
      if (itemText.indexOf(text) !== -1) {
        i.style.display = 'block';
      } else {
        i.style.display = 'none';
      }
    });
  }
  