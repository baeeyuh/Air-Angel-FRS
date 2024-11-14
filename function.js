// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Close dropdown when clicking outside
document.addEventListener("click", function(event) {
  const userIcon = document.querySelector(".user");
  const dropdown = document.querySelector(".dropdown");
  
  if (!userIcon.contains(event.target)) {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
});


