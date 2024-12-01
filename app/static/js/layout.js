       const observerOptions = {
        threshold: 0.1,
        rootMargin: '50px'
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
          }
        });
      }, observerOptions);
      
      document.querySelectorAll('.product').forEach(product => {
        observer.observe(product);
      });
