import React from 'react';
import Cardimg from '../assets/images/card01.jpg';
import Cardimg2 from '../assets/images/card02.jpg';
import Cardimg3 from '../assets/images/card03.jpg';

function card(props) {
  return (
    <section id="cardType" className={`card__wrap ${props.skill[0]} ${props.skill[1]}`}>
        <h2>스킬UP 교육</h2>
        <p>국가 대표 최고의 강사진<br />우수한 교수진들의 높은 교육 완성도를 자랑합니다.</p>
        <div className="card__inner container">
            <article className="card">
                <figure className="card__header">
                    <img className="img" src={Cardimg} alt="이미지1" />
                </figure>
                <div className="card__body card_color01">
                    <h3 className="title">행동교정</h3>
                    <a className="btn" href="/">더 자세히 보기</a>
                </div>
            </article>
            <article className="card">
                <figure className="card__header ">
                    <img className="img" src={Cardimg2} alt="이미지2"/>
                </figure>
                <div className="card__body card_color02">
                    <h3 className="title">펫푸드</h3>
                    <a className="btn" href="/">더 자세히 보기</a>
                </div>
            </article>
            <article className="card">
                <figure className="card__header">
                    <img className="img" src={Cardimg3} alt="이미지3" />
                </figure>
                <div className="card__body card_color03">
                    <h3 className="title">펫미용</h3>
                    <a className="btn" href="/">더 자세히 보기</a>
                </div>
            </article>
        </div>
    </section>
  )
}

export default card;