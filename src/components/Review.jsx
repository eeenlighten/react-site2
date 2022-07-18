import React from 'react'
import review from '../assets/images/smile1.png';
import review2 from '../assets/images/smile2.png';
import review3 from '../assets/images/smile3.png';
import review4 from '../assets/images/star.png';

function Review(props) {
  return (
    <section id="reviewType" className={props.fonts}>
        <h2>수업 후기</h2>
        <p>수강생들의 솔직한 후기를 보실 수 있습니다.</p>
        <div className="review__inner container">
            <div className="review__box">
                <div className="desc">
                    20, 30대를 함께 보낸 아이와 이별 후 사실 죄책감이 없진 않았어요. 강의 듣고 제가 아이에게 최선을 다했다는 위로. 아직 아이 유골을 데리고 있는데 이것 또한 왠지 잘못하는 것 같은 생각을 가지고 있었고, 아이를 보내줄 수 있는 시간은 정해진것이 아니기에 준비되면 보내도 되는구나라는 조언을 처음듣고 위안이 되었습니다. 감사합니다. 
                </div>
                <div className="title">
                    <span><img className="img" src={review} alt="이미지1" /></span>
                    <p>이태용<span>&nbsp;펫아카데미 5기</span></p>
                    <div className="star">
                        <figure>
                        <img className="img" src={review4} alt="이미지2" />
                        </figure>
                    </div>
                </div>
                <a href="/" className="btn">
                자세히보기
                </a>
            </div>
            <div className="review__box">
                <div className="desc">
                    반려견에게 집에서 간단히 어렵지 않게 만들 수 있는 간식 레시피가 다양해서 손 쉽게 만들 수 있는 수업을 듣게 되어 유익한 시간(수업)이 었습니다! 계속 만들 수 있는 수업이 이어질 수 있도록 했으면 좋겠습니다~
                </div>
                <div className="title">
                    <span><img className="img" src={review2} alt="이미지3" /></span>
                    <p>김희진<span>&nbsp;펫아카데미 17기</span></p>
                    <div className="star">
                        <figure>
                        <img className="img" src={review4} alt="이미지4" />
                        </figure>
                    </div>
                </div>
                <a href="/" className="btn">
                자세히보기
                </a>
            </div>
            <div className="review__box">
                <div className="desc">
                    너무 모르고 광범위 했던 교육이라 생각했는데 조금이나마 알 수 있었고 더 공부를 해야겠다고 생각이 들었습니다. 이론과 실습을 함께 할 수 있어 좋았고 교육하시는 교수님들도 쉽게 설명해 주셔서 좋았습니다.
                </div>
                <div className="title">
                    <span><img className="img" src={review3} alt="이미지5" /></span>
                    <p>정승연<span>&nbsp;펫아카데미 5기</span></p>
                    <div className="star">
                        <figure>
                        <img className="img" src={review4} alt="이미지6" />
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