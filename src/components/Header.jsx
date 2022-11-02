import React from "react";

export const Header = () => {
  return (
    <>
      <header id="header">
        <div className="header_inner">
          <h1>
            <a href="/" className="logo">
              <span className="blind">프로미스</span>
            </a>
          </h1>
          <div className="top_menu">
            <span>약속 만들기</span>
            <span>피드백 보내기</span>
          </div>
        </div>
      </header>
      <div className="line"></div>
    </>
  );
};

// props로 전달하면 App.js에서 component를 가져올때 하면 됨
//
