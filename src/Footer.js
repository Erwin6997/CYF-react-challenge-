import React from "react";

let footer = [
  "Meisam Erwin Zarghani",
  "https://www.Zarghani.m@Gmail.com.com",
  "00"
];
const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        {footer.map((foot, index) => (
          <li key={index}>{foot}</li>
        ))}
      </ul>
    </footer>
  );
};
export default Footer;
