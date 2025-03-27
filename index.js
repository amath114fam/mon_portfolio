
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
    ul.style.left="0px"
    burger.style.display="block"
    if (trash) {
      trash.addEventListener("click",()=>{
        ul.style.left="-290px"
        burger.style.display="block"
      })
    }
  })
  