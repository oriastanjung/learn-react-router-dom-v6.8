import React from "react";
import Button from "../Button";
import useNavbar from "./useNavbar";
function Navbar() {
  const { handlePergiKeHome, handlePergiKeUser } = useNavbar();
  return (
    <nav>
      <Button onClick={handlePergiKeUser}>Pergi ke halaman User</Button>
      <Button onClick={handlePergiKeHome}>Pergi ke halaman Homepage</Button>
    </nav>
  );
}

export default Navbar;
