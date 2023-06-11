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
  constructor(list, item) {
    this.list = document.querySelectorAll(`${list} > li`)
    this.on = document.querySelector(`${list} > .list_more`)
    this.on.addEventListener("click", () => {
      console.log(this.list);
      this.list.forEach(element => {
        element.classList.remove("none")
        this.on.classList.add("onclick")
        this.on.classList.remove("list_more")
      });
    })
  }
}
console.log("bfgh");
let a = new More(".list__cakes")
