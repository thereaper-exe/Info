document.addEventListener('DOMContentLoaded', () => {
  // Add number indicators to feature list items
  const featuresList = document.querySelector('.features-list');
  featuresList.querySelectorAll('li').forEach((li, index) => {
    li.style.setProperty('--number', `'${index + 1}'`);
  });
  // Add smooth scroll behavior for links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  // Add intersection observer for fade-in animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    },
    {
      threshold: 0.1
    }
  );
  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    observer.observe(section);
  });
});