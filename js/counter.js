function initCounter() {
  const counters = document.querySelectorAll('.counter');
  const speed = 100; // lower = faster

  counters.forEach(counter => {
    const animate = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText.replace('+',''); // remove + if exists
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
}
