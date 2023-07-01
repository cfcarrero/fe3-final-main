import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Powered by</p>
      <img src={"./images/DH.png"} alt="DH-logo" className="logo-footer" />
      <div className="socialIcons">
        <img src={"./images/ico-facebook.png"} alt="ico-facebook" />
        <img src={"./images/ico-instagram.png"} alt="ico-instagram" />
        <img src={"./images/ico-whatsapp.png"} alt="ico-whatsapp" />
        <img src={"./images/ico-tiktok.png"} alt="ico-tiktok" />
      </div>
    </footer>
  );
};

export default Footer;
