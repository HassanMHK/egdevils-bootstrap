const egdTitle = document.querySelector(".egd-container");

// preloader
const preloader = document.querySelector('.preloader');
window.addEventListener('load', function(){
    preloader.classList.add("hide-preloader");
});

egdTitle.addEventListener("click", function () {
    window.location.href = "index.html";
  });