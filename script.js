function searchMenu() {

  const searchInput = document.querySelector("#searchbox");

  searchInput.addEventListener("keyup", function () {

    let data = this.value.toUpperCase();
    let h5 = document.querySelectorAll("#product");


    for (let i = 0; i < h5.length; i++) {
      console.log(h5[i].innerHTML);
      if (h5[i].innerHTML.toUpperCase().indexOf(data) > -1) {
        // eşleşme var
        h5[i].style.display = "";


      } else {
        // eşleşme yok
        h5[i].style.display = "none";
      }
    }

  });

}

searchMenu();



const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);



menuItems.forEach(
  function (menuItem) {
    menuItem.addEventListener("click", toggleMenu);
  }
)


const modalButton = document.querySelector('#girisYap');
const modal = document.querySelector('.modal');
const modalClose = document.getElementById('modal-close');

modalClose.addEventListener('click', (e) => {
  modal.style.display = 'none';
})

modalButton.addEventListener('click', (e) => {
  modal.style.display = 'flex';
})


const modalGiris=document.querySelector('#girisMobil');


modalClose.addEventListener('click', (e) => {
  modal.style.display = 'none';
})

modalGiris.addEventListener('click', (e) => {
  modal.style.display = 'flex';
})
