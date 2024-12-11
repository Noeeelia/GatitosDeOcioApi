//Url de la API
const url = 'https://api.thecatapi.com/v1/images/search';

//Obtener el boton y el contenedor
const btnCat = document.querySelector('#btn-cat');
const catImgContainer = document.querySelector('#cat-img-container');

//Escucha el clic
btnCat.addEventListener('click', () => {
    //Llamado a la API
    fetch(url)
        //Convertir respuesta en JSON
        .then(response => response.json())
        .then(data => {
            //Obtener url de img del gatito
            const catImgUrl = data[0].url;

            //Agregar la imagen como background al container
            catImgContainer.style.backgroundImage = `url('${catImgUrl}')`;
        })

        .catch(error => console.log(error));
});


// Datos curiosos sobre gatos
const catFacts = [
  "Los gatos tienen más de 20 músculos en cada oreja para moverlas en cualquier dirección.",
  "Los gatos duermen entre 12 y 16 horas al día, ¡son los maestros del descanso!",
  "Pueden correr a una velocidad de hasta 48 km/h en distancias cortas.",
  "Cada gato tiene un patrón único de huellas en la nariz, como las huellas dactilares humanas.",
  "Los gatos no tienen glándulas sudoríparas en todo el cuerpo, solo sudan por las almohadillas de sus patas."
];

// Lógica para mostrar curiosidades
const factButton = document.querySelector('.fact-btn');
const factDisplay = document.querySelector('#fact-display');

factButton.addEventListener('click', () => {
  const randomFact = catFacts[Math.floor(Math.random() * catFacts.length)];
  factDisplay.textContent = randomFact;
});



//Validaciones del formulario
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const messageError = document.getElementById("message-error");

  // Validar el campo de nombre
  function validateName() {
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (nameRegex.test(nameInput.value.trim())) {
      nameInput.style.backgroundColor = "lightgreen";
      nameError.textContent = "";
      return true;
    } else {
      nameInput.style.backgroundColor = "lightcoral";
      nameError.textContent = "El nombre solo puede contener letras y espacios.";
      return false;
    }
  }

  // Validar el campo de correo electrónico
  function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(emailInput.value.trim())) {
      emailInput.style.backgroundColor = "lightgreen";
      emailError.textContent = "";
      return true;
    } else {
      emailInput.style.backgroundColor = "lightcoral";
      emailError.textContent = "Ingresa un correo electrónico válido.";
      return false;
    }
  }

  // Validar el campo de mensaje
  function validateMessage() {
    const messageRegex = /[a-zA-Z0-9.,!?ñÑáéíóúÁÉÍÓÚ\s]+/;
    if (messageRegex.test(messageInput.value.trim()) && messageInput.value.trim() !== "") {
      messageInput.style.backgroundColor = "lightgreen";
      messageError.textContent = "";
      return true;
    } else {
      messageInput.style.backgroundColor = "lightcoral";
      messageError.textContent = "El mensaje debe contener letras, números o caracteres especiales.";
      return false;
    }
  }

  // Evento de validación en tiempo real
  nameInput.addEventListener("input", validateName);
  emailInput.addEventListener("input", validateEmail);
  messageInput.addEventListener("input", validateMessage);

  // Validar el formulario al enviar
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isMessageValid) {
      document.getElementById("form-feedback").textContent = "Formulario enviado exitosamente.";
      form.reset();
      nameInput.style.backgroundColor = "";
      emailInput.style.backgroundColor = "";
      messageInput.style.backgroundColor = "";
    } else {
      document.getElementById("form-feedback").textContent = "Por favor, corrige los errores antes de enviar.";
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Menú hamburguesa
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  menuToggle?.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Navegación activa
  const navLinks = document.querySelectorAll('.nav-link');
  
  const setActiveLink = () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        const targetId = section.getAttribute('id');
        
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${targetId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  // Evento scroll para actualizar link activo
  window.addEventListener('scroll', setActiveLink);

  // Click en links del menú
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  });
});
