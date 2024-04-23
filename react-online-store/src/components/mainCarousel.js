import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";

export default function MyCarousel() {
  const slideImages = [
    "https://mdbootstrap.com/img/new/slides/042.jpg",
    "https://img.freepik.com/premium-photo/showcasing-mobile-phones-arranged-podium-each-device-elegantly-displayed-with-attention-details-like-reflections-lighting_507704-11036.jpg",
    "https://img.freepik.com/premium-photo/mobile-phones-store-generative-ai_220873-21825.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1713398400&semt=ais",
  ];

  return (
    <MDBCarousel showControls showIndicators>
      {slideImages.map((item, idx) => {
        return (
          <MDBCarouselItem itemId={idx + 1} style={{ height: "90vh" }} key={idx}>
            <img src={item} className="d-block w-100" alt="..." />
            <div
              className="mask"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            ></div>

            <div className="carousel-caption d-none d-sm-block mb-5">
              <h1 className="mb-4">
                <strong>React Online Store</strong>
              </h1>
              <p>
                <strong>Your Gateway to Quality, Convenience, and Style</strong>
              </p>
              <p className="mb-4 d-none d-md-block">
                <strong>
                Explore a World of Endless Choices, Unmatched Quality, and Seamless Convenience. 
                Find Everything You Need and More, All at Your Fingertips. 
                Step Into a Realm of Style, Innovation, and Value
                 – Your Ultimate Destination for Online Shopping Bliss!
                </strong>
              </p>
            </div>

          </MDBCarouselItem>
        );
      })}
    </MDBCarousel>
  );
}
