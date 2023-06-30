document.addEventListener('DOMContentLoaded', () => {
    const back = document.querySelector('.back');
    const navbar = document.querySelector('.navbar');
    
    back.addEventListener('click', () => {
      navbar.scrollIntoView();
    });
    
  });
  
