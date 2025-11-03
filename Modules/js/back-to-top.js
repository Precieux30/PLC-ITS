// Back to top button behavior
document.addEventListener('DOMContentLoaded', function() {
  try {
    var btn = document.createElement('button');
    btn.id = 'back-to-top';
    btn.setAttribute('aria-label', 'Subir arriba');
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.59 5.58L20 12l-8-8z"/></svg>';
    document.body.appendChild(btn);

    var threshold = 200;
    window.addEventListener('scroll', function() {
      if (window.scrollY > threshold) {
        btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
    });

    btn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  } catch (e) {
    console && console.error && console.error('back-to-top error', e);
  }
});
