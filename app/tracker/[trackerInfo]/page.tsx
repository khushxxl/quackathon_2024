import React from "react";

function TrackerDetails({ params }) {
  return (
    <div>
      <h1 className="text-white"> {params.name}</h1>
    </div>
  );
}

export default TrackerDetails;
