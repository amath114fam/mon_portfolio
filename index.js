
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
  const btn=document.getElementById("btn");
  // btn.addEventListener("click",()=>{
  //   alert("no")
  // })
  const nom=document.getElementById("nom")
  const prenom=document.getElementById("prenom")
  const emaile=document.getElementById("mail")
  const messe=document.getElementById("texter")
  const ob=document.getElementById("object")
  const tell=document.getElementById("tel")
  
  btn.addEventListener("click",()=>{
    let nam=document.getElementById("nom").value
    let maile=document.getElementById("mail").value
    let mess=document.getElementById("texter").value
    const nomvide=nam.trim()===""
    const mailvide=maile.trim()===""
    const messvide=mess.trim()===""
    if (nomvide||mailvide||messvide) {
      alert("non");
    } else {
      sendMail();
    }
    nom.value=""
    prenom.value=""
    emaile.value=""
    messe.value=""
    ob.value=""
    tell.value=""
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
    emailjs.send("service_4hqc0ti","template_7yaw37s",params).then(alert("Message envoyé avec succès"));
  }

  