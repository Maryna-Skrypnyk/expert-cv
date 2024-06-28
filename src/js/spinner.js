const spinner = document.querySelector('.spinner');

function showSpinner() {
  spinner.classList.add('is-open');
}

function hideSpinner() {
  setTimeout(function () {
    spinner.classList.remove('is-open');
  }, 200);
}

showSpinner();
window.addEventListener('load', hideSpinner);
