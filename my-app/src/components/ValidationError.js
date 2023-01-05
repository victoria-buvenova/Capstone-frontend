import React from "react";

export default function ValidationError(props) {
  return (
    <div className="p-3 mb-2 bg-danger bg-gradient text-white rounded-5">
      {props.errorMsg}
    </div>
  );
}
