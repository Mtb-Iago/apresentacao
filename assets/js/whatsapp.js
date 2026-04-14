(function() {
    const phone = "5577988162530";
    const message = encodeURIComponent("Olá Iago! Vi seu portfólio e gostaria de conversar.");
    
    const body = document.querySelector("body");
  
    const btnWhatsapp = document.createElement("a");
    
    btnWhatsapp.setAttribute("href", `https://wa.me/${phone}?text=${message}`);
    btnWhatsapp.setAttribute("target", "_blank");
    btnWhatsapp.setAttribute("class", "whatsapp-link");
    btnWhatsapp.setAttribute("title", "Fale comigo no WhatsApp");
  
    btnWhatsapp.innerHTML = '<i class="fa-brands fa-whatsapp"></i>';
  
    body.appendChild(btnWhatsapp);
  })();