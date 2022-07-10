import React from 'react'

function Text() {
  return (
    <section id="textType"> 
    <div className="textType__wrap">
        <h2 className="ir_so"> 교육과정 </h2>    
        <div className="textType__text">                  
            <span>PET MASTER</span>
            <h2>펫마스터<br/>전문과정
            </h2>
            <p>펫마스터로 취업하기 위한 전문 과정입니다.<br/>여러분들도 도전해보세요!</p>
        </div>
        <div className="textType__inner container">
            <div className="text">
                <h3>반려동물 관리사</h3>
                <p>반려동물 케어 전반을 익혀 기본부터<br/>한 발 앞서나가는 만능 펫테이너의 필수 소양</p>
            </div>
            <div className="text">
                <h3>반려동물식품관리사</h3>
                <p>블루오션 끝.판.왕!<br/>반려동물 먹거리 산업 필수 교육 과정</p>
            </div>
            <div className="text">
                <h3>반려동물 행동교정사</h3>
                <p>반려동물을 잘 다루는 사람이 시장에서 성공한다! 반려동물 산업의 필수인력!</p>
            </div>
            <div className="text">
                <h3>펫뷰티션</h3>
                <p>반려동물 산업의 중심!<br/>위생부터 미용, 의상 제작부터 악세서리까지</p>
            </div>
        </div>
    </div>    
</section>
  )
}

export default Text;