import React from "react";
import {onClick, onCopy} from "../utils/Copy";

const Account = () => {
    return (
        <div className="box">
            <h2 className="ico" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">🤍</h2>
            <ul className="account" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">
                <li><h3>🤵🏻 신랑측 혼주 계좌번호</h3></li>
                <li>
                    <ul>
                        <li>(부) 농협은행 352-1399-1795-23</li>
                        <li>나성원</li>
                    </ul>
                    <div>
                        <a onClick={() => onCopy('3521399179523')}>계좌 복사하기</a>
                    </div>
                </li>
                <li>
                    <ul>
                        <li>(모) 신한은행 110-393-499231</li>
                        <li>성춘희</li>
                    </ul>
                    <div>
                        <a onClick={() => onCopy('110393499231')}>계좌 복사하기</a>
                    </div>
                </li>
                {/* <li>
                    <h3>🤵🏻 신랑 측 계좌번호</h3>
                    <ul>
                        <li>토스뱅크 1000-5055-8487</li>
                        <li>나규태</li>
                    </ul>
                    <div>
                        <a onClick={() => onCopy('100050558487')}>계좌 복사하기</a>
                        <a onClick={() => onClick('https://link.kakaopay.com/_/gbCaAUM')}><i className="ic-kakaotalk"></i>카카오페이 송금하기</a>
                    </div>
                </li>
                <li>
                    <h3>👰🏻‍♀️ 신부 측 계좌번호</h3>
                    <ul>
                        <li>토스뱅크 1000-2298-9148</li>
                        <li>최보영</li>
                    </ul>
                    <div>
                        <a onClick={() => onCopy('100022989148')}>계좌 복사하기</a>
                        <a onClick={() => onClick('https://link.kakaopay.com/_/0C7aeoq')}><i className="ic-kakaotalk"></i>카카오페이 송금하기</a>
                    </div>
                </li> */}
            </ul>
        </div>
    )
}

export default Account
