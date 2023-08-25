import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselUI = (props) => {
  const { slideImages, width, height, indicator, status, arrows } = props;
  return (
    <>
      <Carousel
        showArrows={arrows}
        showStatus={status}
        showIndicators={indicator}
        autoPlay
        infiniteLoop
        showThumbs={false}
      >
        {slideImages.map((img, id) => (
          <div key={`${img}.${id}`}>
            <img
              src={img}
              alt="menus"
              className="object-cover"
              style={{
                width: width ? `${width}px` : "100%", // provide a default value in case width is not defined
                height: height ? `${height}px` : "auto" // provide a default value in case height is not defined
              }}
            />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default CarouselUI;