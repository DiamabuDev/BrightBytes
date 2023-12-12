document.addEventListener('DOMContentLoaded', function () {
  var partsList = document.getElementById('parts-list');
  var addList = document.getElementById('add-list');

  // Add click event listeners to the list items
  partsList.addEventListener('click', function (event) {
    toggleSelection(event.target);
  });

  addList.addEventListener('click', function (event) {
    toggleSelection(event.target);
  });

  // Add click event listener to the plus button
  document.getElementById('plusBtn').addEventListener('click', function () {
    moveSelectedItems(partsList, addList);
  });

  // Add click event listener to the minus button
  document.getElementById('minusBtn').addEventListener('click', function () {
    moveSelectedItems(addList, partsList);
  });

  function toggleSelection(item) {
    if (item.tagName === 'LI') {
      item.classList.toggle('selected');
    }
  }

  function moveSelectedItems(fromList, toList) {
    var selectedItems = Array.from(fromList.querySelectorAll('li.selected'));
    selectedItems.forEach(function (item) {
      toList.appendChild(item);
      item.classList.remove('selected');
    });
  }
});

document.getElementById("list-one").addEventListener("click", function (e) {
  if (e.target && e.target.nodeName == "LI") {
    var items = document.getElementsByTagName("li");
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove("selected");
    }
    e.target.classList.add("selected");
  }
});

function ToRepairDetails() {
  window.location.href = '../repairs/repairs.html';
}