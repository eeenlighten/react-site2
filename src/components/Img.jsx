import React from 'react'
import img from '../assets/images/sketch01.jpg'; 
import img2 from '../assets/images/sketch02.jpg'; 
import img3 from '../assets/images/sketch03.jpg'; 
import img4 from '../assets/images/sketch04.jpg'; 
import img5 from '../assets/images/sketch05.jpg'; 
import img6 from '../assets/images/sketch06.jpg'; 
import img7 from '../assets/images/sketch07.jpg'; 
import img8 from '../assets/images/sketch08.jpg'; 
import img9 from '../assets/images/yellowarrow.png'; 




function Img(props) {
  return (
    <section id="imageType" className={props.fonts}>
      <h2>현장스케치</h2>
      <p>펫 아카데미 전용 훈련장에서 현장 실습을 하고 있습니다</p>
      <div className="imageType__inner container">
          <article className="imageType__sketch">
              <figure className="sketch__header">
                  <img className="img" src={img} alt="이미지1" />
              </figure>
              <div className="sketch__body">
                  <h3 className="title">현장스케치1</h3>
                  <p className="desc">현장 학습 보러가기</p>
                  <a href="/" className="btn">
                    <img className="img" src={img9} alt="이미지2" />
                  </a>
              </div>
          </article>
          <article className="imageType__sketch">
              <figure className="sketch__header">
              <img className="img" src={img2} alt="이미지3" />
              </figure>
              <div className="sketch__body">
                  <h3 className="title">현장스케치2</h3>
                  <p className="desc">현장 학습 보러가기</p>
                  <a href="/" className="btn">
                    <img className="img" src={img9} alt="이미지4" />
                  </a>
              </div>
          </article>
          <article className="imageType__sketch">
              <figure className="sketch__header">
              <img className="img" src={img3} alt="이미지5" />
              </figure>
              <div className="sketch__body">
                  <h3 className="title">현장스케치3</h3>
                  <p className="desc">현장 학습 보러가기</p>
                  <a href="/" className="btn">
                    <img className="img" src={img9} alt="이미지6" />
                  </a>
              </div>
          </article>
          <article className="imageType__sketch">
              <figure className="sketch__header">
              <img className="img" src={img4} alt="이미지7" />
              </figure>
              <div className="sketch__body">
                  <h3 className="title">현장스케치4</h3>
                  <p className="desc">현장 학습 보러가기</p>
                  <a href="/" className="btn">
                    <img className="img" src={img9} alt="이미지8" />
                  </a>
              </div>
          </article>
          <article className="imageType__sketch">
              <figure className="sketch__header">
              <img className="img" src={img5} alt="이미지9" />
              </figure>
              <div className="sketch__body">
                  <h3 className="title">현장스케치5</h3>
                  <p className="desc">현장 학습 보러가기</p>
                  <a href="/" className="btn">
                    <img className="img" src={img9} alt="이미지10" />
                  </a>
              </div>
          </article>
          <article className="imageType__sketch">
              <figure className="sketch__header">
              <img className="img" src={img6} alt="이미지11" />
              </figure>
              <div className="sketch__body">
                  <h3 className="title">현장스케치6</h3>
                  <p className="desc">현장 학습 보러가기</p>
                  <a href="/" className="btn">
                    <img className="img" src={img9} alt="이미지12" />
                  </a>
              </div>
          </article>
          <article className="imageType__sketch">
              <figure className="sketch__header">
              <img className="img" src={img7} alt="이미지13" />
              </figure>
              <div className="sketch__body">
                  <h3 className="title">현장스케치7</h3>
                  <p className="desc">현장 학습 보러가기</p>
                  <a href="/" className="btn">
                    <img className="img" src={img9} alt="이미지14" />
                  </a>
              </div>
          </article>
          <article className="imageType__sketch">
              <figure className="sketch__header">
              <img className="img" src={img8} alt="이미지15" />
              </figure>
              <div className="sketch__body">
                  <h3 className="title">현장스케치8</h3>
                  <p className="desc">현장 학습 보러가기</p>
                  <a href="/" className="btn">
                    <img className="img" src={img9} alt="이미지16" />
                  </a>
              </div>
          </article>
      </div>
    </section>
  )
}

export default Img;