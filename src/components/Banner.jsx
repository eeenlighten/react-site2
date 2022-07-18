import React from 'react'

function Banner(props) {
  return (
    <section id="bannerType" className={`banner__wrap ${props.skill[0]} ${props.skill[1]}`}>
        <h2 className="ir_so">배너 영역</h2>
        <div className="banner__inner">
            <h3 className="banner__title">PET ACADEMY</h3>
            <p className="banner__desc">
                취업과 창업에 강한 PET ACADEMY<br />소수 정예 교육으로 개인 수준에 따른 맞춤형 교육을 진행합니다.
                <a href="/">바로 가기</a>
            </p>
        </div>
    </section>
  )
}

export default Banner;