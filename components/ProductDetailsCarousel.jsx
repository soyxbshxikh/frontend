import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import React from "react";

const ProductDetailsCarousel = ({ images }) => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.attributes.url} alt={`Product image ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
