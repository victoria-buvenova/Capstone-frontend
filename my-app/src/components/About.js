import React from "react";

export default function About() {
  return (
    <div className="d-flex flex-row gap-4">
      <img
        src="../img123.jpeg"
        alt="Eleonora"
        style={{
          padding: "70px",
          height: "450px",
          width: "400px",
        }}
      />
      <div className="p-4 row-cols-1 row-cols-md-2 g-6 mt-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}
