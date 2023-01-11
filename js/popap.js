let popap = document.querySelector('.popap'),
    popapBtn = document.querySelector('.popap__btn');

const funcOpen = () => {
   popap.classList.add('active');
}

window.addEventListener("load", funcOpen);

popapBtn.onclick = function () {
   popap.classList.remove('active');
}