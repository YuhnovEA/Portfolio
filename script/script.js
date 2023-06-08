const modalWindowBtn = document.querySelector('.hero__form__button')
modalWindowBtn.addEventListener('click', () => {
    document.querySelector('.modal-window').classList.toggle('none')
})
// -------swiper------
const swiper = new Swiper('.swiper', {
    // Optional parameters
    //direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
  