    // Añade un evento de carga del DOM para inicializar el carousel
    document.addEventListener('DOMContentLoaded', function () {
        var myCarousel = document.getElementById('carouselExampleIndicators');
        var carousel = new bootstrap.Carousel(myCarousel, {
            interval: 3000, // Cambia de slide cada 3 segundos
            wrap: true // Vuelve al primer slide después del último
        });

        // Inicia el movimiento automático
       
        carousel.cycle(carouselExampleIndicators);
        
    });

