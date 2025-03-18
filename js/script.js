document.addEventListener("DOMContentLoaded", function() {
  /* ----- Fade in .container using Intersection Observer ----- */
  const containers = document.querySelectorAll('.container');
  const observerOptions = {
    threshold: 0.1
  };
  
  const fadeInOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  };
  
  const observer = new IntersectionObserver(fadeInOnScroll, observerOptions);
  containers.forEach(container => observer.observe(container));

  /* ----- Back to Top Button ----- */
  const backToTopButton = document.getElementById("backToTopBtn");
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
