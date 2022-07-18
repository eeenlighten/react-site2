import React from 'react'
import Icon from '../assets/images/icon1.png';
import Icon2 from '../assets/images/icon2.png';
import Icon3 from '../assets/images/icon3.png';
import Icon4 from '../assets/images/icon4.png';
import Icon5 from '../assets/images/icon5.png';

function Footer(props) {
  return (
    <footer id="footerType" className={`footer__wrap ${props.skill[0]} ${props.skill[1]}`}>
        <h2 className="ir_so">푸터 영역</h2>
        <div className="footer__inner container">
            <div className="footer__wrap">
                <div className="footer_left">
                    <div className="footer_info">
                        <h3>PET ACADEMY</h3>
                        <ul>
                            <li>안녕하세요!</li>
                            <li>더 다양한 정보확인</li>
                            <li>petacademy@gmail.com</li>
                        </ul>
                    </div>
                    <div className="icon">
                        <ul>
                            <li><a href="/"><img className="img" src={Icon}  alt="이미지1"/></a></li>
                            <li><a href="/"><img className="img" src={Icon2}  alt="이미지2"/></a></li>
                            <li><a href="/"><img className="img" src={Icon3}  alt="이미지3"/></a></li>
                            <li><a href="/"><img className="img" src={Icon4}  alt="이미지4"/></a></li>   
                            <li><a href="/"><img className="img" src={Icon5}  alt="이미지5"/></a></li>               
                        </ul>
                    </div>
                </div>
                <div className="footer__menu">
                    <div>
                        <h3>소개</h3>
                        <ul>
                            <li><a href="/">아카데미 소개</a></li>
                            <li><a href="/">오시는길</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>강의안내</h3>
                        <ul>
                            <li><a href="/">개강 일정</a></li>
                            <li><a href="/">국비과정 NCS</a></li>
                            <li><a href="/">일반과정 개강</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>컨설팅</h3>
                        <ul>
                            <li><a href="/">블랙탑 컨설팅</a></li>
                            <li><a href="/">창업센터</a></li>
                        
                        </ul>
                    </div>
                    <div>
                        <h3>커뮤니티</h3>
                        <ul>
                            <li><a href="/">현장스케치</a></li>
                            <li><a href="/">공지사항</a></li>
                            <li><a href="/">이벤트</a></li>
                            <li><a href="/">sns</a></li>
                            <li><a href="/">건의함</a></li>
                            <li><a href="/">취업지원센터</a></li>
                        </ul>
                    </div>
                </div> 
            </div>
            <address className="footer__address">
                Copyright 2022. All Rights Reserved. - Designde by JS
            </address>
        </div>
    </footer>
  )
}

export default Footer;