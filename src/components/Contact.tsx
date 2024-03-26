import React from "react";
import {onClick, onCall, sendSms, onCopy} from "../utils/Copy";


const Contact = () => {
    return (
        <div className="box">
            <h2 className="ico" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">🤍</h2>
            <ul className="contact">
                <li data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">
                    <h3>🤵🏻 신랑측 혼주</h3>
                </li>
                <li data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">
                    <h4>신랑 아버지 나성원</h4>
                    <ul>
                        <li>
                            <p>농협은행 352-1399-1795-23</p>
                            <a onClick={() => onCopy('3521399179523')}>복사하기</a>
                        </li>
                        <li>
                            <button onClick={() => sendSms('01029302682')}>문자 보내기</button>
                            <button onClick={() => onCall('01029302682')}>전화 걸기</button>
                        </li>
                    </ul>
                </li>
                <li>
                    <h4>신랑 어머니 성춘희</h4>
                    <ul>
                        <li>
                            <p>신한은행 110-393-499231</p>
                            <a onClick={() => onCopy('110393499231')}>복사하기</a>
                        </li>
                        <li>
                            <button onClick={() => sendSms('01088062682')}>문자 보내기</button>
                            <button onClick={() => onCall('01088062682')}>전화 걸기</button>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Contact
