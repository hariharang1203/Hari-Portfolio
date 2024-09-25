     // Contact Form
     const form = document.getElementById('form');
     const result = document.getElementById('result');

     form.addEventListener('submit', function (e) {
         e.preventDefault();
         const formData = new FormData(form);
         const object = Object.fromEntries(formData);
         const json = JSON.stringify(object);
         result.innerHTML = "Please wait..."
         form.style.display = "none";

         fetch('https://api.web3forms.com/submit', {         // Fetch api from external source
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
             },
             body: json
         })
             .then(async (response) => {
                 let json = await response.json();
                 if (response.status == 200) {
                     result.innerHTML = "Form submitted successfully";
                     form.style.display = "none";

                 } else {
                     console.log(response);
                     result.innerHTML = json.message;
                 }
             })
             .catch(error => {
                 console.log(error);
                 result.innerHTML = "Something went wrong!";
             })
             .then(function () {
                 form.reset();
                 setTimeout(() => {
                     result.style.display = "none";
                     form.style.display = "block";

                 }, 1000);
             });
     });


              //Navbar for auto scroll
     let home_nav = document.querySelector('#home-nav');
     let about_nav = document.querySelector('#about-nav');
     let skill_nav = document.querySelector('#skill-nav');
     let project_nav = document.querySelector('#project-nav');
     let contact_nav = document.querySelector('#contact-nav');

     home_nav.addEventListener('click', (event) => {
         event.preventDefault();
         document.querySelector('#home').scrollIntoView({ behavior: "smooth" });
     });

     about_nav.addEventListener('click', (event) => {
         event.preventDefault();
         document.querySelector('#about').scrollIntoView({ behavior: "smooth" });
     });

     skill_nav.addEventListener('click', (event) => {
         event.preventDefault();
         document.querySelector('#skills').scrollIntoView({ behavior: "smooth" });
     });

     project_nav.addEventListener('click', (event) => {
         event.preventDefault();
         document.querySelector('#projects').scrollIntoView({ behavior: "smooth" });
     });

     contact_nav.addEventListener('click', (event) => {
         event.preventDefault();
         document.querySelector('#contact').scrollIntoView({ behavior: "smooth" });
     });

     let contact = document.querySelector('.contact');
     contact.addEventListener('click', (event) => {
         event.preventDefault();
         document.querySelector('#contact-info').scrollIntoView({ behavior: "smooth" });
     });


     let navItems = document.querySelectorAll('.nav-items');

     navItems.forEach(item => {
         item.addEventListener('click', (event) => {
             event.preventDefault();

             navItems.forEach(nav => nav.querySelector('li').classList.remove('active'));

             item.querySelector('li').classList.add('active');


             let targetId = item.querySelector('li').id.replace('-nav', '');
             document.querySelector(`#${targetId}`).scrollIntoView({ behavior: 'smooth' });
         });
     });




     //Navbar Menu click event

     let menu_btn = document.querySelector('#menu');
     let nav_links = document.querySelector('.nav-links');
     menu.addEventListener('click', () => {
         nav_links.classList.toggle('showmenu');

     });
     home_nav.addEventListener('click', () => {
         nav_links.classList.remove('showmenu');
     });

     about_nav.addEventListener('click', () => {
         nav_links.classList.remove('showmenu');
     });

     skill_nav.addEventListener('click', () => {
         nav_links.classList.remove('showmenu');
     });

     project_nav.addEventListener('click', () => {
         nav_links.classList.remove('showmenu');
     });

     contact_nav.addEventListener('click', () => {
         nav_links.classList.remove('showmenu');
     });



         // Swiper Actions
     const swiper = new Swiper('.swiper', {
         loop: true,
         grabCursor: true,
         spaceBetween: 30,
         pagination: {
             el: '.swiper-pagination',
             clickable: true,
             dynamicBullets: true,  
         },
         navigation: {
             nextEl: '.swiper-button-next',
             prevEl: '.swiper-button-prev',
         },
         breakpoints: {
             0: {
                 slidesPerView: 1,
             },
             640: {
                 slidesPerView: 2,
             },
             1024: {
                 slidesPerView: 3,
             },
             1440: {
                 slidesPerView: 3,
             }
         }
     });