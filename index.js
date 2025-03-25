
  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide',{
        type:'loop',
        autoplay:true,
        interval:4000
    });
    splide.mount();
  } );
  const ul =document.querySelector(".nav ul");
  const burger=document.getElementById("burger");
  burger.addEventListener("click",()=>{
    const trash=document.createElement("li");
    trash.innerHTML='<i class="fa-solid fa-xmark"></i>';
    trash.classList.add("xmark");
    ul.appendChild(trash);
    // ul.classList.toggle('nave');
    ul.style.display="block"
    burger.style.display="none"
    if (trash) {
      trash.addEventListener("click",()=>{
        ul.style.display="none"
       burger.style.display="block"
      })
    }
  })
  