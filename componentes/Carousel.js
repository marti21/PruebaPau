import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos del carrusel
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  return (
    <Carousel emulateTouch axis="horizontal" autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={2500} className="carousel-content">
      <div>
        <img src="/images/image1.jpg" alt="Image 1" style={{ height: '600px' }}/>
      </div>
      <div>
        <img src="/images/image2.jpg" alt="Image 2" style={{ height: '600px' }}/>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;