
// Mobile menu
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Load services from JSON
fetch('data/services.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('services-container');
    data.services.forEach(s => {
      const div = document.createElement('div');
      div.className = 'service-card';
      div.innerHTML = `<h3>${s.title}</h3><p>${s.desc}</p>`;
      container.appendChild(div);
    });
  });

// Form validation
document.getElementById('contactForm').addEventListener('submit', function(e){
  const email = document.getElementById('email').value;
  if(!email.includes('@')){
    alert('Invalid email');
    e.preventDefault();
  }
});
