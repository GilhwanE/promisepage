import React from "react";
import imgA from "../assets/image/content_img01.png";

export const Section = () => {
  return (
    <>
      <section className="container">
        <div className="wrapper">
          <div className="se_title" data-aos="fade-down">
            <h1>
              약속을 잡는
              <br />
              가장 쉬운 방법
            </h1>
            <p>친구들과 약속을 잡아보세요</p>
          </div>

          <div className="btn promise">
            <p>약속 만들기</p>
          </div>

          <div className="content_img">
            <img src={imgA} alt="달력이미지" />
          </div>
        </div>
      </section>

      <section className="bg_container">
        <div className="se_desc">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias totam at debitis aut cumque quod, sit,
            expedita praesentium error nam ut aliquid deleniti rerum harum repellendus! Eius omnis exercitationem
            debitis.
          </p>
        </div>
      </section>

      <section className="container">
        <div>
          <p>💡 다수의 인원과 약속을 잡고 싶지만 리드하기 귀찮을 때 URL하나로 약속을 잡아보세요!</p>
        </div>
      </section>
    </>
  );
};
