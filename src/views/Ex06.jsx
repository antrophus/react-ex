//import 라이브러리
import React, { useState } from 'react';
//import css

const Ex06 = () => {

    /*---상태관리 변수들(값이 변하면 화면 랜더링)  ----------*/
    let [no, setNo] = useState(0);
    let [name, setName] = useState('박명수-초기값');
    // let sum = plus(3,5)
    /*---일반 메소드 --------------------------------------------*/

    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/

    const handlePlus = () => {

        //setNo(no+1); // no값이 이전 값이 아닐 수도 있기에,-인터넷이 느리거나 하는 이유로 반드시 이전 값을 더해야한다.
        setNo((preNo) => {
            
            return preNo + 1;
        });
    }

    const handleNamePrint = () => {
        console.log("정우성-콘솔");
        setName("정우성-화면");
    }
    return (
        <>
            {no}
            <br />
            <button type="button" onClick={handlePlus}>숫자증가</button>
            <br />
            {name}
            <br />
            <button type="button" onClick={handleNamePrint}>이름변경</button>
        </>
    );
}


export default Ex06;
