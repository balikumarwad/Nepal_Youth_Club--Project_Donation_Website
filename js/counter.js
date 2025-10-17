function initCounter() {
  const counters = document.querySelectorAll('.counter');
  
  // Comment out the animation logic and just set the final values
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    counter.innerText = target + '+';
  });
  
  /* Uncomment this block to enable animation
  const speed = 100;
  counters.forEach(counter => {
    const animate = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText.replace('+','');
      const increment = target / speed;
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(animate, 20);
      } else {
        counter.innerText = target + '+';
      }
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate();
          observer.unobserve(counter);
        }
      });
    });
    observer.observe(counter);
  });
  */
}

document.addEventListener('DOMContentLoaded', initCounter);