//import 라이브러리
import React, { useState } from 'react';

const Ex07 = () => {


    /*---상태관리 변수들(값이 변하면 화면 랜더링)  ----------*/
    let [no, setNo] = useState(0);
    // let sum = plus(3,5)
    /*---일반 메소드 --------------------------------------------*/

    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/


    const handlePlus = () => {
        //setNo(no+1); // no값이 이전 값이 아닐 수도 있기에,-인터넷이 느리거나 하는 이유로 반드시 이전 값을 더해야한다.
        setNo((preNo) => {
            let result =  preNo + 1;
            console.log(result);
            return result;
        });
    }
    const handleMinus = () => {
        //setNo(no+1); // no값이 이전 값이 아닐 수도 있기에,-인터넷이 느리거나 하는 이유로 반드시 이전 값을 더해야한다.
        setNo((preNo) => {
            return preNo - 1;
        });
        console.log(no);
    }
    const handleReset = () => {
        //setNo(no+1); // no값이 이전 값이 아닐 수도 있기에,-인터넷이 느리거나 하는 이유로 반드시 이전 값을 더해야한다.
        setNo((preNo) => {
            return preNo = 0;
        });
        console.log(no);
    }

    return (
        <>
        <h1>리액트 공부</h1>
        <h2>이벤트</h2>
        <h3>클릭이벤트</h3>

            {no}
            <br />
            <button type="button" onClick={handlePlus}>더하기</button>
            <br />
            <button type="button" onClick={handleMinus}>빼기</button>
            <br />
            <button type="button" onClick={handleReset}>초기화</button>

        </>

    );
}


export default Ex07;
