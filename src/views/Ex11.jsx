import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Ex11 = () => {
    /* --상태관리 관련변수들(화면에 렌더링)-- */
    const [searchParams] = useSearchParams();

    //일반 변수들
    const strNo = searchParams.get('no'); // String
    const intNo = Number(strNo);   // String --> Number

    /* --일반 메소드-- */
    const getImgTag = (no) => {
        if(no === 1){
            console.log("1번 그림")
            return <img src="./images/01.png" alt="number1"/>

        } else if(no === 2) {
            console.log("2번 그림")
            return <img src="./images/02.png" alt="number2"/>

        } else if(no === 3) {
            console.log("3번 그림")
            return <img src="./images/03.png" alt="number3"/>

        } else if(no === 4) {
            console.log("4번 그림")
            return <img src="./images/04.png" alt="number4"/>

        } else {
            console.log("그림이 존재하지 않습니다.")
            return <p>그림 없음</p>
        }
    };

    /* --생명주기 + 이벤트 관련 메소드-- */
    return (
        <>
            {getImgTag(intNo)}
        </>
    );
};

export default Ex11;