import React from 'react'

function Header(props) {
  return (
    <header id="headerType" className={props.fonts}>
        <div className="header__inner">
            <h1 className="header__logo">
                <a href="/">PET ACADEMY</a>
            </h1>
            <nav className="header__menu">
                <h2 className="ir_so">메인 메뉴</h2>
                <ul>
                    <li><a href="/">아카데미소개</a></li>
                    <li><a href="/">전문교육과정</a></li>
                    <li><a href="/">취창업정보</a></li>
                    <li><a href="/">수강후기</a></li>
                    <li><a href="/">고객센터</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header;