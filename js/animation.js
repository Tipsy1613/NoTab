let animItems = document.querySelectorAll('._anim');

if(animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll () {
      for (let i = 0; i < animItems.length; i++) {
         let animItem = animItems[i];
         let animItemHeight = animItem.offsetHeight;
         let animItemOffset = offset(animItem).top;
         let animStart = 2;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }
         if (scrollY > (animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
            animItem.classList.add('anim-active')            
         }
      }
   }

   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }

   // setTimeout(() => {
   //    animOnScroll ();
   // }, 300);
}