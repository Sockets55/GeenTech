document.addEventListener('DOMContentLoaded', function() {
    const categoriaItems = document.querySelectorAll('.categoria-item');
    
    categoriaItems.forEach(item => {
      item.addEventListener('click', function(e) {
        if (e.target === this) {
          this.classList.toggle('active');
        }
      });
    });
  });