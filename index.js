(function () {
  'use strict'

  document.addEventListener('DOMContentLoaded', function(event) {
    const cards = document.getElementsByClassName('cards__item');
    const cardsDescription = document.getElementsByClassName('cards__item-footer');

    function hideAllDescription() {
      for (let i = 0; i < cardsDescription.length; i++) {
        cardsDescription[i].classList.remove('active');
      }
    }

    for (let item of cards) {
      let btn = item.querySelector('.cards__item-btn');
      let description = item.querySelector('.cards__item-footer');


      btn.onclick = function () {
        if(description.classList.contains('active')) {
          description.classList.remove('active');
        } else {
          hideAllDescription();
          description.classList.add('active');
        }
      }
    }
  })

})();


