import React from "react";

function Review() {
  return (
    <div className="review-item mb-3">
      <div className="d-flex align-items-center">
        <div className="mr-2" style={{ backgroundColor: "#000", height: 32, width: 32, borderRadius: 16 }}></div>
        <small style={{ color: "rgba(0,0,0,0.7)" }}>First name Surname</small>
      </div>
      <div className="d-flex align-items-center mt-2">
        <div className="d-flex mr-2">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <small className="font-weight-bold" style={{ color: "rgba(0,0,0,0.7)" }}>
          Definitely Recommended
        </small>
      </div>
      <div className="d-flex flex-column">
        <small className="" style={{ color: "rgba(0,0,0,0.7)" }}>
          Reviewed in the United Kingdom on 14 January 2020
        </small>
        <small className="font-weight-bold mb-2" style={{ color: "#b12704", fontSize: 11 }}>
          Verified Purchase
        </small>
        <small>
          Morbi porttitor mattis nibh, non efficitur arcu lacinia a. Praesent arcu sapien, tempus eget felis ac,
          efficitur ultrices odio. Cras gravida orci nulla, ac venenatis sem dictum in. Aenean efficitur dictum magna ut
          convallis. Donec vel ipsum non orci aliquet blandit. Aliquam commodo, ex sit amet rutrum maximus, velit lorem
          rutrum felis, vitae laoreet felis libero a mauris. Nunc sit amet purus feugiat velit hendrerit aliquet at eu
          purus. Donec non dignissim diam. Quisque risus augue, molestie non commodo nec, semper sit amet ligula.
        </small>
      </div>
    </div>
  );
}

export default Review;
