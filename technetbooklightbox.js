document.addEventListener('DOMContentLoaded', function() {
  const imgs = document.querySelectorAll('.post-body img, .separator img');
  if (!imgs.length) return;

  const overlay = document.createElement('div');
  overlay.className = 'technet-lightbox-overlay';
  overlay.innerHTML = `
    <div class="technet-lightbox-inner">
      <img class="technet-lightbox-img" src="" alt="">
    </div>
    <button class="technet-lightbox-close" aria-label="Close">✕</button>
  `;
  document.body.appendChild(overlay);

  const imgBox = overlay.querySelector('.technet-lightbox-img');
  const closeBtn = overlay.querySelector('.technet-lightbox-close');

  function getFullRes(src) {
    // Convert Blogger resized URLs to full res (s0)
    return src.replace(/\/(s\d+|w\d+|h\d+|rw)\//, '/s0/');
  }

  function openLightbox(src) {
    const fullSrc = getFullRes(src);
    imgBox.src = fullSrc;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    imgBox.src = '';
  }

  imgs.forEach(img => {
    img.addEventListener('click', e => {
      e.preventDefault();
      openLightbox(img.src);
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeLightbox();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });
});
