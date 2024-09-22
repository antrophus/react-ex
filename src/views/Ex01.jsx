//import 라이브러리
import React from 'react';


// import '../css/ex01.css';
import { Link } from 'react-router-dom';
//주석
/*
주석
*/

/* let personVo ={
    name: '정우성',
    hp: '010'
} */

//자바스크립트 객체
/* let cssex = {
    width: '20px'
} */

let name='함민규'

let cssex2 = {
    fontSize: '40px',
    fontWeight: 'bold'
}


const Ex01 = () => {

    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/

    /*---일반 메소드 --------------------------------------------*/

    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    return (
        <>  
            {/*주석*/}
            <h1 className="title">정우성 홈페이지</h1>
            <h1 style={ {fontSize: '40px'}}>{name} 홈페이지</h1>

            <img src="./images/JungWooSung.jpg" alt="정우성 사진" />

            <table border="1">
                <colgroup>
                    <col style={ {width: '100px'} }/>
                    <col style={ {width: '100px'} }/>
                    <col style={ {width: '100px'} }/>
                    <col style={ cssex2 }/>
                </colgroup>
                <tbody>
                    <tr>
                        <td>1,1</td>
                        <td>1,2</td>
                        <td>1,3</td>
                        <td>1,4</td>
                    </tr>
                    <tr> {/* 낙타표기로 써야 인식한다. 주석표시{} <-요 안에 / * * / <- 요거 넣어서 씀 !확인! */}
                        <td rowSpan="2">2,1</td>    {/* 세로 */}
                        <td colSpan="2">2,2</td>    {/* 가로 */}
                        <td>2,4</td>
                    </tr>
                    <tr>
                        <td>3,2</td>
                        <td>3,3</td>
                        <td>3,4</td>
                    </tr>
                </tbody>
            </table>

            <br />
            <br />
            <br />
            <div>
                <label htmlFor='txt-name'>이름</label>
                <input id="txt-name" type="text" name="" value="" />
            </div>
            <div>
                <label htmlFor='rdo-dog'>강아지</label>
                <input id="rdo-dog" type="radio" name="pet" value=""  />
                <br/>
                <label htmlFor='rdo-cat'>고양이</label>
                <input id="rdo-cat" type="radio" name="pet" value=""  />
            </div>
            <a href="http://localhost:3000/ex00">정우성 위키피디아 바로가기</a>
            <br />
            {/* 위에 import 해줘야 사용가능 */}
            <Link to="http://localhost:3000/ex00" rel="noreferrer noopener">정우성의 위키백과 바로가기2</Link>


        </>

    );
}

export default Ex01;
