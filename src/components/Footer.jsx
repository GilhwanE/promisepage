import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <>
      <footer className="bg_container light-blue">
        <div className="se_desc footer">
          <ul>
            <li>연락처</li>
            <li>이메일 : dyghks123@gmail.com</li>
            <li>핸드폰번호 : 010-4175-3679</li>
          </ul>
          <ul>
            <li>
              <a href="">
                <FontAwesomeIcon icon={faGithub} size={"2x"} />
              </a>
            </li>
            <li>
              <a href="">
                <FontAwesomeIcon icon={faInstagram} size={"2x"} />
              </a>
            </li>
          </ul>
          <ul>
            <li>Copyright ⓒ Promise. All Rights Reserved</li>
          </ul>
        </div>
      </footer>
    </>
  );
};
