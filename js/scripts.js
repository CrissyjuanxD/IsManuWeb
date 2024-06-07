var swiper = new Swiper(".slide-content", {
  slidesPerView: 2,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },


  breakpoints:{
      0: {
          slidesPerView: 1,
      },
  },
});

function showOriginalImage() {
  const originalImage = document.getElementById('original-image');
  const imageUrl = originalImage.src; // Obtiene la URL de la imagen
  window.open(imageUrl, '_blank'); // Abre la imagen en una nueva ventana o pestaña
}
