import React from 'react'
import review from '../assets/images/smile1.png';
import review2 from '../assets/images/smile2.png';
import review3 from '../assets/images/smile3.png';
import review4 from '../assets/images/star.png';

function Review() {
  return (
    <section id="reviewType">
    <h2>수업 후기</h2>
    <p>수강생들의 솔직한 후기를 보실 수 있습니다.</p>
    <div className="review__inner container">
    <div className="review__box">
        <div className="desc">
            기초 바리스타 과정을 학습하고 카페 운영에 필요한 전반적인 교육을 지원받았습니다. 감사합니다. 기초 바리스타 과정을 학습하고 카페 운영에 필요한 전반적인 교육을 지원받았습니다. 감사합니다. 기초 바리스타 과정을 학습하고 카페 운영에 필요한 전반적인 교육을 지원받았습니다. 감사합니다.
        </div>
        <div className="title">
            <span><img className="img" src={review} /></span>
            <p>이태용<span>&nbsp;펫아카데미 5기</span></p>
            <div className="star">
                <figure>
                 <img className="img" src={review4} />
                </figure>
            </div>
        </div>
        <a href="/" className="btn">
           자세히보기
        </a>
    </div>
    <div className="review__box">
        <div className="desc">
            기초 바리스타 과정을 학습하고 카페 운영에 필요한 전반적인 교육을 지원받았습니다. 감사합니다. 기초 바리스타 과정을 학습하고 카페 운영에 필요한 전반적인 교육을 지원받았습니다. 감사합니다. 기초 바리스타 과정을 학습하고 카페 운영에 필요한 전반적인 교육을 지원받았습니다. 감사합니다.
        </div>
        <div className="title">
            <span><img className="img" src={review2} /></span>
            <p>김희진<span>&nbsp;펫아카데미 17기</span></p>
            <div className="star">
                <figure>
                <img className="img" src={review4} />
                </figure>
            </div>
        </div>
        <a href="/" className="btn">
           자세히보기
        </a>
    </div>
    <div className="review__box">
        <div className="desc">
            기초 바리스타 과정을 학습하고 카페 운영에 필요한 전반적인 교육을 지원받았습니다. 감사합니다. 기초 바리스타 과정을 학습하고 카페 운영에 필요한 전반적인 교육을 지원받았습니다. 감사합니다. 기초 바리스타 과정을 학습하고 카페 운영에 필요한 전반적인 교육을 지원받았습니다. 감사합니다.
        </div>
        <div className="title">
            <span><img className="img" src={review3} /></span>
            <p>정승연<span>&nbsp;펫아카데미 5기</span></p>
            <div className="star">
                <figure>
                <img className="img" src={review4} />
                </figure>
            </div>
        </div>
        <a href="/" className="btn">
           자세히보기
        </a>
    </div>
</div>
</section>
  )
}

export default Review;