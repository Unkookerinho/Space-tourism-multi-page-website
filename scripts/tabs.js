const options = document.querySelectorAll('#option');
const interactive = document.querySelectorAll('.interactive');

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
});

// Adding functionality to option list elements
options.forEach((option) => {
  option.addEventListener('click', (event) => {
    event.preventDefault();
    // Getting element's target
    const targetId = option.getAttribute('data-target');

    // Execute only if element is not already active
    if (!option.classList.contains('active')) {
      // Deactivating other options
      options.forEach((otherOption) => {
        otherOption.classList.remove('active');
      });
      interactive.forEach((element) => {
        element.style.opacity = 0;
        element.classList.remove('active');
      });

      // Activating clicked one
      option.classList.add('active');

      // Animate clicked one
      const targetedElement = document.querySelectorAll(`#${targetId}`);
      targetedElement.forEach((element) => {
        element.classList.add('active');
        setTimeout(() => {
          element.style.opacity = 1;
        }, 10);
      });
    }
  });
});
