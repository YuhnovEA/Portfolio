const modalWindowBtn = document.querySelector('.hero__form__button')
modalWindowBtn.addEventListener('click', test)
function test(event) {
  event.preventDefault()
  document.querySelector('.modal-window').classList.toggle('none')
}
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
new Accordion('.accordion-container')


class More {
  constructor(list) {
    this.list = document.querySelectorAll(`${list} > li`)
    this.on = document.querySelector(`${list} > .list__more`)
    this.on.addEventListener("click", () => {
      this.on.classList.toggle("onclick")
      this.list.forEach(element => {
        if (element.classList.contains("item__headen")) {
          element.classList.toggle("none")
        }
      });
    })
  }
}
new More(".list__cakes")
// второй блок
new More(".list__cakes__two")