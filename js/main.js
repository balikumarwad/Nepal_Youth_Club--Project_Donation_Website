function loadSection(file, containerId, callback) {
  fetch(file)
    .then(response => response.text())
    .then(html => {
      document.getElementById(containerId).innerHTML = html;
      if(callback) callback(); // run counter initialization after loading
    })
    .catch(err => console.error(`Error loading ${file}:`, err));
}

// Load sections in order
loadSection('components/about.html', 'about-section');
loadSection('components/counter.html', 'counter-section', () => {
    if(typeof initCounter === 'function') initCounter();
});
loadSection('components/gallery.html', 'gallery-section');
