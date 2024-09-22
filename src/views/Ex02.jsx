//import 라이브러리
import React from 'react';
import { Link } from 'react-router-dom';

//import css
import '../css/reset.css';
import '../css/ex02.css';


const Ex02 = () => {

    const lastMovie = "2023년 영화 [서울의 봄]";

    return (
        <>
            <h1>정우성프로필</h1>
            <br />

            <h2>최근작품</h2>
            {lastMovie}

            <h2>프로필사진</h2>
            <img src="./images/JungWooSung.jpg" alt="정우성프로필" />
            <br />
            <Link to="https://namu.wiki/w/%EC%A0%95%EC%9A%B0%EC%84%B1" rel="noreferrer noopener">정우성의 위키백과 바로가기</Link>
            <h2>정보</h2>

            <table>
                <colgroup>
                    <col style={{ width: '100px' }} />
                    <col style={{ width: '120px' }} />
                    <col style={{ width: '100px' }} />
                    <col style={{ width: '150px' }} />
                </colgroup>
                <thead style={{
                    border: '1px solid black',
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    fontWeight: 'bold'
                }}>
                    <tr style={{ border: '1px silid black' }}>
                        <th>이름</th>
                        <th>소속사</th>
                        <th>생년월일</th>
                        <th>데뷔작</th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>정우성</td>
                        <td>아티스트컴포니</td>
                        <td>1973/03/20</td>
                        <td>1994년 영화 구미호</td>
                    </tr>
                    <tr>
                        <td colSpan="4">{lastMovie}</td>
                    </tr>
                    <tr>
                        <td colSpan="4">2023년 영화 [보호자]</td>
                    </tr>
                    <tr>
                        <td colSpan="4">2022년 영화 [헌트]</td>
                    </tr>
                    <tr>
                        <td colSpan="4">2020년 영화 [강철비 2: 정상회담]</td>
                    </tr>
                    <tr>
                        <td colSpan="4">2020년 영화 [지푸라기라도 잡고 싶은 짐승들]</td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <label htmlFor="txt-email">당신의 이메일 주소는</label>
            <input type="text" id="txt-email" name="" value="" placeholder='email'/>




        </>

    );
}

export default Ex02;
