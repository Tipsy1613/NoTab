let form = document.querySelector('.form'),
   formInput = document.querySelectorAll('.form__input');


form.onsubmit = function () {
   formInput.forEach(function (input) {
      if (input.value === '') {
         input.classList.add('error');
      } else {
         input.classList.remove('error');
      }
   })

   return false
}