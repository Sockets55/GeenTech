       /* This JavaScript code snippet is setting up an Intersection Observer to detect when elements
       with the class 'product' are intersecting with a specified root element. */
       const observerOptions = {
        threshold: 0.1,
        rootMargin: '150px'
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
