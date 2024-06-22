/* credit to https://www.youtube.com/watch?v=kQGKU4u9Dng for helping with this */
/*for navigation menu */
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

//breadcrumbs for essays
document.addEventListener('DOMContentLoaded', function () {
   const breadcrumbContainer = document.querySelector('.breadcrumbs');

   if (breadcrumbContainer) {
       const path = window.location.pathname.split('/').filter(segment => segment);
       const isEssayPage = path.includes('essays');

       let breadcrumbHtml = `<a href="/WSOA3028A_2549309/index.html">Home</a>`;
       
       if (isEssayPage) {
           breadcrumbHtml += ` > <a href="/WSOA3028A_2549309/essays/index.html">Essays</a>`;
           const essayIndex = path.indexOf('essays') + 1;
           if (essayIndex < path.length) {
               const essayTitle = path[essayIndex].replace('.html', '').replace(/-/g, ' ').toUpperCase();
               breadcrumbHtml += ` > ${essayTitle}`;
           }
       }

       breadcrumbContainer.innerHTML = breadcrumbHtml;
   }
});

/*Sidebar menu for the individual essays */
document.addEventListener('DOMContentLoaded', () => {
   const essays = [
       { title: "UX & UI Analysis", link: "essay1.html"},
       { title: "Digital Colonialism ", link: "essay2.html" },
   
       // Add more essay entries here
   ];

   const essayDropdown = document.getElementById('essay-dropdown');

   const currentPath = window.location.pathname.split('/').pop();
   let currentEssayIndex = essays.findIndex(essay => essay.link === currentPath);

   // Populate dropdown menu
   if (essayDropdown) {
       essays.forEach((essay, index) => {
           const option = document.createElement('option');
           option.value = essay.link;
           option.textContent = essay.title;
           if (index === currentEssayIndex) {
               option.selected = true;
           }
           essayDropdown.appendChild(option);
       });

       essayDropdown.addEventListener('change', (event) => {
           const selectedEssay = event.target.value;
           if (selectedEssay) {
               window.location.href = selectedEssay;
           }
       });
   }
 });