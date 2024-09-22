//import 라이브러리
import React from 'react';
import { Link } from 'react-router-dom';

//import css



const Ex04 = () => {

    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/

    /*---일반 메소드 --------------------------------------------*/

    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    // function handleNamePrint(){
    //     console.log("정우성");
    // }

    const handleNamePrint = () => {
        console.log("정우성");
    }

    let a = 0;

    const increaseNumber = () => {
        console.log(++a) ;
    }
    const decreaseNumber = () => {
        console.log(--a) ;
    }

    return (
        <>
            <button type='button' onClick={handleNamePrint}>이름출력</button>
            <br/>
            <button type='button' onClick={increaseNumber}>숫자증가</button>
            <br/>
            <button type='button' onClick={decreaseNumber}>숫자감소</button>
        </>

    );
}

export default Ex04;
