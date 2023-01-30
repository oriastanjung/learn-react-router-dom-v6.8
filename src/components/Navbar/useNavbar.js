import React from "react";
import { useNavigate } from "react-router-dom";
function useNavbar() {
  const navigator = useNavigate();
  const handlePergiKeUser = () => {
    navigator("/user");
  };
  const handlePergiKeHome = () => {
    navigator("/");
  };

  return {
    handlePergiKeHome,
    handlePergiKeUser,
  };
}

export default useNavbar;
