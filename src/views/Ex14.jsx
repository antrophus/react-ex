import React, {useEffect} from 'react';

const Ex14 = () => {
    /* --상태관리 관련변수들(화면에 렌더링)-- */

    //일반 변수들

    /* --일반 메소드-- */
    
    /* --생명주기 + 이벤트 관련 메소드-- */
    useEffect(()=>{  // []마운트될 때 (화면이 켜졌을 때)
        console.log('마운트 될 때'); 
    }, []); 

    
    return (
        <>
            <button type="button">버튼</button>
        </>
    );
};

export default Ex14;