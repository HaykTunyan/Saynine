import React, { Fragment } from "react";
import Container from "../Container";

const BannerTitle = ({ title, paragraph }) => {
  return (
    <div className="banner-bg">
      <Container className="flex justify-center">
        <div className="mt-10 text-center w-42">
          <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl leading-tight text-center">
            {title}
          </h2>
          <div className="pt-2" />
          <p className="leading-6 px-4">{paragraph}</p>
          <div className="pt-6" />
        </div>
      </Container>
    </div>
  );
};

export default BannerTitle;
