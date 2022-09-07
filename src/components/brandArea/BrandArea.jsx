import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const BrandArea = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="brand-area section-space-bottom-100">
      <div className="container">
        <div className="brand-bg">
          <div className="row">
            <div className="col-lg-12">
              <div className="swiper-container brand-slider">
                <Carousel responsive={responsive} infinite={true}>
                  <div className="swiper-slide">
                    <a className="brand-item" href="#">
                      <img
                        src="../../images/brandArea/1-1.webp"
                        alt="Brand Image"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a className="brand-item" href="#">
                      <img
                        src="../../images/brandArea/1-2.webp"
                        alt="Brand Image"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a className="brand-item" href="#">
                      <img
                        src="../../images/brandArea/1-3.webp"
                        alt="Brand Image"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a className="brand-item" href="#">
                      <img
                        src="../../images/brandArea/1-4.webp"
                        alt="Brand Image"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a className="brand-item" href="#">
                      <img
                        src="../../images/brandArea/1-5.webp"
                        alt="Brand Image"
                      />
                    </a>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};