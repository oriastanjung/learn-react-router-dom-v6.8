import React from "react";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
function Detailpage() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <Navbar />
      detail ke {id}
    </div>
  );
}

export default Detailpage;
