
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
  
  function sendMail(){
    let params={
      name:document.getElementById("nom").value,
      prenom:document.getElementById("prenom").value,
      email:document.getElementById("mail").value,
      subject:document.getElementById("object").value,
      message:document.getElementById("texter").value,
      phone:document.getElementById("tel").value,
    }
    emailjs.send("service_x58lvu9","template_oia6h6z",params).then(alert("Message envoyé avec succes"));
  }
  