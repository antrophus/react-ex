import React, {useState, useEffect} from 'react';

const Ex15 = () => {
    /* --상태관리 관련변수들(화면에 렌더링)-- */
    const [no, setNo] = useState(0);
    //일반 변수들

    /* --일반 메소드-- */
    
    /* --생명주기 + 이벤트 관련 메소드-- */
    // [] 안에 아무 것도 없을 경우는 로딩 될 때, [] 안에 내용이 있으면 그 내용을 할 때. '훅' 이라고한다.
    useEffect(()=>{  
        console.log('no가 변할 때'); 
    }, [no]); 

    //버튼 클릭했을 때
    const handlePlus = () => {
        //setNo(no+1);
        setNo((prevNo) => {
            return prevNo + 1;
        });

        console.log(no);
    }

    
    return (
        <>
            {no}
            <br/>
            <button type="button" on onClick={handlePlus}>버튼</button>
        </>
    );
};

export default Ex15;