import React from 'react';

const Ex12 = () => {
    /* --상태관리 관련변수들(화면에 렌더링)-- */

    //일반 변수들

    /* --일반 메소드-- */

    /* --생명주기 + 이벤트 관련 메소드-- */

    const fruitList = ['사과', '바나나', '체리', '포도'];

    return (
        <>
            <ul>
                {
                    fruitList.map((fruit, index)=>{
                        console.log(fruit);
                        console.log(index);
                        return (
                            <li>{fruit}</li>
                    );
                    })
                }
            </ul>
        </>
    );
};

export default Ex12;