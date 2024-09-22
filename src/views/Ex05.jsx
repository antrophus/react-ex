//import 라이브러리
import React from 'react';
import { Link } from 'react-router-dom';

//import css



const Ex05 = () => {

    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/

    /*---일반 메소드 --------------------------------------------*/

    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    // function handleNamePrint(){
    //     console.log("정우성");
    // }

    
    let a = 0;

    const handlePlus = () => {
        console.log(++a) ;
    }
    const handleMinus = () => {
        console.log(--a) ;
    }
    const handleReset = () => {
        a = 0;
        console.log(a) ;
    }
    

    return (
        <>
            <h1>리액트 공부</h1>
            <h2>이벤트</h2>
            <p>클릭이벤트</p>
            <p>클릭하면 콘솔에 출력됨</p>
            <button type='button' onClick={handlePlus}>더하기</button>
            <br/>
            <button type='button' onClick={handleMinus}>빼기</button>
            <br/>
            <button type='button' onClick={handleReset}>초기화</button>
        </>

    );
}

export default Ex05;
