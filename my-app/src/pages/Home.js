import React from "react";
import { MDBCarousel, MDBCarouselItem, MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import CardsServices from "../components/CardsServices";

export default function Home() {
  return (
    <>
      <MDBCarousel showIndicators showControls fade>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src="https://media.istockphoto.com/id/516327502/vi/anh/thi%E1%BA%BFt-y%E1%BA%BFu-tr%E1%BB%8B-li%E1%BB%87u-spa.jpg?s=612x612&w=0&k=20&c=Up4iSP74VmLd8T4JO03pUGfuMcP3Md3oxtfrBssQxCI="
          alt="..."
        >
          <Link to="/book">
            <MDBBtn
              className="position-absolute top-0 start-50 translate-middle"
              color="secondary"
              size="lg"
            >
              Book an appointment
            </MDBBtn>
          </Link>
        </MDBCarouselItem>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src="https://media.istockphoto.com/id/949149908/vi/anh/s%E1%BA%A3n-ph%E1%BA%A9m-trang-%C4%91i%E1%BB%83m-v%C3%A0-m%E1%BB%B9-ph%E1%BA%A9m-trang-tr%C3%AD-tr%C3%AAn-n%E1%BB%81n-m%C3%A0u-ph%E1%BA%B3ng-n%E1%BA%B1m-kh%C3%A1i-ni%E1%BB%87m-vi%E1%BA%BFt-blog-th%E1%BB%9Di-trang.jpg?s=612x612&w=0&k=20&c=yVmTldU7xuE8jCZvFtwuC_1GZNCJDRylnIQBLxUzdPM="
          alt="..."
        >
          <Link to="/book">
            <MDBBtn
              className="position-absolute top-0 start-50 translate-middle"
              color="secondary"
              size="lg"
            >
              Book an appointment
            </MDBBtn>
          </Link>
        </MDBCarouselItem>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src="https://media.istockphoto.com/id/618754142/vi/anh/b%C3%A0n-tay-c%E1%BB%A7a-ng%C6%B0%E1%BB%9Di-ph%E1%BB%A5-n%E1%BB%AF-xinh-%C4%91%E1%BA%B9p-c%E1%BA%A7m-m%E1%BB%99t-chi%E1%BA%BFc-c%E1%BB%91c-tr%E1%BA%AFng.jpg?s=612x612&w=0&k=20&c=sIiURft-WWuq8q_ePUi4SHT4qCN8lqfE9yGwT76SwEw="
          alt="..."
        >
          <Link to="/book">
            <MDBBtn
              className="position-absolute top-0 start-50 translate-middle"
              color="secondary"
              size="lg"
            >
              Book an appointment
            </MDBBtn>
          </Link>
        </MDBCarouselItem>{" "}
      </MDBCarousel>

      <div
        className="cards-services"
        style={{
          padding: "80px",
        }}
      >
        <CardsServices />
      </div>
    </>
  );
}
