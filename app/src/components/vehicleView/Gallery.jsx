import React from "react";
import { Carousel } from "react-carousel-minimal";

function Gallery(props) {
  const mockData = [
    {
      image:
        "https://img.freepik.com/premium-vector/different-type-cars-illustration-set-car-symbol-collection-car-icon-pack_7450-493.jpg?w=2000",
    },
    {
      image:
        "https:www.motortrend.com/uploads/sites/5/2019/10/SEMA-2019-Hellwig-Ford-Ranger.jpg",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  const style = {
    textAlign: "center",
    maxWidth: "850px",
    maxHeight: "500px",
    margin: "40px auto",
  };

  return (
    <div className={"carousel"}>
      <Carousel
        data={mockData}
        width="850px"
        height="500px"
        captionStyle={captionStyle}
        radius="10px"
        slideNumber={true}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={false}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={true}
        thumbnailWidth="100px"
        style={style}
      ></Carousel>
    </div>
  );
}

export default Gallery;
