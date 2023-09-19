const options = document.querySelectorAll('#option');
const interactive = document.querySelectorAll('.interactive');
const interactiveImage = document.querySelectorAll('.interactive-image');

// Animation on load
document.addEventListener('DOMContentLoaded', () => {
  // Text animation
  interactive.forEach((element) => {
    if (element.classList.contains('active')) {
      setTimeout(() => {
        element.style.opacity = 1;
      }, 10);
    }
  });
  // Image animation
  interactiveImage.forEach((element) => {
    if (element.classList.contains('active')) {
      setTimeout(() => {
        element.style.opacity = 1;
      }, 10);
    }
  });
});

// Adding functionality to option list elements
options.forEach((option) => {
  option.addEventListener('click', (event) => {
    event.preventDefault();
    // Execute only if element is not already active
    if (!option.classList.contains('active')) {
      // Deactivating other options
      options.forEach((otherOption) => {
        otherOption.classList.remove('active');
      });
      // Text animation
      interactive.forEach((element) => {
        element.style.opacity = 0;
        element.classList.remove('active');
      });
      // Image animation
      interactiveImage.forEach((element) => {
        element.style.opacity = 0;
        element.classList.remove('active');
      });

      // Activating clicked one
      option.classList.add('active');
      // Text animation
      interactive.forEach((element) => {
        if (element.classList.contains(option.innerText.toLowerCase()))
          element.classList.add('active');

        setTimeout(() => {
          element.style.opacity = 1;
        }, 10);
      });
      // Image animation
      interactiveImage.forEach((element) => {
        if (element.classList.contains(option.innerText.toLowerCase()))
          element.classList.add('active');

        setTimeout(() => {
          element.style.opacity = 1;
        }, 10);
      });
    }
  });
});
