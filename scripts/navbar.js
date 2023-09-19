///// Menu button functionality
const menuButton = document.querySelector('.menu');
const navigation = document.querySelector('nav');

menuButton.addEventListener('click', function (event) {
  event.stopPropagation(); // prevent click event from reaching the document body
  navigation.classList.toggle('active');
  menuButton.classList.toggle('active');
});

// Hide navbar if clicked outside of it
document.body.addEventListener('click', function (event) {
  if (!navigation.contains(event.target) && event.target !== menuButton) {
    navigation.classList.remove('active');
    menuButton.classList.remove('active');
  }
});

////// Activating navbar underline effect on larger devices
const mediumDevice = window.matchMedia('(min-width: 560px)');
const navLi = document.querySelectorAll('nav ul li');

function addUnderline(event) {
  // Event on medium and large devices
  if (event.matches) {
    navLi.forEach((li) => {
      li.classList.add('underline');
    });
  } // Event on small devices
  else {
    navLi.forEach((li) => {
      li.classList.remove('underline');
    });
  }
}

// Triggering function on load
addUnderline(mediumDevice);
// Triggering function on width change
mediumDevice.addEventListener('change', addUnderline);
